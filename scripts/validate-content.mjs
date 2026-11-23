import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

function extractData(file) {
  const text = readFileSync(file, 'utf8');
  const start = text.indexOf('= [');
  if (start === -1) throw new Error('Não foi encontrada exportação de array em ' + file);
  return JSON.parse(text.slice(start + 2).trim().replace(/;\s*$/, ''));
}
const tracks = extractData('src/data/tracks.ts');
const questions = extractData('src/data/questions.ts');
const tutors = extractData('src/data/unicidTutors.ts');

function extractNamedData(file, name) {
  const text = readFileSync(file, 'utf8');
  const declaration = 'export const ' + name;
  const idx = text.indexOf(declaration);
  assert.ok(idx>=0, 'Declaração inexistente: '+name);
  const open = text.indexOf('= [',idx);
  const close = text.indexOf(';\n',open);
  assert.ok(open>=0&&close>open, 'Array não encontrado: '+name);
  return JSON.parse(text.slice(open+2,close).trim());
}
const designSources = extractNamedData('src/data/designCourse.ts','designSources');
const designUnits = extractNamedData('src/data/designCourse.ts','designUnits');
const designQuestions = extractNamedData('src/data/designQuestions.ts','designQuestions');

assert.equal(tracks.length, 12, 'São esperadas 12 trilhas');
assert.equal(questions.length, 60, 'São esperadas exatamente 60 questões');
assert.equal(tutors.length, 5, 'São esperados cinco tutores UNICID');
assert.equal(new Set(tracks.map(t => t.id)).size, tracks.length, 'Trilhas duplicadas');
assert.equal(new Set(questions.map(q => q.id)).size, questions.length, 'Questões duplicadas');
for (const track of tracks) {
  assert.ok(track.lessons.length >= 5, 'Trilha sem aulas suficientes: ' + track.id);
  assert.ok(track.sources.length > 0, 'Trilha sem referências: ' + track.id);
  const perTrack = questions.filter(q => q.trackId === track.id);
  assert.equal(perTrack.length, 5, 'Trilha sem cinco questões: ' + track.id);
}
for (const question of questions) {
  assert.equal(question.options.length, 4, question.id + ' precisa de quatro alternativas');
  assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4);
  assert.ok(question.explanation.length > 20, 'Sem justificativa: ' + question.id);
}
for (const tutor of tutors) {
  assert.ok(tutor.modules.length >= 4, 'Tutor com poucas unidades: ' + tutor.id);
  assert.equal(new Set(tutor.modules.map(module => module.id)).size, tutor.modules.length, 'Módulos repetidos');
  assert.ok(tutor.official.index.endsWith('/indices/' + tutor.id + '.md'), 'Índice de origem incorreto: ' + tutor.id);
  assert.ok(tutor.official.syllabus.includes('/disciplinas/' + tutor.id + '/ementa.md'), 'Ementa de origem incorreta: ' + tutor.id);
  for (const relatedId of tutor.relatedTrackIds) {
    assert.ok(tracks.some(track => track.id === relatedId), 'Disciplina relacionada ausente: ' + relatedId);
  }
}
console.log('Cinco tutores UNICID e ' + tutors.reduce((n,t)=>n+t.modules.length,0) + ' módulos de revisão validados.');

assert.equal(designUnits.length, 4, 'Design Profissional precisa de quatro unidades');
assert.equal(designSources.length, 13, 'São esperadas 13 referências específicas');
assert.equal(designUnits.reduce((n,u)=>n+u.lessons.length,0), 12, 'São esperadas 12 aulas detalhadas');
assert.equal(designQuestions.length,40,'São esperadas 40 questões DP');
assert.equal(new Set(designQuestions.map(q=>q.id)).size,40,'Perguntas DP duplicadas');
const srcIds = new Set(designSources.map(s=>s.id));
for (const unit of designUnits) {
  assert.equal(unit.lessons.length,3,'Unidade DP com número incorreto de aulas: '+unit.id);
  assert.equal(designQuestions.filter(q=>q.unitId===unit.id && q.phase==='rev').length,4);
  for (const phase of ['A','B']) assert.equal(designQuestions.filter(q=>q.unitId===unit.id && q.phase===phase).length,3);
  for (const lesson of unit.lessons) {
    assert.ok(lesson.paragraphs.length>=3,'Aula curta: '+lesson.id);
    assert.ok(lesson.paragraphs.every(p=>p.length>90),'Parágrafo muito curto: '+lesson.id);
    assert.ok(lesson.sourceIds.length>0,'Aula sem fonte: '+lesson.id);
    assert.ok(lesson.sourceIds.every(id=>srcIds.has(id)),'Referência não registrada: '+lesson.id);
    assert.ok(lesson.example.situation.length>20 && lesson.example.approach.length>30 && lesson.example.why.length>30);
    assert.ok(lesson.activity.length>30);
  }
}
for (const question of designQuestions) {
  assert.ok(designUnits.some(u=>u.id===question.unitId),'Pergunta DP sem unidade: '+question.id);
  assert.ok(['rev','A','B'].includes(question.phase),'Fase inválida: '+question.id);
  assert.equal(question.options.length,4,'Alternativas insuficientes: '+question.id);
  assert.ok(Number.isInteger(question.answer)&&question.answer>=0&&question.answer<4);
  assert.ok(question.explanation.length>30,'Explicação incompleta: '+question.id);
}
console.log('Design Profissional validado: 4 unidades, 12 aulas, 13 fontes e 40 questões (16 revisões + 24 simulados).');

console.log('Validação concluída: 12 trilhas, ' + tracks.reduce((n,t)=>n+t.lessons.length,0) + ' aulas e 60 questões.');
