import { useEffect, useState, type CSSProperties } from 'react';
import {
  ArrowRight, BookOpen, Check, CheckCircle2, ChevronLeft, ChevronRight,
  ClipboardCheck, ExternalLink, FileText, GraduationCap, Layers3, RotateCcw, ShieldCheck
} from 'lucide-react';
import { designUnits, designSources } from '../data/designCourse';
import { designQuestions, type DesignQuestion } from '../data/designQuestions';

type Section = 'lessons' | 'review' | 'simulations' | 'sources';
type TestKind = 'A' | 'B';

const DONE_KEY = 'campus-dp-done-v1';
const NOTES_KEY = 'campus-dp-notes-v1';
const ANSWERS_KEY = 'campus-dp-answers-v1';
const SUBMITTED_KEY = 'campus-dp-submitted-v1';

function restore<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    if (!value) return fallback;
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(fallback) && Array.isArray(parsed)) return parsed as T;
    if (typeof fallback === 'object' && parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed as T;
  } catch { /* pode estar bloqueado no navegador */ }
  return fallback;
}
const sections: {id: Section; label:string}[] = [
  {id:'lessons',label:'Aulas'},
  {id:'review',label:'Revisão'},
  {id:'simulations',label:'Simulados'},
  {id:'sources',label:'Fontes'},
];

export default function DesignCourse() {
  const [section, setSection] = useState<Section>('lessons');
  const [unitIndex, setUnitIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [testKind, setTestKind] = useState<TestKind>('A');
  const [done, setDone] = useState<string[]>(()=>restore(DONE_KEY,[]));
  const [notes, setNotes] = useState<Record<string,string>>(()=>restore(NOTES_KEY,{}));
  const [answers, setAnswers] = useState<Record<string,number>>(()=>restore(ANSWERS_KEY,{}));
  const [submitted, setSubmitted] = useState<Record<string,boolean>>(()=>restore(SUBMITTED_KEY,{}));

  useEffect(()=>{try{localStorage.setItem(DONE_KEY,JSON.stringify(done));}catch{/*ignore*/}},[done]);
  useEffect(()=>{try{localStorage.setItem(NOTES_KEY,JSON.stringify(notes));}catch{/*ignore*/}},[notes]);
  useEffect(()=>{try{localStorage.setItem(ANSWERS_KEY,JSON.stringify(answers));}catch{/*ignore*/}},[answers]);
  useEffect(()=>{try{localStorage.setItem(SUBMITTED_KEY,JSON.stringify(submitted));}catch{/*ignore*/}},[submitted]);

  const unit = designUnits[unitIndex];
  const lesson = unit.lessons[lessonIndex];
  const lessonKey = unit.id + ':' + lesson.id;
  const lessonCount = designUnits.reduce((n,u)=>n+u.lessons.length,0);
  const completed = designUnits.flatMap(u=>u.lessons.map(l=>u.id+':'+l.id)).filter(k=>done.includes(k)).length;
  const review = designQuestions.filter(q=>q.unitId===unit.id && q.phase==='rev');
  const testQuestions = designQuestions.filter(q=>q.phase===testKind);
  const testKey = 'sim-'+testKind;
  const tested = Boolean(submitted[testKey]);
  const testAnswered = testQuestions.filter(q=>answers[q.id]!==undefined).length;
  const testCorrect = testQuestions.filter(q=>answers[q.id]===q.answer).length;

  function gotoUnit(index:number) {
    setUnitIndex(index);
    setLessonIndex(0);
    setSection('lessons');
  }
  function selectAnswer(q: DesignQuestion,index:number) {
    if (q.phase!=='rev' && submitted['sim-'+q.phase]) return;
    setAnswers(current=>({...current,[q.id]:index}));
  }
  function resetTest() {
    const ids = new Set(testQuestions.map(q=>q.id));
    setAnswers(current=>Object.fromEntries(Object.entries(current).filter(([key])=>!ids.has(key))));
    setSubmitted(current=>({...current,[testKey]:false}));
  }
  function renderQuestion(q: DesignQuestion,index:number,isExam:boolean) {
    const selected=answers[q.id];
    const revealed=!isExam || tested;
    return <div className="dp-question" key={q.id}>
      <span className="dp-question-number">QUESTÃO {String(index+1).padStart(2,'0')}</span>
      <h3>{q.prompt}</h3>
      <div className="dp-options">{q.options.map((option,i)=><button key={i} disabled={isExam&&tested}
        className={'dp-option ' + (revealed&&selected!==undefined&&i===q.answer?'correct ':'') + (revealed&&selected===i&&i!==q.answer?'incorrect ':'') + (selected===i?'selected':'')}
        aria-pressed={selected===i} onClick={()=>selectAnswer(q,i)}>
        <span>{String.fromCharCode(65+i)}</span><span>{option}</span>
        {revealed&&selected!==undefined&&i===q.answer&&<CheckCircle2 size={18} aria-label="Alternativa correta"/>}
      </button>)}</div>
      {revealed&&selected!==undefined&&<div className={'dp-explanation '+(selected===q.answer?'positive':'negative')}>
        <strong>{selected===q.answer?'Correto.':'Revise este conceito.'}</strong>
        <p>{q.explanation}</p>
      </div>}
    </div>;
  }
  const unitStyle = {'--dp-accent':['#b49aff','#5bb8fa','#f59e8f','#53d7ad'][unitIndex]} as CSSProperties;

  return <section className="dp-course" style={unitStyle}>
    <div className="eyebrow muted">UNICID · DESIGN PROFISSIONAL · ESTUDO AUTORAL</div>
    <div className="dp-course-hero">
      <div className="dp-course-icon"><GraduationCap size={30}/></div>
      <div><h1>Design Profissional — Curso completo de revisão</h1>
        <p>Quatro unidades baseadas no acervo de 2026.2: teoria ampliada, exemplos explicados, atividades práticas e simulados de treino. Tudo com referências para consultar as apostilas originais.</p></div>
    </div>
    <div className="dp-study-note"><ShieldCheck size={18}/><span>Material complementar elaborado para estudo. <strong>As questões e os simulados são autorais, não são provas A1 ou AF, nem reproduzem perguntas oficiais.</strong> Os documentos permanecem no Drive e a avaliação real depende do professor.</span></div>
    <div className="dp-totals">
      <span><BookOpen size={17}/><strong>{lessonCount}</strong> aulas aprofundadas</span>
      <span><ClipboardCheck size={17}/><strong>16</strong> questões de revisão</span>
      <span><Layers3 size={17}/><strong>2 × 12</strong> questões simuladas</span>
      <span><CheckCircle2 size={17}/><strong>{completed}/{lessonCount}</strong> aulas concluídas</span>
    </div>
    <div className="dp-unit-cards" role="group" aria-label="Unidades de Design Profissional">
      {designUnits.map((u,i)=><button className={unitIndex===i?'active':''} aria-pressed={unitIndex===i} key={u.id}
        onClick={()=>gotoUnit(i)}><span>{u.eyebrow}</span><strong>{u.title}</strong><small>{u.lessons.length} aulas • {u.lessons.filter(l=>done.includes(u.id+':'+l.id)).length} concluídas</small></button>)}
    </div>
    <nav className="dp-tabs" aria-label="Opções do curso">{sections.map(tab=><button key={tab.id} aria-current={section===tab.id?'page':undefined}
      className={section===tab.id?'active':''} onClick={()=>setSection(tab.id)}>{tab.label}</button>)}</nav>

    {section==='lessons'&&<div className="dp-lesson-grid">
      <aside className="dp-lesson-nav"><div className="lesson-list-title">{unit.eyebrow} <span>3 AULAS</span></div>
        {unit.lessons.map((l,i)=><button key={l.id} className={lessonIndex===i?'active':''} onClick={()=>setLessonIndex(i)}>
          {done.includes(unit.id+':'+l.id)?<CheckCircle2 size={18} color="#64e0a9"/>:<span className="dp-lesson-index">0{i+1}</span>}
          <span>{l.title}</span></button>)}
      </aside>
      <article className="dp-article">
        <div className="eyebrow muted">{unit.eyebrow} · AULA {lessonIndex+1}/3</div>
        <h2>{lesson.title}</h2>
        <div className="dp-objectives"><strong>Ao terminar, você deverá conseguir:</strong><ul>{lesson.objectives.map(o=><li key={o}>{o}</li>)}</ul></div>
        <div className="dp-prose">{lesson.paragraphs.map(p=><p key={p}>{p}</p>)}</div>
        <div className="dp-concepts"><strong>Conceitos-chave</strong><div>{lesson.concepts.map(s=><span key={s}>{s}</span>)}</div></div>
        <section className="dp-example"><h3>Exemplo comentado</h3><p><strong>Situação: </strong>{lesson.example.situation}</p><p><strong>Possível abordagem: </strong>{lesson.example.approach}</p><p><strong>Por que funciona: </strong>{lesson.example.why}</p></section>
        <div className="dp-activity"><h3>Pratique sem olhar uma resposta pronta</h3><p>{lesson.activity}</p></div>
        <label className="dp-note-label" htmlFor="dp-personal-notes">Sua resposta ou anotação</label>
        <textarea id="dp-personal-notes" className="dp-textarea" value={notes[lessonKey]||''} onChange={e=>setNotes(current=>({...current,[lessonKey]:e.target.value}))}
          rows={4} placeholder="Anote seu raciocínio. O texto fica salvo apenas neste navegador."/>
        <div className="dp-sources"><h3>Fontes desta aula</h3>{lesson.sourceIds.map(id=>{const src=designSources.find(s=>s.id===id);
          return src&&<a key={src.id} href={src.url} target="_blank" rel="noopener noreferrer"><FileText size={16}/>{src.title}<ExternalLink size={14}/></a>;
        })}</div>
        <div className="dp-article-actions"><button className={'btn-check '+(done.includes(lessonKey)?'done':'')}
          onClick={()=>setDone(current=>current.includes(lessonKey)?current.filter(k=>k!==lessonKey):[...current,lessonKey])}>
          <Check size={16}/>{done.includes(lessonKey)?'Concluída — desfazer':'Marcar aula como concluída'}</button>
          <button className="btn-outline" disabled={lessonIndex===0} onClick={()=>setLessonIndex(i=>i-1)}><ChevronLeft size={16}/> Anterior</button>
          <button className="btn-primary" disabled={lessonIndex===unit.lessons.length-1} onClick={()=>setLessonIndex(i=>i+1)}>Próxima aula <ChevronRight size={16}/></button></div>
      </article>
    </div>}

    {section==='review'&&<div className="dp-quiz-intro">
      <div className="eyebrow muted">{unit.eyebrow} · REVISÃO LIVRE</div>
      <h2>Questões de revisão — {unit.title}</h2>
      <p>São quatro questões desta unidade. Você recebe o comentário após selecionar uma alternativa. As respostas podem ser alteradas para repetir o estudo.</p>
      <div className="dp-question-list">{review.map((q,i)=>renderQuestion(q,i,false))}</div>
      <div className="dp-review-results">{review.filter(q=>answers[q.id]!==undefined).length} de 4 respondidas · {review.filter(q=>answers[q.id]===q.answer).length} acertos atuais</div>
      <button className="btn-primary" onClick={()=>setSection('lessons')}>Voltar às aulas <ArrowRight size={16}/></button>
    </div>}

    {section==='simulations'&&<div className="dp-quiz-intro">
      <div className="eyebrow muted">SIMULADOS AUTORAIS · NÃO OFICIAIS</div>
      <h2>Treino geral de Design Profissional</h2>
      <p>Cada simulado contém 12 questões inéditas neste curso, distribuídas igualmente entre as quatro unidades. O gabarito só aparece após a entrega. Não representa nota, modelo oficial de prova ou previsão do que será cobrado.</p>
      <div className="dp-sim-picker">
        <button className={testKind==='A'?'active':''} onClick={()=>setTestKind('A')}>Simulado A</button>
        <button className={testKind==='B'?'active':''} onClick={()=>setTestKind('B')}>Simulado B</button>
      </div>
      <div className="dp-test-status">
        <span>{testAnswered}/12 questões respondidas</span>
        <span>{tested?'Entregue':'Rascunho salvo neste navegador'}</span>
      </div>
      {tested&&<div className="dp-test-final"><GraduationCap size={25}/><div><strong>Resultado do Simulado {testKind}: {testCorrect}/12 acertos</strong><p>Confira os comentários abaixo e revise os conceitos relacionados às suas respostas.</p></div></div>}
      <div className="dp-question-list">{testQuestions.map((q,i)=>renderQuestion(q,i,true))}</div>
      <div className="dp-test-actions">
        {!tested&&<button className="btn-primary" onClick={()=>setSubmitted(current=>({...current,[testKey]:true}))}
          disabled={testAnswered!==testQuestions.length}><ClipboardCheck size={17}/> Entregar e ver gabarito</button>}
        <button className="btn-outline" onClick={resetTest}><RotateCcw size={16}/> Refazer este simulado</button>
      </div>
      {!tested&&<p className="dp-muted">Responda às 12 questões para habilitar a entrega. Não há limite de tempo neste treino.</p>}
    </div>}

    {section==='sources'&&<div className="dp-quiz-intro">
      <div className="eyebrow muted">DOCUMENTOS DE ORIGEM</div>
      <h2>Referências e materiais consultados</h2>
      <p>O curso usa resumos e exemplos próprios; os PDFs continuam no Google Drive, com suas permissões de acesso. Consulte o material indicado para conferir contexto, gráficos e bibliografia. Preços, salários, legislação e projeções dos documentos podem exigir checagem atual.</p>
      <div className="dp-source-list">{designSources.map(source=><a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer">
        <FileText size={18}/><span>{source.title}</span><ExternalLink size={17}/></a>)}</div>
      <a className="dp-folder-link" href="https://drive.google.com/drive/folders/1QYVfowSWJQoiXn6f7P8CNCJHHbd3ku-Y" target="_blank" rel="noopener noreferrer">Abrir pasta completa de Design Profissional <ExternalLink size={17}/></a>
    </div>}
  </section>;
}
