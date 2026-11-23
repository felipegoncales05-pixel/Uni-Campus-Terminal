import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import {
  ArrowRight, BookMarked, BookOpen, BrainCircuit, CheckCircle2, ClipboardCheck,
  Copy, Database, Download, ExternalLink, GraduationCap, Link2, RotateCcw,
  Sparkles, type LucideIcon,
} from 'lucide-react';
import { unicidTutors } from '../data/unicidTutors';

const icons: Record<string, LucideIcon> = {
  mbd: Database,
  dfw: BookOpen,
  ed2: BrainCircuit,
  plp: BookMarked,
  dp: GraduationCap,
};
const STORAGE_NOTES = 'campus-unicid-notes-v1';
const STORAGE_DONE = 'campus-unicid-done-v1';

function restored<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    if (!value) return fallback;
    const parsed: unknown = JSON.parse(value);
    if (Array.isArray(fallback)) return (Array.isArray(parsed) ? parsed : fallback) as T;
    if (typeof fallback === 'object' && parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed as T;
  } catch { /* navegador sem armazenamento disponível */ }
  return fallback;
}
function numeric(value: string, maximum: number) {
  if (value.trim() === '') return null;
  const n = Number(value.replace(',', '.'));
  return Number.isFinite(n) && n >= 0 && n <= maximum ? n : NaN;
}
function gradeText(a1Text: string, a2Text: string, afText: string, frequencyText: string) {
  const a1 = numeric(a1Text, 5);
  const a2 = numeric(a2Text, 5);
  const af = numeric(afText, 5);
  const frequency = numeric(frequencyText, 100);
  if ([a1,a2,af,frequency].some(n => Number.isNaN(n))) return { title: 'Revise os números', details: 'As provas vão de 0 a 5 e a frequência vai de 0% a 100%.', state: 'warning' };
  if (frequency !== null && frequency < 75) return { title: 'Frequência insuficiente', details: 'A regra dessas disciplinas exige pelo menos 75% de presença, mesmo quando a soma das notas é suficiente.', state: 'warning' };
  if (a1 === null && a2 === null) return { title: 'Informe as notas', details: 'Digite A2 e A1 para avaliar a soma. Você também pode informar a frequência.', state: 'neutral' };
  if (a2 !== null && a1 === null) {
    const needed = 6 - a2;
    return { title: needed <= 5 ? 'Meta para a A1' : 'A1 sozinha não alcança a média', details: needed <= 5 ? 'Com A2 = ' + a2.toFixed(1) + ', você precisaria de A1 ≥ ' + needed.toFixed(1) + ' (máximo 5,0).' : 'Seriam necessários ' + needed.toFixed(1) + ' pontos na A1, acima do máximo. Confira as possibilidades de AF.', state: needed <= 5 ? 'neutral' : 'warning' };
  }
  if (a1 !== null && a2 === null) {
    const needed = 6 - a1;
    return { title: 'Meta para a A2', details: needed <= 5 ? 'Para somar 6,0, A2 precisa ser pelo menos ' + needed.toFixed(1) + '.' : 'Uma A2 de até 5,0 não alcança 6,0 com esta nota de A1.', state: needed <= 5 ? 'neutral' : 'warning' };
  }
  const largest = Math.max(a1!, a2!);
  const sum = a1! + a2!;
  if (sum >= 6) return { title: 'Soma suficiente', details: 'A1 + A2 = ' + sum.toFixed(1) + ' (mínimo 6,0).' + (frequency === null ? ' Confirme também a frequência de pelo menos 75%.' : ' Frequência informada compatível.'), state: 'success' };
  const requiredAf = 6 - largest;
  if (af === null) return { title: 'AF necessária', details: 'A1 + A2 = ' + sum.toFixed(1) + '. A AF substitui a menor nota. Para somar 6,0, seria necessária AF ≥ ' + requiredAf.toFixed(1) + (requiredAf <= 5 ? '.' : ', mas o máximo é 5,0.'), state: requiredAf <= 5 ? 'neutral' : 'warning' };
  const updated = largest + af;
  return { title: updated >= 6 ? 'Soma recuperada pela AF' : 'Soma ainda abaixo de 6,0', details: 'Após substituir a menor nota: ' + largest.toFixed(1) + ' + ' + af.toFixed(1) + ' = ' + updated.toFixed(1) + '.' + (frequency === null ? ' Confirme também a frequência mínima de 75%.' : ''), state: updated >= 6 ? 'success' : 'warning' };
}

export default function UnicidTutorsHub({ onOpenDesignCourse }: { onOpenDesignCourse: () => void }) {
  const [active, setActive] = useState('mbd');
  const [moduleIndex, setModuleIndex] = useState(0);
  const [stage, setStage] = useState(0);
  const [notes, setNotes] = useState<Record<string,string>>(() => restored(STORAGE_NOTES, {}));
  const [done, setDone] = useState<string[]>(() => restored(STORAGE_DONE, []));
  const [feedback, setFeedback] = useState('');
  const [a1, setA1] = useState('');
  const [a2, setA2] = useState('');
  const [af, setAf] = useState('');
  const [frequency, setFrequency] = useState('');
  const tutor = unicidTutors.find(t => t.id === active) ?? unicidTutors[0];
  const module = tutor.modules[moduleIndex] ?? tutor.modules[0];
  const noteKey = tutor.id + '/' + module.id;
  const completedCount = done.filter(k => k.startsWith(tutor.id + '/')).length;
  const grade = useMemo(() => gradeText(a1,a2,af,frequency), [a1,a2,af,frequency]);

  useEffect(() => { try { localStorage.setItem(STORAGE_NOTES, JSON.stringify(notes)); } catch { /* no storage */ } }, [notes]);
  useEffect(() => { try { localStorage.setItem(STORAGE_DONE, JSON.stringify(done)); } catch { /* no storage */ } }, [done]);

  function selectTutor(id: string) {
    setActive(id);
    setModuleIndex(0);
    setStage(0);
    setFeedback('');
  }
  function selectModule(index: number) {
    setModuleIndex(index);
    setStage(0);
    setFeedback('');
  }
  function toggleDone() {
    setDone(existing => existing.includes(noteKey) ? existing.filter(key => key !== noteKey) : [...existing,noteKey]);
  }
  async function copyStudyPrompt() {
    const prompt = 'Estou estudando ' + tutor.title + '. Tema: ' + module.title
      + '. Quero praticar sem receber a resposta pronta. Comece perguntando o que eu sei, dê pistas curtas e depois um desafio. '
      + 'Use primeiro o índice oficial: ' + tutor.official.index + '. Cite documento e seção quando conseguir consultar o material. '
      + 'Se não tiver acesso ao material, avise claramente. Minha dúvida inicial: ' + module.reflection;
    try {
      await navigator.clipboard.writeText(prompt);
      setFeedback('Pergunta de estudo copiada. Cole-a no tutor de IA de sua preferência.');
    } catch {
      setFeedback('Não foi possível copiar automaticamente. Você pode usar as perguntas mostradas no roteiro.');
    }
  }
  const TutorIcon = icons[tutor.id] ?? BookOpen;

  return <section className="unicid-hub">
    <div className="eyebrow muted">ACERVO ACADÊMICO COMPLEMENTAR</div>
    <div className="unicid-intro">
      <div><h1>Tutores de estudo UNICID</h1>
        <p>Roteiros de revisão, ementas e materiais oficiais organizados por disciplina. Explore os temas, registre suas ideias e consulte os tutores externos do professor Cid R. Andrade.</p></div>
      <a href="https://github.com/cidandrade/tutores-ia-unicid" target="_blank" rel="noopener noreferrer" className="btn-outline"><ExternalLink size={16}/> Repositório original</a>
    </div>
    <div className="unicid-disclosure"><Sparkles size={19}/><span>Este painel é um <strong>roteiro interativo local</strong>, não um chatbot de IA. Para conversar com os tutores originais, utilize os arquivos oficiais da disciplina. Nenhum trabalho avaliativo é resolvido automaticamente aqui.</span></div>

    <div className="unicid-cards" role="group" aria-label="Selecionar tutor">
      {unicidTutors.map(item => {
        const Icon = icons[item.id] ?? BookOpen;
        return <button type="button" className={'unicid-card ' + (item.id === tutor.id ? 'selected':'')} onClick={()=>selectTutor(item.id)} key={item.id} style={{'--unicid-accent':item.color} as CSSProperties} aria-pressed={item.id===tutor.id}>
          <span className="unicid-card-icon"><Icon size={23}/></span><strong>{item.title}</strong><small>{item.modules.length} módulos</small>
        </button>;
      })}
    </div>

    <section className="unicid-active" style={{'--unicid-accent':tutor.color} as CSSProperties}>
      <div className="unicid-title-row">
        <span className="unicid-title-icon"><TutorIcon size={29}/></span>
        <div><span className="eyebrow muted">TUTOR {tutor.id.toUpperCase()} · 2026.2</span><h2>{tutor.title}</h2><p>{tutor.description}</p></div>
        <div className="unicid-progress"><strong>{completedCount}/{tutor.modules.length}</strong><span>revisões concluídas</span></div>
      </div>

      <div className="unicid-links">
        <a href={tutor.official.syllabus} target="_blank" rel="noopener noreferrer"><BookOpen size={16}/> Ementa <ExternalLink size={13}/></a>
        <a href={tutor.official.index} target="_blank" rel="noopener noreferrer"><Link2 size={16}/> Índice de materiais <ExternalLink size={13}/></a>
        <a href={tutor.official.materials} target="_blank" rel="noopener noreferrer"><BookMarked size={16}/> Drive da disciplina <ExternalLink size={13}/></a>
        <a href={tutor.official.skill} target="_blank" rel="noopener noreferrer"><GraduationCap size={16}/> Tutor original <ExternalLink size={13}/></a>
        <a href={tutor.official.download} target="_blank" rel="noopener noreferrer"><Download size={16}/> Skill oficial (.zip)</a>
      </div>

      {tutor.id==='dp'&&<div className="dp-unicid-cta">
        <div><strong>Curso aprofundado de Design Profissional</strong><p>12 aulas, 16 questões de revisão e dois simulados autorais de 12 perguntas, com referências às apostilas do Drive.</p></div>
        <button className="btn-primary" onClick={onOpenDesignCourse}>Abrir curso <ArrowRight size={16}/></button>
      </div>}

      <div className="unicid-study-grid">
        <aside className="unicid-module-list" aria-label="Unidades desta disciplina">
          <div className="lesson-list-title">UNIDADES DE REVISÃO <span>{tutor.modules.length}</span></div>
          {tutor.modules.map((item,i)=> <button key={item.id} className={'unicid-module-button ' + (i===moduleIndex?'current':'')} onClick={()=>selectModule(i)}>
            {done.includes(tutor.id+'/'+item.id)?<CheckCircle2 size={17}/>:<span className="unicid-module-num">{String(i+1).padStart(2,'0')}</span>}<span>{item.title}</span>
          </button>)}
        </aside>
        <article className="unicid-study-panel">
          <span className="eyebrow muted">UNIDADE {moduleIndex+1} DE {tutor.modules.length}</span>
          <h3>{module.title}</h3>
          <p>{module.summary}</p>
          <div className="unicid-stages" aria-label="Etapas do estudo">
            {['Investigar','Orientar','Praticar'].map((label,i)=><button key={label} aria-pressed={stage===i} onClick={()=>setStage(i)} className={stage===i?'active':''}>{i+1}. {label}</button>)}
          </div>
          <div className="unicid-prompt">
            {stage===0&&<><span>1 · O que você já sabe?</span><strong>{module.reflection}</strong><p>Antes de consultar a resposta, escreva sua hipótese ou o que você já tentou.</p></>}
            {stage===1&&<><span>2 · Encontre uma pista</span><strong>Volte ao material da disciplina.</strong><p>Abra o índice oficial, localize uma apostila pelo tema da unidade e procure uma definição, diagrama ou exemplo. Registre o nome do documento e a seção consultada. Se não localizar a fonte, anote essa limitação.</p></>}
            {stage===2&&<><span>3 · Desafio de aplicação</span><strong>{module.practice}</strong><p>Use outro exemplo, diferente dos trabalhos avaliativos, e confira seu raciocínio com o material indicado no índice.</p></>}
          </div>
          <label className="unicid-note-label" htmlFor="unicid-notes">Minhas anotações nesta unidade</label>
          <textarea id="unicid-notes" className="unicid-notes" rows={4} placeholder="Registre sua ideia, uma dúvida ou o documento e a seção consultados..." value={notes[noteKey]??''} onChange={e=>setNotes(all=>({...all,[noteKey]:e.target.value}))}/>
          <div className="unicid-panel-actions">
            <button className="btn-outline" onClick={()=>setStage(s=>(s+1)%3)}><ArrowRight size={16}/> Próxima etapa</button>
            <button className="btn-outline" onClick={copyStudyPrompt}><Copy size={16}/> Copiar pergunta para IA</button>
            <button className={'btn-check '+(done.includes(noteKey)?'done':'')} onClick={toggleDone}><CheckCircle2 size={16}/>{done.includes(noteKey)?'Revisão feita':'Concluir revisão'}</button>
          </div>
          {feedback&&<p className="unicid-feedback" role="status">{feedback}</p>}
        </article>
      </div>
    </section>

    <section className="unicid-grade">
      <div className="unicid-grade-head"><div><span className="eyebrow muted">APOIO À ORGANIZAÇÃO</span><h2>Calculadora A1 + A2 + AF</h2><p>Simulação da regra descrita no repertório dessas disciplinas (até 5,0 por avaliação, soma mínima 6,0 e frequência mínima 75%).</p></div><ClipboardCheck size={31}/></div>
      <div className="unicid-grade-fields">
        <label>Nota A2 <input type="number" min="0" max="5" step="0.1" inputMode="decimal" value={a2} onChange={e=>setA2(e.target.value)} placeholder="0 a 5"/></label>
        <label>Nota A1 <input type="number" min="0" max="5" step="0.1" inputMode="decimal" value={a1} onChange={e=>setA1(e.target.value)} placeholder="0 a 5"/></label>
        <label>AF, se realizada <input type="number" min="0" max="5" step="0.1" inputMode="decimal" value={af} onChange={e=>setAf(e.target.value)} placeholder="0 a 5"/></label>
        <label>Frequência (%) <input type="number" min="0" max="100" step="0.1" inputMode="decimal" value={frequency} onChange={e=>setFrequency(e.target.value)} placeholder="0 a 100"/></label>
      </div>
      <div className={'unicid-grade-result '+grade.state} aria-live="polite"><strong>{grade.title}</strong><span>{grade.details}</span></div>
      <div className="unicid-grade-bottom"><p>O cálculo não consulta notas pessoais nem substitui as regras e resultados do sistema acadêmico. Confirme as regras aplicáveis à sua turma com a instituição.</p><button onClick={()=>{setA1('');setA2('');setAf('');setFrequency('');}} className="btn-outline"><RotateCcw size={15}/> Limpar</button></div>
    </section>

    <p className="unicid-credits">Referência acadêmica: <a href="https://github.com/cidandrade/tutores-ia-unicid" target="_blank" rel="noopener noreferrer">Tutores IA UNICID, Prof. Cid R. Andrade</a>. Conteúdo de origem sob <a href="https://github.com/cidandrade/tutores-ia-unicid/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 4.0</a>. Este é um complemento independente, sem vínculo oficial ou endosso do professor ou da instituição. As descrições e atividades exibidas aqui foram elaboradas para o Campus Terminal; materiais originais continuam no repositório e no Drive de origem.</p>
  </section>;
}
