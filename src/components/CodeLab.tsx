import { useEffect, useMemo, useRef, useState } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { AlertTriangle, CheckCircle2, Code2, Download, FileJson2, Play, RotateCcw, SearchCode, ShieldCheck, Terminal, Wrench } from 'lucide-react';

type Issue = { line: number; severity: 'warning' | 'error'; message: string };
type ExecuteResponse = {
  stdout?: string | null;
  stderr?: string | null;
  compile_output?: string | null;
  message?: string | null;
  status?: { id?: number; description?: string } | string;
  time?: string | number | null;
  memory?: number | null;
};

const SAMPLES = [
  {
    "label": "Olá, mundo!",
    "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Olá, Campus Terminal!\\n\";\n    return 0;\n}\n"
  },
  {
    "label": "Menu acadêmico",
    "code": "#include <iostream>\n\nint main() {\n    int opcao = 0;\n    std::cout << \"=== MENU DE ESTUDO ===\\n\";\n    std::cout << \"1 - Estudar\\n2 - Revisar\\n3 - Sair\\n\";\n    std::cout << \"Escolha: \";\n    std::cin >> opcao;\n\n    switch (opcao) {\n        case 1: std::cout << \"Bons estudos!\\n\"; break;\n        case 2: std::cout << \"Hora da revisão!\\n\"; break;\n        case 3: std::cout << \"Até logo!\\n\"; break;\n        default: std::cout << \"Opção inválida\\n\";\n    }\n    return 0;\n}\n"
  },
  {
    "label": "Calculadora",
    "code": "#include <iostream>\n\nint main() {\n    double a, b;\n    char operacao;\n    std::cout << \"Digite: numero operador numero\\n\";\n    std::cin >> a >> operacao >> b;\n\n    switch (operacao) {\n        case '+': std::cout << a + b; break;\n        case '-': std::cout << a - b; break;\n        case '*': std::cout << a * b; break;\n        case '/':\n            if (b != 0) std::cout << a / b;\n            else std::cout << \"Divisão por zero!\";\n            break;\n        default: std::cout << \"Operador desconhecido\";\n    }\n    return 0;\n}\n"
  },
  {
    "label": "Média de notas",
    "code": "#include <iostream>\n#include <iomanip>\n\nint main() {\n    double a1 = 0, a2 = 0;\n    std::cout << \"Informe A1 e A2: \";\n    std::cin >> a1 >> a2;\n    double media = (a1 + a2) / 2.0;\n    std::cout << std::fixed << std::setprecision(1);\n    std::cout << \"Média: \" << media << \"\\n\";\n    std::cout << (media >= 6.0 ? \"Aprovado\" : \"Em recuperação\") << \"\\n\";\n    return 0;\n}\n"
  }
];
const STORAGE_KEY = 'campus-cpp-code-v1';
const apiUrl = (import.meta.env.VITE_COMPILER_API_URL || '').replace(/\/+$/, '');

function initialCode() {
  try { return localStorage.getItem(STORAGE_KEY) || SAMPLES[0].code; }
  catch { return SAMPLES[0].code; }
}

function inspect(source: string): Issue[] {
  const lines = source.split('\n');
  const issues: Issue[] = [];
  if (!/\bint\s+main\s*\(/.test(source)) {
    issues.push({ line: 1, severity: 'warning', message: 'Não encontrei int main(...). Programas executáveis comuns precisam de um ponto de entrada.' });
  }
  const opening = (source.match(/\{/g) || []).length;
  const closing = (source.match(/\}/g) || []).length;
  if (opening !== closing) {
    issues.push({ line: lines.length, severity: 'warning', message: 'Quantidade diferente de chaves de abertura e fechamento. Confira os blocos.' });
  }
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (/^(std::)?cout\s*<</.test(trimmed) && !/[;{}]$/.test(trimmed) && !trimmed.endsWith('<<')) {
      issues.push({ line: index + 1, severity: 'warning', message: 'A instrução de saída parece não terminar com ponto e vírgula (;).' });
    }
    if (/^(?:int|double|float|bool|char)\s+[a-zA-Z_]\w*\s*=.+[^;{}]$/.test(trimmed) && !trimmed.startsWith('//')) {
      issues.push({ line: index + 1, severity: 'warning', message: 'Confira o ponto e vírgula ao final da declaração.' });
    }
    if (/\bcout\b/.test(trimmed) && !/\bstd::cout\b/.test(trimmed) && !/\busing\s+namespace\s+std\b/.test(source)) {
      issues.push({ line: index + 1, severity: 'warning', message: 'cout normalmente precisa de std::cout (ou de um using apropriado).' });
    }
  });
  return issues.slice(0, 25);
}

function compilerDiagnostics(output: string): Issue[] {
  const entries: Issue[] = [];
  for (const line of output.split('\n')) {
    const match = line.match(/(?:^|[\\/])[^:\n]*?\.cpp:(\d+):(?:(\d+):)?\s*(warning|error):\s*(.+)/i);
    if (match) entries.push({
      line: Number(match[1]),
      severity: match[3].toLowerCase() === 'error' ? 'error' : 'warning',
      message: match[4].trim() + ' (diagnóstico do compilador)',
    });
  }
  return entries.slice(0, 30);
}

function download(filename: string, contents: string, mime: string) {
  const blob = new Blob([contents], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function CodeLab() {
  const [code, setCode] = useState(initialCode);
  const [stdin, setStdin] = useState('');
  const [example, setExample] = useState(-1);
  const [output, setOutput] = useState('A saída do programa aparecerá aqui após a execução real.\n\nPara usar o compilador, configure VITE_COMPILER_API_URL e publique o Worker de execução.');
  const [outputType, setOutputType] = useState<'normal' | 'error'>('normal');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('Editor pronto');
  const [analysisVisible, setAnalysisVisible] = useState(false);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [touchEditor, setTouchEditor] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches
  );
  const monacoRef = useRef<Parameters<OnMount>[1] | null>(null);
  const issues = useMemo(() => inspect(code), [code]);
  const [compilerIssues, setCompilerIssues] = useState<Issue[]>([]);
  const allIssues = useMemo(() => [...compilerIssues, ...issues], [compilerIssues, issues]);

  useEffect(() => { try { localStorage.setItem(STORAGE_KEY, code); } catch { /* storage unavailable */ } }, [code]);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)');
    const sync = () => setTouchEditor(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  useEffect(() => {
    const editor = editorRef.current;
    const monaco = monacoRef.current;
    const model = editor?.getModel();
    if (!monaco || !model) return;
    monaco.editor.setModelMarkers(model, 'campus-hints', allIssues.map(item => ({
      startLineNumber: item.line,
      endLineNumber: item.line,
      startColumn: 1,
      endColumn: Math.max(2, model.getLineMaxColumn(Math.min(item.line, model.getLineCount()))),
      message: item.message + ' (verificação local, não compilador)',
      severity: item.severity === 'error' ? monaco.MarkerSeverity.Error : monaco.MarkerSeverity.Warning,
    })));
  }, [allIssues]);

  const onMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    const model = editor.getModel();
    if (model) monaco.editor.setModelMarkers(model, 'campus-hints', allIssues.map(item => ({
      startLineNumber: item.line, endLineNumber: item.line, startColumn: 1,
      endColumn: Math.max(2, model.getLineMaxColumn(Math.min(item.line, model.getLineCount()))),
      message: item.message, severity: monaco.MarkerSeverity.Warning,
    })));
  };

  function loadSample(index: number) {
    if (index < 0 || !SAMPLES[index]) return;
    setExample(index);
    setCompilerIssues([]);
    setCode(SAMPLES[index].code);
    setOutput('Exemplo carregado. Execute para obter a saída real ou use a análise local para receber dicas.');
    setOutputType('normal');
  }

  function analyze() {
    setAnalysisVisible(true);
    setStatus(allIssues.length ? allIssues.length + ' apontamento(s)' : 'Nenhum padrão conhecido sinalizado');
  }

  function applySimpleFixes() {
    let changes = 0;
    const lines = code.split('\n').map((line, index) => {
      const warnings = issues.filter(item => item.line === index + 1);
      let next = line;
      if (warnings.some(item => item.message.includes('ponto e vírgula')) &&
          !next.trim().includes('//') && !next.trim().endsWith(';')) {
        next += ';';
        changes++;
      }
      if (warnings.some(item => item.message.includes('std::cout')) &&
          /\bcout\b/.test(next) && !/\bstd::cout\b/.test(next)) {
        next = next.replace(/\bcout\b/, 'std::cout');
        changes++;
      }
      return next;
    });
    if (changes) {
      setCode(lines.join('\n'));
      setCompilerIssues([]);
      setAnalysisVisible(true);
      setStatus(changes + ' correção(ões) simples aplicada(s). Revise e compile.');
    } else {
      setStatus('Nenhuma correção simples segura disponível');
    }
  }

  async function run() {
    setOutputType('normal');
    setCompilerIssues([]);
    if (!apiUrl) {
      setOutput('O editor funciona, mas a compilação remota ainda não está configurada.\n\nDefina VITE_COMPILER_API_URL na compilação do site e hospede o Worker/serviço Judge0. Não simulamos a execução de código.');
      setStatus('Compilador não configurado');
      return;
    }
    setBusy(true);
    setStatus('Enviando código ao compilador isolado...');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(apiUrl + '/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: 'cpp', source: code, stdin }),
        signal: controller.signal,
      });
      const result: ExecuteResponse = await response.json();
      if (!response.ok) throw new Error(result.message || 'Erro HTTP ' + response.status);
      const blocks = [
        result.compile_output ? 'ERROS DE COMPILAÇÃO:\n' + result.compile_output : '',
        result.stdout ? 'SAÍDA:\n' + result.stdout : '',
        result.stderr ? 'ERROS DA EXECUÇÃO:\n' + result.stderr : '',
      ].filter(Boolean);
      const description = typeof result.status === 'string' ? result.status : (result.status?.description || 'Concluído');
      setOutput(blocks.join('\n\n') || 'O programa terminou sem produzir saída textual.\nEstado: ' + description);
      setOutputType(result.compile_output || result.stderr ? 'error' : 'normal');
      setCompilerIssues(compilerDiagnostics(result.compile_output || ''));
      setAnalysisVisible(true);
      setStatus(description);
    } catch (error) {
      setOutput('Não foi possível executar o programa.\n' + (error instanceof Error ? error.message : String(error)) + '\n\nConfira o endereço, os limites e a disponibilidade do executor.');
      setOutputType('error');
      setStatus('Falha de execução');
    } finally {
      clearTimeout(timeout);
      setBusy(false);
    }
  }

  function exportFile(format: 'cpp' | 'json') {
    if (format === 'cpp') download('main.cpp', code, 'text/plain;charset=utf-8');
    else download('campus-cpp-projeto.json', JSON.stringify({
      project: 'Campus Terminal', language: 'cpp', filename: 'main.cpp', source: code, stdin,
      exportedAt: new Date().toISOString(),
    }, null, 2) + '\n', 'application/json');
  }

  function importProject(file?: File) {
    if (!file) return;
    file.text().then(text => {
      try {
        const parsed: unknown = JSON.parse(text);
        if (!parsed || typeof parsed !== 'object') throw new Error('Arquivo inválido');
        const project = parsed as { source?: unknown; stdin?: unknown };
        if (typeof project.source !== 'string' || project.source.length > 20000) throw new Error('Campo source inválido');
        setCode(project.source);
        setStdin(typeof project.stdin === 'string' ? project.stdin.slice(0, 4000) : '');
        setStatus('Projeto importado');
      } catch {
        setStatus('Não foi possível importar esse JSON');
      }
    }).catch(() => setStatus('Falha ao ler arquivo'));
  }

  function navigateIssue(line: number) {
    if (touchEditor && textAreaRef.current) {
      const rows = code.split('\n');
      const offset = rows.slice(0, Math.max(0, line - 1)).reduce((sum, row) => sum + row.length + 1, 0);
      textAreaRef.current.focus();
      textAreaRef.current.setSelectionRange(offset, offset);
      return;
    }
    editorRef.current?.revealLineInCenter(line);
    editorRef.current?.setPosition({ lineNumber: line, column: 1 });
    editorRef.current?.focus();
  }

  return <section className="lab-screen">
    <div className="eyebrow muted">PROGRAMAÇÃO PRÁTICA</div>
    <h1>Laboratório C++</h1>
    <p className="panel-intro">Escreva programas, analise avisos locais, teste entradas e exporte seu projeto. A execução de verdade usa uma instância isolada do Judge0 quando configurada.</p>
    <div className="lab-badge"><ShieldCheck size={15}/> {apiUrl ? 'Executor remoto configurado' : 'Modo editor · executor pendente de configuração'}</div>

    <div className="lab-toolbar">
      <select aria-label="Carregar código de exemplo" value={example} onChange={e => loadSample(Number(e.target.value))}>
        <option value={-1}>Selecionar um exemplo</option>
        {SAMPLES.map((item, i) => <option value={i} key={item.label}>{item.label}</option>)}
      </select>
      <span className="spacer"/>
      <button className="btn-outline" onClick={analyze}><SearchCode size={16}/> Analisar</button>
      <button className="btn-outline" onClick={applySimpleFixes} disabled={issues.length === 0}><Wrench size={16}/> Corrigir básico</button>
      <button className="btn-primary" disabled={busy} onClick={run}><Play size={16}/>{busy ? 'Executando...' : 'Executar C++'}</button>
    </div>

    <div className="lab-editor-grid">
      <div className="lab-card">
        <div className="lab-card-heading"><span className="file-tab"><Code2 size={16}/> main.cpp</span><span>{touchEditor ? 'Editor para celular' : 'C++ · Monaco'}</span></div>
        <div className="lab-editor">
          {touchEditor ? (
            <label className="touch-editor-label">
              <span className="sr-only">Código C++ editável</span>
              <textarea ref={textAreaRef} className="mobile-code-editor" aria-label="Código C++" value={code}
                onChange={e => { setCode(e.target.value); setCompilerIssues([]); }}
                autoCapitalize="off" autoCorrect="off" spellCheck={false} wrap="soft" />
            </label>
          ) : (
            <Editor height="420px" language="cpp" theme="vs-dark" value={code} onMount={onMount} onChange={value => { setCode(value || ''); setCompilerIssues([]); }}
              options={{ fontSize: 13, minimap: { enabled: false }, automaticLayout: true, tabSize: 4, lineNumbers: 'on', scrollBeyondLastLine: false, wordWrap: 'on' }}
              loading={<div className="lab-card-body">Carregando editor de código...</div>} />
          )}
        </div>
        <div className="lab-card-footer">
          <button className="btn-outline" onClick={() => exportFile('cpp')}><Download size={16}/> Baixar .cpp</button>
          <button className="btn-outline" onClick={() => exportFile('json')}><FileJson2 size={16}/> Exportar JSON</button>
          <label className="btn-outline" style={{cursor:'pointer'}}>Importar JSON <input aria-label="Importar arquivo JSON" type="file" accept=".json,application/json" style={{display:'none'}} onChange={e => { importProject(e.target.files?.[0]);e.target.value=''; }}/></label>
        </div>
      </div>
      <div className="lab-card">
        <div className="lab-card-heading"><span className="file-tab"><Terminal size={16}/> Console e diagnóstico</span><span className="lab-state">{status}</span></div>
        <div className="lab-card-body">
          <label className="lab-input">Entrada padrão (stdin) — valores separados por espaço ou linha
            <textarea value={stdin} onChange={e=>setStdin(e.target.value)} placeholder={'Exemplo para a calculadora:\n10 + 5'} maxLength={4000}/>
          </label>
          <div className="lab-divider"/>
          <pre className={'lab-output '+(outputType === 'error' ? 'error' : '')} aria-live="polite">{output}</pre>
          <div className="lab-divider"/>
          <div className="lab-card-heading" style={{margin:'0 -16px 12px',background:'transparent'}}><span>ANÁLISE LOCAL</span><span>{allIssues.length} aviso(s)</span></div>
          {analysisVisible && allIssues.length === 0 && <p className="lab-note">Nenhum padrão conhecido foi sinalizado. Isso não equivale a compilar nem garante que o código está correto.</p>}
          {analysisVisible && allIssues.map((item,i) => <button className={'lab-diagnostic '+(item.severity==='error'?'error':'')} key={item.line+'-'+i} onClick={()=>navigateIssue(item.line)}>
            <AlertTriangle size={16}/><span><strong>Linha {item.line}</strong><br/>{item.message}</span>
          </button>)}
          {!analysisVisible && <p className="lab-note">Clique em Analisar para ver sugestões. Os marcadores são heurísticos e podem falhar; o compilador fornece o diagnóstico definitivo de sintaxe.</p>}
          <p className="lab-note warn">O console aceita entradas preparadas antes da execução; interação contínua em tempo real não está disponível nesta versão.</p>
          {touchEditor && <p className="lab-note">No celular, o editor usa uma área de texto otimizada para toque e teclado virtual. O destaque de sintaxe fica disponível no computador; os diagnósticos e downloads funcionam nas duas versões.</p>}
        </div>
      </div>
    </div>
    <div className="lab-helper"><div style={{display:'flex',alignItems:'center',gap:10}}><CheckCircle2 size={19}/><strong>Compilação real, sem simulação</strong></div><p>Quando o Worker e o Judge0 estiverem ativos, o editor mostrará a saída e os erros devolvidos pelo compilador. Sem infraestrutura configurada, você ainda pode estudar, editar e baixar códigos. A execução utiliza limites de CPU, memória e tamanho de entrada.</p>
      <p><RotateCcw size={13} style={{verticalAlign:'middle'}}/> O código do editor é salvo no navegador deste dispositivo.</p>
    </div>
  </section>;
}
