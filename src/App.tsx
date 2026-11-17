import { useEffect, useState, type CSSProperties } from 'react';
import {
  ArrowRight, BookOpen, BookMarked, BrainCircuit, Braces, ChartColumnIncreasing,
  CheckCircle2, ChevronLeft, ChevronRight, Circle, ClipboardList, Code2, Database,
  ExternalLink, FileCode2, GitBranch, Globe2, GraduationCap, LayoutDashboard,
  Library, Menu, Palette, Search, Sparkles, TerminalSquare, Trophy, X, Blocks, Bot,
  Check, Play, type LucideIcon,
} from 'lucide-react';
import { tracks } from './data/tracks';
import { questions } from './data/questions';
import CodeLab from './components/CodeLab';
import type { Track } from './types';

type View = 'dashboard' | 'library' | 'quiz' | 'lab' | string;
type Tab = 'learn' | 'examples' | 'practice' | 'questions' | 'references';

const icons: Record<string, LucideIcon> = {
  'brain-circuit': BrainCircuit, 'terminal-square': TerminalSquare,
  'code-2': Code2, database: Database, 'globe-2': Globe2, palette: Palette,
  braces: Braces, 'git-branch': GitBranch, 'file-code-2': FileCode2,
  blocks: Blocks, 'chart-column-increasing': ChartColumnIncreasing, bot: Bot,
};
const tabLabels: { id: Tab; label: string }[] = [
  { id: 'learn', label: 'Aprender' }, { id: 'examples', label: 'Exemplos' },
  { id: 'practice', label: 'Praticar' }, { id: 'questions', label: 'Questões' },
  { id: 'references', label: 'Materiais' },
];

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const result: unknown = JSON.parse(raw);
    if (Array.isArray(fallback)) return (Array.isArray(result) ? result : fallback) as T;
    if (typeof fallback === 'object' && fallback !== null) {
      return (result && typeof result === 'object' && !Array.isArray(result) ? result : fallback) as T;
    }
    return result as T;
  } catch {
    return fallback;
  }
}

function TrackIcon({ track, size = 22 }: { track: Track; size?: number }) {
  const Icon = icons[track.icon] || BookOpen;
  return <Icon size={size} strokeWidth={1.8} />;
}

function App() {
  const [view, setView] = useState<View>('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<Tab>('learn');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [quizFilter, setQuizFilter] = useState('all');
  const [quizIndex, setQuizIndex] = useState(0);
  const [completed, setCompleted] = useState<string[]>(() => readStorage('campus-lessons-v1', []));
  const [answers, setAnswers] = useState<Record<string, number>>(() => readStorage('campus-answers-v1', {}));
  const [sourceFilter, setSourceFilter] = useState('');

  useEffect(() => { try { localStorage.setItem('campus-lessons-v1', JSON.stringify(completed)); } catch { /* storage blocked */ } }, [completed]);
  useEffect(() => { try { localStorage.setItem('campus-answers-v1', JSON.stringify(answers)); } catch { /* storage blocked */ } }, [answers]);

  function navigate(destination: View) {
    setView(destination);
    setMenuOpen(false);
    setTab('learn');
    setLessonIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startQuiz(filter: string) {
    setQuizFilter(filter);
    setQuizIndex(0);
    navigate('quiz');
  }

  const totalLessons = tracks.reduce((sum, item) => sum + item.lessons.length, 0);
  const completedCount = tracks.reduce((sum, item) => sum + item.lessons.filter((_, i) => completed.includes(item.id + ':' + i)).length, 0);
  const attemptedCount = questions.filter(item => Object.prototype.hasOwnProperty.call(answers, item.id)).length;
  const correctCount = questions.filter(item => answers[item.id] === item.answer).length;
  const progress = Math.round((completedCount / totalLessons) * 100);
  const activeTrack = tracks.find(item => item.id === view);
  const filteredTracks = tracks.filter(item => (item.title + ' ' + item.description).toLowerCase().includes(query.toLowerCase()));
  const quizQuestions = quizFilter === 'all' ? questions : questions.filter(item => item.trackId === quizFilter);
  const currentQuestion = quizQuestions[Math.min(quizIndex, quizQuestions.length - 1)];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const allSources = tracks.flatMap(track => track.sources
    .filter(source => source.url.startsWith('https://'))
    .map(source => ({ ...source, trackName: track.title })));
  const shownSources = allSources.filter(source => (source.title + source.trackName).toLowerCase().includes(sourceFilter.toLowerCase()));

  function toggleLesson(id: string) {
    setCompleted(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  }
  function answerQuestion(id: string, selected: number) {
    // Primeira resposta conta para o desempenho. Reinicie o simulado para refazer.
    setAnswers(prev => Object.prototype.hasOwnProperty.call(prev, id) ? prev : { ...prev, [id]: selected });
  }
  function resetQuestions() {
    const ids = new Set(quizQuestions.map(item => item.id));
    setAnswers(prev => Object.fromEntries(Object.entries(prev).filter(([id]) => !ids.has(id))));
    setQuizIndex(0);
  }

  function subjectCard(track: Track) {
    const count = track.lessons.filter((_, i) => completed.includes(track.id + ':' + i)).length;
    const Icon = icons[track.icon] || BookOpen;
    return <button key={track.id} className="subject-card" style={{ '--accent': track.color } as CSSProperties} onClick={() => navigate(track.id)}>
      <div className="subject-card-top"><span className="subject-symbol"><Icon size={24} /></span><span className="small-muted">{count}/{track.lessons.length} aulas</span></div>
      <strong>{track.title}</strong><p>{track.description}</p>
      <div className="subject-card-bottom"><div className="tiny-progress"><span style={{ width: (count / track.lessons.length * 100) + '%' }} /></div><ArrowRight size={17} /></div>
    </button>;
  }

  const pageTitle = activeTrack?.title ?? ({ dashboard: 'Visão geral', quiz: 'Central de questões', lab: 'Laboratório C++', library: 'Biblioteca acadêmica' }[view] || 'Campus Terminal');

  return <div className="app-shell">
    {menuOpen && <button className="mobile-scrim" aria-label="Fechar menu" onClick={() => setMenuOpen(false)} />}
    <aside className={'sidebar ' + (menuOpen ? 'open' : '')}>
      <button className="brand" onClick={() => navigate('dashboard')} aria-label="Ir ao painel inicial">
        <span className="brand-icon"><GraduationCap size={25} /></span>
        <span><strong>UNI<span className="brand-purple">CAMPUS</span></strong><small>TERMINAL ACADÊMICO</small></span>
      </button>
      <div className="sidebar-scroll">
        <div className="sidebar-section-label">CENTRAL</div>
        <button className={'nav-row ' + (view === 'dashboard' ? 'active' : '')} onClick={() => navigate('dashboard')}><LayoutDashboard size={18} /> Visão geral</button>
        <button className={'nav-row ' + (view === 'quiz' ? 'active' : '')} onClick={() => startQuiz('all')}><ClipboardList size={18} /> Simulado geral <span className="nav-tag">60</span></button>
        <button className={'nav-row ' + (view === 'lab' ? 'active' : '')} onClick={() => navigate('lab')}><Code2 size={18} /> Laboratório C++</button>
        <button className={'nav-row ' + (view === 'library' ? 'active' : '')} onClick={() => navigate('library')}><Library size={18} /> Biblioteca</button>
        <div className="sidebar-section-label subjects-label">MATÉRIAS <span>{tracks.length}</span></div>
        <label className="sidebar-search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar matéria..." aria-label="Buscar matéria" /></label>
        <div className="sidebar-subjects">
          {filteredTracks.map(track => {
            const Icon = icons[track.icon] || BookOpen;
            return <button key={track.id} className={'side-subject ' + (view === track.id ? 'active' : '')} style={{ '--accent': track.color } as CSSProperties} onClick={() => navigate(track.id)}>
              <span className="mini-symbol"><Icon size={17} /></span><span>{track.title}</span>
            </button>;
          })}
          {filteredTracks.length === 0 && <span className="empty-hint">Nenhuma matéria encontrada.</span>}
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-progress-title"><span>Seu avanço</span><strong>{progress}%</strong></div>
        <div className="bar-track"><span style={{ width: progress + '%' }} /></div>
        <small>{completedCount} de {totalLessons} aulas concluídas</small>
      </div>
    </aside>

    <div className="main-area">
      <header className="topbar">
        <button className="icon-button mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
        <div className="breadcrumb"><span>CAMPUS</span><ChevronRight size={15} /><strong>{pageTitle}</strong></div>
        <div className="topbar-right"><span className="online-indicator" /><span>AMBIENTE DE ESTUDOS</span><button className="top-action" onClick={() => navigate('dashboard')} aria-label="Ir ao painel"><GraduationCap size={20} /></button></div>
      </header>

      <main className="content-area">
        {view === 'dashboard' && <>
          <section className="hero">
            <div className="hero-grain" />
            <div className="hero-copy"><div className="eyebrow"><Sparkles size={14} /> SUA CENTRAL UNIVERSITÁRIA</div>
              <h1>Aprender é <span>construir.</span><br />Um passo de cada vez.</h1>
              <p>Organize seus estudos, resolva desafios e pratique programação em um só lugar. O conhecimento começa aqui.</p>
              <div className="hero-actions"><button className="btn-primary" onClick={() => navigate(tracks[0].id)}>Começar a estudar <ArrowRight size={17} /></button><button className="btn-outline" onClick={() => startQuiz('all')}>Resolver questões</button></div>
            </div>
            <div className="hero-art" aria-hidden="true"><div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/><div className="art-center"><GraduationCap size={82} strokeWidth={1} /></div><div className="art-spark art-spark-one">01</div><div className="art-spark art-spark-two">101</div></div>
          </section>
          <section className="stats-grid" aria-label="Resumo dos estudos">
            <div className="stat-card"><span className="stat-icon purple"><BookMarked size={20} /></span><span className="stat-number">{tracks.length}</span><span className="stat-label">Trilhas de estudo</span></div>
            <div className="stat-card"><span className="stat-icon blue"><BookOpen size={20} /></span><span className="stat-number">{completedCount}<span className="stat-outof"> / {totalLessons}</span></span><span className="stat-label">Aulas concluídas</span></div>
            <div className="stat-card"><span className="stat-icon orange"><ClipboardList size={20} /></span><span className="stat-number">{attemptedCount}<span className="stat-outof"> / 60</span></span><span className="stat-label">Questões respondidas</span></div>
            <div className="stat-card"><span className="stat-icon green"><Trophy size={20} /></span><span className="stat-number">{correctCount}</span><span className="stat-label">Respostas corretas</span></div>
          </section>
          <div className="section-heading"><div><div className="eyebrow muted">EXPLORE SEU CONHECIMENTO</div><h2>Suas matérias</h2><p>Escolha uma área para continuar sua jornada.</p></div><span className="count-pill">{tracks.length} trilhas</span></div>
          <div className="subjects-grid">{tracks.map(subjectCard)}</div>
          <section className="action-banner"><span className="action-banner-icon"><Code2 size={33} /></span><div><h3>Pronto para colocar a mão no código?</h3><p>Escreva, analise e salve seus programas C++ no laboratório.</p></div><button className="btn-primary" onClick={() => navigate('lab')}>Abrir laboratório <ArrowRight size={16} /></button></section>
        </>}

        {activeTrack && (() => {
          const track = activeTrack;
          const key = track.id + ':' + lessonIndex;
          const lesson = track.lessons[lessonIndex];
          const done = track.lessons.filter((_, i) => completed.includes(track.id + ':' + i)).length;
          return <>
            <button className="back-link" onClick={() => navigate('dashboard')}><ChevronLeft size={16}/> Todas as matérias</button>
            <section className="track-hero" style={{ '--accent': track.color } as CSSProperties}>
              <span className="track-symbol"><TrackIcon track={track} size={36} /></span>
              <div className="track-info"><span className="eyebrow muted">{track.category.toUpperCase()} {track.optional ? '· TRILHA FACULTATIVA' : ''} {track.original ? '· CONTEÚDO COMPLEMENTAR' : ''}</span><h1>{track.title}</h1><p>{track.description}</p></div>
              <div className="track-score"><strong>{done}/{track.lessons.length}</strong><small>AULAS CONCLUÍDAS</small></div>
            </section>
            <div className="tab-bar" role="tablist" aria-label="Seções da matéria">{tabLabels.map(item => <button key={item.id} role="tab" aria-selected={tab===item.id} className={tab===item.id?'tab active':'tab'} onClick={() => setTab(item.id)}>{item.label}</button>)}</div>
            {tab === 'learn' && <div className="lesson-layout">
              <aside className="lesson-list"><div className="lesson-list-title">CONTEÚDOS <span>{track.lessons.length}</span></div>
                {track.lessons.map((item,i) => <button key={item.title} className={'lesson-link ' + (lessonIndex===i?'active':'')} onClick={()=>setLessonIndex(i)}>
                  {completed.includes(track.id+':'+i)?<CheckCircle2 size={17} className="checked"/>:<span className="lesson-number">{String(i+1).padStart(2,'0')}</span>}
                  <span>{item.title}</span></button>)}
              </aside>
              <article className="lesson-article"><div className="lesson-meta"><span>AULA {String(lessonIndex+1).padStart(2,'0')}</span><span>·</span><span>{track.title}</span></div>
                <h2>{lesson.title}</h2><p className="lesson-text">{lesson.text}</p>
                <div className="example-panel"><div className="example-heading"><Code2 size={16}/> EXEMPLO DE APLICAÇÃO</div><p>{lesson.example}</p></div>
                <div className="lesson-tip"><Sparkles size={20}/><div><strong>Hora de praticar</strong><p>Reescreva o exemplo com suas próprias palavras, altere uma condição ou valor e explique o resultado esperado.</p></div></div>
                <div className="lesson-actions"><button className={'btn-check ' + (completed.includes(key)?'done':'')} onClick={()=>toggleLesson(key)}>{completed.includes(key)?<Check size={18}/>:<Circle size={18}/>} {completed.includes(key)?'Aula concluída':'Marcar como concluída'}</button>
                  <button className="btn-outline" onClick={()=>setLessonIndex(i=>Math.min(i+1,track.lessons.length-1))} disabled={lessonIndex>=track.lessons.length-1}>Próxima aula <ArrowRight size={16}/></button></div>
              </article>
            </div>}
            {tab==='examples' && <section className="module-panel"><div className="section-heading compact"><div><h2>Exemplos explicados</h2><p>Uma aplicação prática para cada conteúdo estudado.</p></div></div><div className="examples-grid">{track.lessons.map((item,i)=><div className="example-card" key={item.title}><span className="eyebrow muted">EXEMPLO {String(i+1).padStart(2,'0')}</span><h3>{item.title}</h3><pre>{item.example}</pre></div>)}</div></section>}
            {tab==='practice' && <section className="module-panel"><h2>Pratique o que aprendeu</h2><p className="panel-intro">Escolha um conceito, altere o exemplo e compare o comportamento. A prática ajuda a identificar dúvidas antes da avaliação.</p><div className="practice-card"><span className="practice-icon"><Play size={26}/></span><div><h3>{track.id==='cpp'?'Laboratório C++':'Desafio de revisão'}</h3><p>{track.id==='cpp'?'Abra o editor, analise os avisos e execute o código quando o serviço de compilação estiver configurado.':'Selecione um exemplo da aba anterior, mude uma entrada e explique o resultado. Em seguida, teste seu entendimento nas questões.'}</p></div><button className="btn-primary" onClick={()=>track.id==='cpp'?navigate('lab'):startQuiz(track.id)}>{track.id==='cpp'?'Abrir editor':'Fazer exercícios'} <ArrowRight size={16}/></button></div></section>}
            {tab==='questions' && <section className="module-panel"><h2>Questões de {track.title}</h2><p className="panel-intro">Cinco perguntas de múltipla escolha, com correção e explicação após responder.</p><div className="practice-card"><span className="practice-icon"><ClipboardList size={26}/></span><div><h3>Simulado da matéria</h3><p>Acompanhe acertos, revise os conteúdos e refaça o simulado quando desejar.</p></div><button className="btn-primary" onClick={()=>startQuiz(track.id)}>Iniciar 5 questões <ArrowRight size={16}/></button></div></section>}
            {tab==='references' && <section className="module-panel"><h2>Materiais e referências</h2><p className="panel-intro">Links para os materiais originais do Drive, sem cópias integrais publicadas neste repositório. As explicações do site são textos próprios, organizados a partir das referências.</p>{track.sources.map(source=>source.url.startsWith('https://')?<a className="resource-row" href={source.url} target="_blank" rel="noopener noreferrer" key={source.title}><BookOpen size={20}/><span>{source.title}</span><ExternalLink size={17}/></a>:<div className="resource-row static-resource" key={source.title}><BookOpen size={20}/><span>{source.title} (conteúdo desenvolvido para este site)</span></div>)}</section>}
          </>;
        })()}

        {view==='quiz' && <section className="quiz-screen">
          <div className="eyebrow muted">AVALIAÇÃO INTERATIVA</div><h1>Central de questões</h1><p className="panel-intro">60 questões divididas em 12 matérias. Responda e receba uma explicação para cada alternativa correta.</p>
          <div className="quiz-toolbar"><label>Matéria <select value={quizFilter} onChange={e=>{setQuizFilter(e.target.value);setQuizIndex(0)}}><option value="all">Todas as matérias (60)</option>{tracks.map(t=><option key={t.id} value={t.id}>{t.title} (5)</option>)}</select></label><span>Acertos: {quizQuestions.filter(q=>answers[q.id]===q.answer).length} / {quizQuestions.filter(q=>answers[q.id]!==undefined).length} respondidas</span><button className="btn-text" onClick={resetQuestions}>Reiniciar este simulado</button></div>
          {currentQuestion && <div className="quiz-layout"><div className="question-box"><div className="question-top"><span>QUESTÃO {quizIndex+1} DE {quizQuestions.length}</span><span>{tracks.find(t=>t.id===currentQuestion.trackId)?.title}</span></div><div className="quiz-progress"><span style={{width:((quizIndex+1)/quizQuestions.length*100)+'%'}}/></div><h2>{currentQuestion.prompt}</h2>
            <div className="answers-list">{currentQuestion.options.map((option,i)=>{const answered=currentAnswer!==undefined;return <button key={i} disabled={answered} className={'answer-option '+(answered&&i===currentQuestion.answer?'correct':'')+(answered&&i===currentAnswer&&i!==currentQuestion.answer?' incorrect':'')} onClick={()=>answerQuestion(currentQuestion.id,i)}><span className="option-letter">{String.fromCharCode(65+i)}</span><span>{option}</span>{answered&&i===currentQuestion.answer&&<CheckCircle2 size={20}/>}</button>})}</div>
            {currentAnswer!==undefined&&<div className={'feedback '+(currentAnswer===currentQuestion.answer?'success':'mistake')}><strong>{currentAnswer===currentQuestion.answer?'Resposta correta!':'Vamos revisar essa questão.'}</strong><p>{currentQuestion.explanation}</p></div>}
            <div className="question-controls"><button className="btn-outline" disabled={quizIndex===0} onClick={()=>setQuizIndex(i=>Math.max(i-1,0))}><ChevronLeft size={17}/> Anterior</button><button className="btn-primary" disabled={quizIndex===quizQuestions.length-1} onClick={()=>setQuizIndex(i=>Math.min(i+1,quizQuestions.length-1))}>Próxima <ChevronRight size={17}/></button></div>
          </div><aside className="question-sidebar"><div className="lesson-list-title">NAVEGAÇÃO <span>{quizQuestions.length}</span></div><div className="question-number-grid">{quizQuestions.map((q,i)=><button key={q.id} title={'Questão '+(i+1)} onClick={()=>setQuizIndex(i)} className={'q-num '+(i===quizIndex?'active':'')+(answers[q.id]!==undefined?(answers[q.id]===q.answer?' correct-mark':' wrong-mark'):'')}>{i+1}</button>)}</div><div className="q-legend"><span><i className="dot neutral"/> Pendente</span><span><i className="dot green"/> Correta</span><span><i className="dot red"/> Incorreta</span></div></aside></div>}
        </section>}

        {view==='library' && <section className="library-screen"><div className="eyebrow muted">FONTES E REFERÊNCIAS</div><h1>Biblioteca acadêmica</h1><p className="panel-intro">Materiais organizados por assunto. Os links apontam para o Google Drive; o acesso depende das permissões originais de cada arquivo. Não alteramos nem publicamos cópias de livros privados.</p><label className="library-search"><Search size={20}/><input placeholder="Buscar por título ou matéria..." value={sourceFilter} onChange={e=>setSourceFilter(e.target.value)}/></label>
          <div className="library-list">{shownSources.map((source,i)=><a className="library-item" href={source.url} target="_blank" rel="noopener noreferrer" key={source.url+'-'+i}><span className="library-icon"><BookOpen size={22}/></span><span><strong>{source.title}</strong><small>{source.trackName}</small></span><ExternalLink size={18}/></a>)}{shownSources.length===0&&<p>Nenhum material encontrado para esse termo.</p>}</div>
          <div className="library-footer-note"><Library size={22}/><p>O acervo maior do Drive contém outras disciplinas e obras. Esta primeira versão prioriza as fontes das 12 trilhas; futuras atualizações podem acrescentar novos módulos.</p></div>
        </section>}

        {view==='lab' && <CodeLab />}
      </main>
      <footer className="footer"><span>© Campus Terminal · ambiente de estudos</span><span>Aprender • Praticar • Evoluir</span></footer>
    </div>
    <button aria-label="Fechar menu" className={'mobile-close ' + (menuOpen?'visible':'')} onClick={()=>setMenuOpen(false)}><X size={22}/></button>
  </div>;
}

export default App;
