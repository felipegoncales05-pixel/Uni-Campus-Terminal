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
console.log('Validação concluída: 12 trilhas, ' + tracks.reduce((n,t)=>n+t.lessons.length,0) + ' aulas e 60 questões.');
