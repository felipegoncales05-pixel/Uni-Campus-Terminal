interface Env {
  ALLOWED_ORIGIN: string;
  JUDGE0_BASE_URL: string;
  JUDGE0_LANGUAGE_ID: string;
  JUDGE0_AUTH_TOKEN?: string;
}

type Submission = {
  token?: string;
  status?: { id?: number; description?: string };
  stdout?: string | null;
  stderr?: string | null;
  compile_output?: string | null;
  message?: string | null;
  time?: string | number | null;
  memory?: number | null;
};

function json(payload: unknown, status: number, origin?: string) {
  return new Response(status === 204 ? null : JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Vary': 'Origin',
      ...(origin ? {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '600',
      } : {}),
    },
  });
}
function encoded(value: string): string {
  const bytes = new TextEncoder().encode(value);
  const binary = Array.from(bytes, byte => String.fromCharCode(byte)).join('');
  return btoa(binary);
}
function decoded(value?: string | null) {
  if (!value) return '';
  try {
    const binary = atob(value);
    const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch { return value; }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') || '';
    const allowed = env.ALLOWED_ORIGIN?.trim();
    const path = new URL(request.url).pathname;
    if (path === '/health' && request.method === 'GET') {
      return json({ service: 'campus-cpp-executor-proxy', configured: Boolean(env.JUDGE0_BASE_URL) }, 200, origin === allowed ? origin : undefined);
    }
    if (!allowed || origin !== allowed) return json({ message: 'Origem não autorizada' }, 403);
    if (request.method === 'OPTIONS') return json({}, 204, origin);
    if (path !== '/execute' || request.method !== 'POST') return json({ message: 'Rota não encontrada' }, 404, origin);
    if (!env.JUDGE0_BASE_URL) return json({ message: 'Serviço Judge0 ainda não configurado' }, 503, origin);

    let submitted: { source?: unknown; stdin?: unknown; language?: unknown };
    try {
      const body = await request.text();
      if (body.length > 25000) return json({ message: 'Solicitação muito grande' }, 413, origin);
      submitted = JSON.parse(body);
    } catch { return json({ message: 'JSON inválido' }, 400, origin); }

    const source = submitted.source;
    const stdin = submitted.stdin ?? '';
    if (submitted.language !== 'cpp' || typeof source !== 'string' || typeof stdin !== 'string' ||
        source.length < 1 || source.length > 20000 || stdin.length > 4000)
      return json({ message: 'Código, entrada ou linguagem inválidos' }, 400, origin);

    const base = env.JUDGE0_BASE_URL.replace(/\/+$/, '');
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(env.JUDGE0_AUTH_TOKEN ? { 'X-Auth-Token': env.JUDGE0_AUTH_TOKEN } : {}),
    };
    const fields = 'stdout,stderr,compile_output,message,status,time,memory';
    try {
      const submit = await fetch(base + '/submissions?base64_encoded=true&wait=false', {
        method: 'POST', headers,
        body: JSON.stringify({
          source_code: encoded(source),
          stdin: encoded(stdin),
          language_id: Number(env.JUDGE0_LANGUAGE_ID || '54'),
          cpu_time_limit: 2,
          wall_time_limit: 6,
          memory_limit: 128000,
          max_file_size: 2048,
          enable_network: false,
        }),
      });
      if (!submit.ok) return json({ message: 'Falha ao enviar ao compilador (HTTP ' + submit.status + ')' }, 502, origin);
      const initial = await submit.json() as Submission;
      if (!initial.token) return json({ message: 'O compilador não retornou token de execução' }, 502, origin);
      const token = encodeURIComponent(initial.token);
      for (let attempt = 0; attempt < 14; attempt++) {
        await new Promise(resolve => setTimeout(resolve, 600));
        const poll = await fetch(base + '/submissions/' + token + '?base64_encoded=true&fields=' + fields, { headers });
        if (!poll.ok) return json({ message: 'Falha ao consultar compilação (HTTP ' + poll.status + ')' }, 502, origin);
        const result = await poll.json() as Submission;
        if ((result.status?.id ?? 0) <= 2) continue;
        return json({
          status: result.status,
          stdout: decoded(result.stdout),
          stderr: decoded(result.stderr),
          compile_output: decoded(result.compile_output),
          message: decoded(result.message),
          time: result.time, memory: result.memory,
        }, 200, origin);
      }
      return json({ message: 'A execução ultrapassou o tempo de espera. Tente novamente.' }, 504, origin);
    } catch {
      return json({ message: 'O serviço de compilação está indisponível no momento' }, 502, origin);
    }
  },
};
