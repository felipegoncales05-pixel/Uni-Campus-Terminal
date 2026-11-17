# Compilador C++ — configuração técnica

O GitHub Pages só hospeda arquivos estáticos. Para compilar código de verdade, o Campus Terminal utiliza a seguinte arquitetura:

Navegador (Monaco) → Cloudflare Worker → Judge0 isolado → saída/erros no navegador.

## Como habilitar

1. Configure uma instância Judge0 CE ou um provedor compatível, com sandbox e quotas adequados.
2. No arquivo worker/wrangler.toml, defina JUDGE0_BASE_URL e confirme o JUDGE0_LANGUAGE_ID consultando a lista /languages da instância. O valor 54 costuma corresponder a C++17, não necessariamente a C++20.
3. Entre na pasta worker, execute npm install e depois npm run deploy.
4. Se necessário, cadastre o token do provedor com npx wrangler secret put JUDGE0_AUTH_TOKEN. Nunca coloque esse segredo no front-end.
5. No repositório GitHub, adicione a variável VITE_COMPILER_API_URL com o endereço HTTPS do Worker (sem /execute) e publique novamente.
6. O site chamará POST /execute enviando language, source e stdin em JSON.

ALLOWED_ORIGIN é a origem do GitHub Pages (https://felipegoncales05-pixel.github.io), sem o caminho /Uni-Campus-Terminal/.

O Worker encaminha o código ao Judge0, consulta o token de execução e devolve stdout, stderr, compile_output e status. Os erros do compilador são apresentados na interface.

## Segurança

A API rejeita origens fora da configuração e entradas muito grandes. A chamada ao Judge0 inclui limites de CPU, memória e tempo, com rede desabilitada. Ainda será necessário ativar rate limiting e quotas reais no Cloudflare e no serviço de compilação antes de liberar execução pública. CORS, sozinho, não autentica clientes não navegador.

Nunca execute o código dos visitantes diretamente no Worker ou no mesmo servidor que armazena arquivos privados. O serviço Judge0 deve estar devidamente isolado e atualizado.

## Estado

Este repositório contém a integração, mas não instala automaticamente uma instância Judge0 nem publica o Worker. Sem VITE_COMPILER_API_URL, o botão de execução explica que o compilador ainda não está configurado. As demais funções funcionam sem a API.
