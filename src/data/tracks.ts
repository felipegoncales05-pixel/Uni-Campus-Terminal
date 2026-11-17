import type { Track } from '../types';

// Conteúdo explicativo original, organizado a partir das referências listadas em cada trilha.
// A trilha C++ é conteúdo complementar novo; não é transcrição das fontes.
export const tracks: Track[] = [
  {
    "id": "logica",
    "title": "Lógica e Algoritmos",
    "icon": "brain-circuit",
    "category": "Fundamentos",
    "color": "#8b5cf6",
    "description": "Raciocínio computacional e construção passo a passo de soluções.",
    "sources": [
      {
        "title": "Lógica e Linguagem de Programação",
        "url": "https://drive.google.com/drive/folders/1BYPB3KdOCrDEk8OlnRLcsU5K8WQ4jnWE"
      },
      {
        "title": "Desenvolvimento de Algoritmos",
        "url": "https://drive.google.com/drive/folders/1BN9nolLbGyVn-2nqrzQW34v4sAJgYhCz"
      }
    ],
    "lessons": [
      {
        "title": "Algoritmos e pseudocódigo",
        "text": "Algoritmo é uma sequência finita e ordenada de passos que transforma entradas em saídas. Antes de programar, descreva o problema, identifique dados necessários e defina o resultado. Pseudocódigo registra a lógica sem exigir a sintaxe de uma linguagem específica.",
        "example": "Exemplo: ler duas notas; calcular (nota1 + nota2) / 2; exibir a média."
      },
      {
        "title": "Variáveis, tipos e operadores",
        "text": "Variáveis armazenam valores que podem mudar durante a execução. Números inteiros, decimais, textos e valores lógicos exigem operações adequadas. Operadores aritméticos calculam; relacionais comparam; lógicos combinam condições.",
        "example": "Exemplo: aprovado = (media >= 6) E (faltas <= 10)."
      },
      {
        "title": "Decisão e condições",
        "text": "Uma condição controla quais instruções serão executadas. A estrutura SE/SENÃO separa alternativas; ESCOLHA/CASO organiza muitos caminhos baseados no mesmo valor. Compare condições de forma explícita e cuide dos limites.",
        "example": "Exemplo: SE nota >= 6 ENTÃO exibir 'Aprovado'; SENÃO exibir 'Revisar'."
      },
      {
        "title": "Laços e repetição",
        "text": "PARA é adequado quando a contagem é conhecida; ENQUANTO verifica a condição antes de cada repetição; REPITA/ATÉ testa após executar o corpo. Uma variável de controle precisa evoluir para evitar laços sem término.",
        "example": "Exemplo: para i de 1 até 5: mostrar i."
      },
      {
        "title": "Vetores e decomposição",
        "text": "Vetores reúnem elementos indexados, facilitando contagens e buscas. Dividir um problema em funções reduz repetições e ajuda a testar partes menores do algoritmo. Verifique sempre os limites dos índices.",
        "example": "Exemplo: notas = [7, 8, 9]; percorrer o vetor para calcular a média."
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "c",
    "title": "Linguagem C",
    "icon": "terminal-square",
    "category": "Programação",
    "color": "#22c55e",
    "description": "Da programação estruturada aos ponteiros e gerenciamento de memória.",
    "sources": [
      {
        "title": "Apostila de C — UFMG",
        "url": "https://drive.google.com/file/d/1jVp8HmbTi5c1hlVpy3-ewEGetaSx5RWK/view"
      },
      {
        "title": "Biblioteca Linguagem C",
        "url": "https://drive.google.com/drive/folders/1j1aMqeN6-XbU5o8NcHtLlo2V3EqZXSl6"
      }
    ],
    "lessons": [
      {
        "title": "Estrutura de um programa C",
        "text": "Em C, a função main é o ponto de entrada. Arquivos de cabeçalho, como stdio.h, declaram funções da biblioteca; printf escreve e scanf lê dados formatados. Observe especificadores como %d e %f e confira os retornos de leitura.",
        "example": "Exemplo: #include <stdio.h> | int main(void) { printf(\"Olá\\n\"); return 0; }"
      },
      {
        "title": "Tipos, expressões e condições",
        "text": "int representa inteiros; float e double representam pontos flutuantes; char, caracteres. Expressões seguem precedência e conversões de tipo. if/else e switch escolhem caminhos; == compara, enquanto = atribui.",
        "example": "Exemplo: if (idade >= 18) { puts(\"Maior de idade\"); }"
      },
      {
        "title": "Laços, vetores e matrizes",
        "text": "for, while e do/while controlam repetições. Vetores possuem índices de 0 a tamanho - 1 e matrizes usam mais de um índice. Acesso fora dos limites é um erro grave e pode causar comportamento indefinido.",
        "example": "Exemplo: int notas[3] = {6,7,8}; printf(\"%d\", notas[0]);"
      },
      {
        "title": "Funções, escopo e strings",
        "text": "Funções recebem parâmetros, podem retornar valores e oferecem reutilização. Variáveis locais existem em determinado escopo; uma string em C é um conjunto de char terminado por '\\0'. Prefira fgets a funções de entrada inseguras.",
        "example": "Exemplo: int soma(int a,int b){return a+b;}"
      },
      {
        "title": "Ponteiros e memória",
        "text": "Ponteiro guarda endereço de memória; & obtém endereço e * desreferencia. malloc/calloc reservam memória dinâmica e free libera. Verifique ponteiros nulos, tamanhos e vida útil dos objetos antes de acessá-los.",
        "example": "Exemplo: int x=7; int *p=&x; printf(\"%d\", *p);"
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "cpp",
    "title": "Linguagem C++",
    "icon": "code-2",
    "category": "Programação",
    "color": "#38bdf8",
    "description": "Linguagem moderna, orientação a objetos e laboratório com execução isolada.",
    "original": true,
    "sources": [
      {
        "title": "Complemento autoral — laboratório C++",
        "url": "#local-cpp"
      },
      {
        "title": "Base comparativa: apostilas de Linguagem C",
        "url": "https://drive.google.com/drive/folders/1j1aMqeN6-XbU5o8NcHtLlo2V3EqZXSl6"
      }
    ],
    "lessons": [
      {
        "title": "Primeiro programa e entrada/saída",
        "text": "C++ usa main como ponto de entrada e oferece streams como std::cout e std::cin. Bibliotecas são incluídas por #include; std:: permite acessar símbolos da biblioteca padrão. Uma compilação verifica o programa antes de executá-lo.",
        "example": "Exemplo: #include <iostream> | int main(){ std::cout << \"Olá\"; return 0; }"
      },
      {
        "title": "Tipos e controle de fluxo",
        "text": "Variáveis podem ter tipo explícito ou ser deduzidas com auto. if, else, switch, for e while controlam decisões e repetições. std::string gerencia texto de forma mais conveniente do que um vetor C de char.",
        "example": "Exemplo: int idade=20; if(idade>=18){ std::cout << \"Adulto\"; }"
      },
      {
        "title": "Funções, referências e const",
        "text": "Funções separam responsabilidades. Passar por valor copia um objeto; referências permitem acesso ao original; const evita alterações indevidas. Em programas novos, prefira objetos e referências quando não precisa trabalhar com ponteiros crus.",
        "example": "Exemplo: int dobro(int n){return n*2;}"
      },
      {
        "title": "Classes e orientação a objetos",
        "text": "Classes agrupam estado e comportamento; public e private ajudam a controlar o acesso. Construtores inicializam objetos e métodos operam sobre os seus dados. Encapsulamento protege invariantes, não apenas oculta variáveis.",
        "example": "Exemplo: class Conta { public: int saldo=0; void depositar(int v){saldo+=v;} };"
      },
      {
        "title": "STL, depuração e boas práticas",
        "text": "std::vector permite coleções redimensionáveis e algoritmos da biblioteca padrão evitam reinventar operações. Erros de compilação aparecem antes da execução; erros lógicos exigem testes. Leia a primeira mensagem relevante e examine a linha indicada.",
        "example": "Exemplo: std::vector<int> notas{7,8,9}; for(int n: notas) std::cout << n;"
      }
    ],
    "optional": false
  },
  {
    "id": "banco",
    "title": "Banco de Dados e SQL",
    "icon": "database",
    "category": "Dados",
    "color": "#f59e0b",
    "description": "Modelagem relacional, normalização e consultas SQL.",
    "optional": true,
    "sources": [
      {
        "title": "Fundamentos de Bancos de Dados",
        "url": "https://drive.google.com/file/d/1-sCi4iAQQLs8RWuIzTCnXDmn5V1JHBLn/view"
      },
      {
        "title": "Curso Básico de SQL",
        "url": "https://drive.google.com/file/d/1bP0TzGSyr4NUQpT8CXiElyAd3mtqHm6k/view"
      },
      {
        "title": "Biblioteca SQL",
        "url": "https://drive.google.com/drive/folders/1XHb82Q-38DrmTdwJ78KNhskP2ReZ7b_Y"
      }
    ],
    "lessons": [
      {
        "title": "Dados, SGBD e modelos",
        "text": "Um banco de dados organiza informações persistentes; o SGBD oferece mecanismos de armazenamento, consulta, segurança e transações. O modelo relacional organiza dados em tabelas, linhas e colunas.",
        "example": "Exemplo: tabela Alunos(id, nome, curso_id)."
      },
      {
        "title": "Entidade-relacionamento",
        "text": "Entidades representam objetos do domínio; atributos descrevem propriedades; relacionamentos conectam entidades. Cardinalidades 1:1, 1:N e N:N determinam como modelar ligações. Um modelo conceitual deve refletir regras de negócio.",
        "example": "Exemplo: um Curso possui muitos Alunos; cada Aluno pertence a um Curso."
      },
      {
        "title": "Chaves e normalização",
        "text": "Uma chave primária identifica registros; uma chave estrangeira referencia outra tabela. Normalização reduz redundâncias e anomalias de inserção, atualização e exclusão. A 1FN exige valores atômicos no modelo relacional tradicional; a 2FN e a 3FN tratam dependências.",
        "example": "Exemplo: curso_id em Alunos referencia id em Cursos."
      },
      {
        "title": "Consultas e filtros SQL",
        "text": "SELECT escolhe colunas, FROM informa a tabela, WHERE filtra linhas e ORDER BY organiza resultados. Use parâmetros em aplicações para evitar injeção SQL. LIMIT depende do dialeto e controla a quantidade de linhas retornadas.",
        "example": "Exemplo: SELECT nome FROM alunos WHERE nota >= 6 ORDER BY nome;"
      },
      {
        "title": "Agregações e JOIN",
        "text": "COUNT, AVG e SUM resumem conjuntos de linhas; GROUP BY agrupa e HAVING filtra grupos. JOIN combina tabelas por chaves relacionadas; um JOIN mal definido pode multiplicar linhas inadvertidamente.",
        "example": "Exemplo: SELECT curso_id, COUNT(*) FROM alunos GROUP BY curso_id;"
      }
    ],
    "original": false
  },
  {
    "id": "html",
    "title": "HTML5 e Fundamentos Web",
    "icon": "globe-2",
    "category": "Web",
    "color": "#fb7185",
    "description": "Arquitetura da Web, semântica, formulários e acessibilidade.",
    "sources": [
      {
        "title": "Aula 01 — Introdução Front-End",
        "url": "https://drive.google.com/file/d/1381lsZirYovZVfUMjvYzOPoRT9aNDOMH/view"
      },
      {
        "title": "Aula 03 — HTML5, Semântica e Formulários",
        "url": "https://drive.google.com/file/d/1EbcpT2O4ejTlRuwYbblvDb46mht7HJby/view"
      }
    ],
    "lessons": [
      {
        "title": "Como a Web funciona",
        "text": "O navegador solicita documentos e recursos ao servidor usando HTTP ou HTTPS. HTML estrutura, CSS apresenta e JavaScript acrescenta interações. Uma URL identifica recursos e o protocolo HTTPS protege os dados em trânsito.",
        "example": "Exemplo: requisição GET /index.html retorna um documento HTML."
      },
      {
        "title": "Estrutura do HTML5",
        "text": "DOCTYPE informa o modo de documento; html representa a raiz, head contém metadados e body contém conteúdo visível. Atributos adicionam informações aos elementos. Fechamento e aninhamento corretos são importantes.",
        "example": "Exemplo: <!doctype html> <html lang=\"pt-BR\"><head><title>Site</title></head><body><h1>Olá</h1></body></html>"
      },
      {
        "title": "Semântica e navegação",
        "text": "header, nav, main, section, article e footer identificam o papel de regiões na página. Semântica facilita manutenção, leitura por tecnologias assistivas e a organização do conteúdo. div continua útil para agrupamentos genéricos.",
        "example": "Exemplo: <main><article><h2>Notícia</h2></article></main>"
      },
      {
        "title": "Formulários e validação",
        "text": "form reúne controles; label identifica campos e input captura dados. required, min, max e pattern oferecem validação de interface, mas não substituem validação no servidor. Use tipos adequados, como email e number.",
        "example": "Exemplo: <label for=\"nome\">Nome</label><input id=\"nome\" name=\"nome\" required>"
      },
      {
        "title": "Mídia, SEO e acessibilidade",
        "text": "img exige texto alternativo útil quando a imagem transmite informação; legendas e navegação por teclado ampliam acesso. Títulos hierárquicos, idioma da página e metadados ajudam leitores e mecanismos de busca.",
        "example": "Exemplo: <img src=\"grafico.png\" alt=\"Vendas aumentaram entre janeiro e março\">"
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "css",
    "title": "CSS, UI e UX",
    "icon": "palette",
    "category": "Design",
    "color": "#e879f9",
    "description": "Interfaces legíveis, responsivas e coerentes.",
    "sources": [
      {
        "title": "Aulas CSS e Laboratórios",
        "url": "https://drive.google.com/drive/folders/1Zhzchh7sAAwFhEhZNpaCIWmwLpLjZDDl"
      },
      {
        "title": "Aula — UI, UX, Gestalt e Cor",
        "url": "https://docs.google.com/document/d/1XU1hRh2lTF8MgQb56F_IC0d-d_5vyPSD6BIamlBNrUs/edit"
      }
    ],
    "lessons": [
      {
        "title": "Seletores, cascata e especificidade",
        "text": "CSS descreve como os elementos são renderizados. Regras usam seletor, propriedade e valor. A cascata considera origem, camada, importância, especificidade e ordem para resolver conflitos de estilo.",
        "example": "Exemplo: .card { background: #111827; color: white; }"
      },
      {
        "title": "Modelo de caixa e tipografia",
        "text": "Conteúdo, padding, borda e margem formam o box model. box-sizing: border-box simplifica medidas; tipografia, contraste e espaçamento determinam a legibilidade. Hierarquia visual orienta a atenção.",
        "example": "Exemplo: * { box-sizing: border-box; }"
      },
      {
        "title": "Flexbox e Grid",
        "text": "Flexbox distribui itens principalmente em uma dimensão; CSS Grid organiza linhas e colunas. gap define espaçamento e unidades fluidas ajudam a adaptar componentes. Evite tamanhos fixos que causem rolagem horizontal.",
        "example": "Exemplo: .cards { display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); }"
      },
      {
        "title": "Responsividade e acessibilidade",
        "text": "Media queries permitem modificar layouts em telas menores. Garanta alvos clicáveis, foco visível, contraste apropriado e boa leitura em zoom. Teste teclado, celular e diferentes densidades de tela.",
        "example": "Exemplo: @media(max-width:700px){.sidebar{display:none}}"
      },
      {
        "title": "UX, UI, Gestalt e cores",
        "text": "UX estuda necessidades e fluxo de uso; UI define a interface visual. Princípios da Gestalt, como proximidade e semelhança, facilitam o agrupamento. Em RGB hexadecimal, cada canal normalmente varia de 00 a FF.",
        "example": "Exemplo: #FF0000 indica vermelho máximo e verde/azul zerados."
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "js",
    "title": "JavaScript e DOM",
    "icon": "braces",
    "category": "Web",
    "color": "#facc15",
    "description": "Interatividade, dados no navegador e comunicação com APIs.",
    "sources": [
      {
        "title": "Aula 08 — DOM + JavaScript",
        "url": "https://drive.google.com/file/d/1xErWMO4w2IkUGoBkxE_aX9quxQ9wiEYB/view"
      },
      {
        "title": "Aula 10 — JS, ESP32 e Wokwi",
        "url": "https://drive.google.com/file/d/1IC8zEl4rToS9muNs3bMeq9Sclo454PYW/view"
      }
    ],
    "lessons": [
      {
        "title": "Valores, variáveis e funções",
        "text": "JavaScript usa let e const para vincular valores; const impede reatribuição da variável, não torna objetos imutáveis. Funções recebem argumentos, executam instruções e podem retornar resultados.",
        "example": "Exemplo: const dobro = n => n * 2;"
      },
      {
        "title": "Operadores e estruturas",
        "text": "if/else executa caminhos condicionais e for/while repetem ações. === compara sem coerção de tipo; arrays armazenam sequências e objetos agrupam propriedades. Prefira previsibilidade à conversão implícita.",
        "example": "Exemplo: const alunos = [\"Ana\",\"Bia\"]; alunos.forEach(nome => console.log(nome));"
      },
      {
        "title": "DOM e eventos",
        "text": "O DOM é a representação em árvore da página carregada. getElementById e querySelector localizam elementos; textContent atualiza texto de forma segura. addEventListener reage a click, input e outros eventos.",
        "example": "Exemplo: botao.addEventListener(\"click\", () => mensagem.textContent = \"Pronto!\");"
      },
      {
        "title": "Armazenamento local",
        "text": "localStorage persiste strings entre sessões no mesmo navegador; sessionStorage dura durante a sessão da aba. JSON.stringify serializa objetos e JSON.parse reconstrói dados. Nunca armazene senhas ou segredos nesses mecanismos.",
        "example": "Exemplo: localStorage.setItem(\"tema\", \"escuro\");"
      },
      {
        "title": "Fetch, JSON e IoT",
        "text": "fetch faz requisições HTTP assíncronas. Um dashboard pode obter JSON periodicamente e atualizar somente o DOM; aplicações com sensores podem ler rotas de um ESP32 quando a rede permite. Trate falhas e limites de acesso de rede.",
        "example": "Exemplo: fetch(\"/dados\").then(r=>r.json()).then(d=>console.log(d.botao));"
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "git",
    "title": "Git e GitHub",
    "icon": "git-branch",
    "category": "Ferramentas",
    "color": "#fb923c",
    "description": "Versionamento, colaboração e publicação de sites.",
    "sources": [
      {
        "title": "Aula 09 — GitHub e GitHub Pages",
        "url": "https://drive.google.com/file/d/18DqB3gjNLilrmZ9vWyq3buvAaj7NXbpJ/view"
      },
      {
        "title": "FrontEndWeb — Aulas",
        "url": "https://drive.google.com/drive/folders/1dKi1wddpwuOR4_Yx_a9b1AsSoIF3QILS"
      }
    ],
    "lessons": [
      {
        "title": "Repositório, Git e GitHub",
        "text": "Git gerencia histórico de versões localmente; GitHub hospeda repositórios remotos e oferece colaboração. Um commit registra um estado do projeto. Mensagens claras ajudam a explicar por que algo mudou.",
        "example": "Exemplo: git init; git add .; git commit -m \"Primeira versão\""
      },
      {
        "title": "Clone, pull e push",
        "text": "git clone obtém um repositório remoto; git pull integra alterações remotas e git push envia commits locais. Revise o status e diferenças antes de publicar. Conflitos precisam ser resolvidos conscientemente.",
        "example": "Exemplo: git status; git pull; git push origin main"
      },
      {
        "title": "Branches e pull requests",
        "text": "Branches permitem desenvolver sem modificar diretamente a versão principal. Pull requests propõem mudanças para revisão; merge as integra. Pequenas alterações bem descritas tornam a revisão mais fácil.",
        "example": "Exemplo: git switch -c feat/nova-pagina"
      },
      {
        "title": "Organização e colaboração",
        "text": "README explica a finalidade, configuração e uso. .gitignore evita enviar arquivos gerados ou segredos. Issues e projetos auxiliam o planejamento; revisões e testes ajudam a reduzir regressões.",
        "example": "Exemplo: ignorar node_modules/ e .env no .gitignore."
      },
      {
        "title": "GitHub Pages e deploy",
        "text": "GitHub Pages serve sites estáticos. Um app Vite pode ser compilado pelo GitHub Actions e publicar a pasta dist. APIs e compiladores precisam de hospedagem separada; a interface pode funcionar sem o executor remoto.",
        "example": "Exemplo: npm run build produz os arquivos estáticos em dist/."
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "python",
    "title": "Python",
    "icon": "file-code-2",
    "category": "Programação",
    "color": "#60a5fa",
    "description": "Programação prática, arquivos e análise de dados.",
    "sources": [
      {
        "title": "Biblioteca Python",
        "url": "https://drive.google.com/drive/folders/16zIOQr85sm-PNKqVZ0CuoowEthzlxjsy"
      },
      {
        "title": "Pensamento Lógico com Python",
        "url": "https://drive.google.com/file/d/1LZnF2p3e0VbAXybkTFggxpUS5puL9akE/view"
      }
    ],
    "lessons": [
      {
        "title": "Sintaxe, indentação e tipos",
        "text": "Em Python, a indentação delimita blocos. int, float, str e bool são tipos comuns; input devolve texto, que pode precisar de conversão. Use nomes significativos e evite misturar tabs e espaços.",
        "example": "Exemplo: nome = input('Nome: '); print('Olá,', nome)"
      },
      {
        "title": "Condições e loops",
        "text": "if/elif/else escolhe caminhos; for percorre iteráveis e while repete enquanto a condição for verdadeira. range cria uma sequência de inteiros para percursos controlados.",
        "example": "Exemplo: for i in range(3): print(i)"
      },
      {
        "title": "Listas, dicionários e conjuntos",
        "text": "Listas preservam ordem; dicionários associam chaves a valores; sets representam coleções sem repetição. Escolha a estrutura conforme as operações desejadas. Índices começam em zero.",
        "example": "Exemplo: aluno = {'nome':'Ana','nota':8.0}"
      },
      {
        "title": "Funções, módulos e arquivos",
        "text": "def declara funções; return devolve um resultado. Módulos organizam código reutilizável; with open fecha arquivos mesmo diante de exceções. Trate erros de arquivo, formato e codificação.",
        "example": "Exemplo: def soma(a,b): return a+b"
      },
      {
        "title": "Pandas e análise",
        "text": "DataFrames organizam dados em linhas e colunas. É possível ler CSV, selecionar colunas, filtrar linhas e calcular agregações. Antes de tirar conclusões, verifique tipos, valores ausentes e a origem dos dados.",
        "example": "Exemplo: df = pandas.read_csv('vendas.csv'); df['valor'].mean()"
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "engenharia",
    "title": "Engenharia de Software e POO",
    "icon": "blocks",
    "category": "Projetos",
    "color": "#34d399",
    "description": "Requisitos, arquitetura, objetos, qualidade e desenvolvimento iterativo.",
    "sources": [
      {
        "title": "Engenharia de Software",
        "url": "https://drive.google.com/file/d/1Vg4BHgxDU7K0V-agAyrYeZLz91QGVky7/view"
      },
      {
        "title": "Biblioteca POO",
        "url": "https://drive.google.com/drive/folders/15cSc8sWuxoMpY-WagZgzoFQ6ht7vYqr0"
      },
      {
        "title": "TCC — Chatbot Educacional",
        "url": "https://docs.google.com/document/d/1yEcvtxRxpGf7s0nG5K5YmHE2n-Y4QLLAs9GZ-_ltRWU/edit"
      }
    ],
    "lessons": [
      {
        "title": "Problema e requisitos",
        "text": "Requisitos funcionais descrevem o que o sistema deve fazer; não funcionais especificam qualidades e restrições. Entrevistas e exemplos de uso ajudam a descobrir necessidades reais. Critérios de aceitação tornam expectativas testáveis.",
        "example": "Exemplo: 'O aluno pode retomar questões respondidas' é requisito funcional."
      },
      {
        "title": "Modelagem e arquitetura",
        "text": "Diagramas e modelos representam limites, responsabilidades e relações antes da implementação. Separar interface, regras e acesso a dados reduz acoplamento. Escolhas técnicas devem seguir necessidades, não apenas modismos.",
        "example": "Exemplo: interface web -> API -> banco de dados."
      },
      {
        "title": "Objetos, classes e encapsulamento",
        "text": "Uma classe descreve atributos e métodos; uma instância representa um objeto concreto. Encapsulamento controla mudanças de estado; herança e composição são estratégias de reutilização com compromissos diferentes.",
        "example": "Exemplo: classe Aluno com nome, notas e método calcularMedia()."
      },
      {
        "title": "Testes e qualidade",
        "text": "Teste unitário verifica uma pequena unidade; integração verifica componentes trabalhando juntos; testes de interface cobrem fluxos do usuário. Teste tanto o caminho esperado quanto entradas inválidas e bordas.",
        "example": "Exemplo: para média 6,0, verificar se a regra considera aprovação."
      },
      {
        "title": "Ágil, Git e evolução",
        "text": "Trabalho iterativo quebra entregas em incrementos verificáveis. Backlog prioriza necessidades, revisão reúne feedback e retrospectiva melhora o processo. Versionamento e documentação evitam perda de contexto.",
        "example": "Exemplo: sprint 1: login; sprint 2: questões; sprint 3: relatórios."
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "dados",
    "title": "Estatística, Dados e Power BI",
    "icon": "chart-column-increasing",
    "category": "Dados",
    "color": "#a78bfa",
    "description": "Ler dados, calcular indicadores e comunicar resultados.",
    "sources": [
      {
        "title": "Estatística Descritiva",
        "url": "https://drive.google.com/file/d/1B0NS16LFdRJwMkqwx0_CmvU7lMf9IXq2/view"
      },
      {
        "title": "Power BI Curso 2_v2",
        "url": "https://docs.google.com/document/d/1QWhVoDz0kGROJo1vClgT0Jc4ZcFKgFLRemhOSrdCp3E/edit"
      },
      {
        "title": "Biblioteca Power BI",
        "url": "https://drive.google.com/drive/folders/1egBbRcE9URRXP9dSo3JKujbJRBxvWOEF"
      }
    ],
    "lessons": [
      {
        "title": "Tipos de dados e gráficos",
        "text": "População é o conjunto de interesse; amostra é a parte observada. Variáveis podem ser qualitativas ou quantitativas. Tabelas de frequência, gráficos de barras e histogramas permitem explorar distribuições distintas.",
        "example": "Exemplo: gráfico de barras compara categorias; histograma mostra frequências numéricas por intervalos."
      },
      {
        "title": "Medidas de posição e dispersão",
        "text": "Média resume a soma dividida pela quantidade; mediana é o valor central ordenado; moda é o mais frequente. Variância e desvio-padrão ajudam a descrever dispersão. Nenhuma medida isolada conta toda a história.",
        "example": "Exemplo: dados 2, 3, 100 possuem média 35 e mediana 3."
      },
      {
        "title": "Power Query e ETL",
        "text": "ETL reúne extração, transformação e carregamento. No Power BI, Power Query utiliza a linguagem M para limpar e transformar dados. Query folding permite que etapas compatíveis sejam processadas na própria fonte.",
        "example": "Exemplo: remover linhas vazias, corrigir tipos e agrupar vendas por mês."
      },
      {
        "title": "Modelagem estrela e DAX",
        "text": "Um esquema estrela separa fatos mensuráveis de dimensões descritivas. DAX define medidas que respondem ao contexto de filtro; funções como CALCULATE e TOTALYTD são usadas em análises mais avançadas.",
        "example": "Exemplo: Total Vendas = SUM(Vendas[Valor])"
      },
      {
        "title": "Storytelling e publicação",
        "text": "Um bom dashboard apresenta perguntas de negócio claras e destaca métricas relevantes. Filtros, bookmarks e drillthrough ajudam a investigar dados; publicação e permissões exigem governança e atenção a dados sensíveis.",
        "example": "Exemplo: painel com faturamento, evolução mensal e categorias, com filtros consistentes."
      }
    ],
    "original": false,
    "optional": false
  },
  {
    "id": "ia",
    "title": "IA e Machine Learning",
    "icon": "bot",
    "category": "Tecnologia",
    "color": "#2dd4bf",
    "description": "Fundamentos de modelos inteligentes e uso responsável de IA.",
    "sources": [
      {
        "title": "Biblioteca IA e Machine Learning",
        "url": "https://drive.google.com/drive/folders/1OECTtAFOQoImPSiOqk_oyIXT2qasmnNa"
      },
      {
        "title": "TCC — Chatbot Educacional",
        "url": "https://docs.google.com/document/d/1yEcvtxRxpGf7s0nG5K5YmHE2n-Y4QLLAs9GZ-_ltRWU/edit"
      }
    ],
    "lessons": [
      {
        "title": "IA, ML e aprendizagem supervisionada",
        "text": "IA abrange técnicas para sistemas realizarem tarefas associadas à inteligência. Em ML, modelos aprendem padrões a partir de dados; classificação prevê classes e regressão prevê valores numéricos.",
        "example": "Exemplo: classificar emails como spam ou não spam."
      },
      {
        "title": "Dados, atributos e divisão",
        "text": "Atributos (features) são variáveis de entrada e o alvo é o valor desejado. Dividir dados em treino, validação e teste ajuda a medir generalização. Vazamento de dados gera avaliações enganosamente otimistas.",
        "example": "Exemplo: usar área e localização para estimar preço de imóvel."
      },
      {
        "title": "Treinamento, overfitting e métricas",
        "text": "Treinar ajusta parâmetros para reduzir erro. Overfitting ocorre quando o modelo aprende peculiaridades do treino e generaliza mal. Precisão, recall e matriz de confusão são úteis para classificação; MAE ajuda na regressão.",
        "example": "Exemplo: acurácia alta pode esconder baixo recall em uma classe rara."
      },
      {
        "title": "Redes neurais e deep learning",
        "text": "Redes neurais combinam camadas e funções de ativação para representar padrões complexos. Treinamento envolve função de perda e otimização. Modelos profundos podem exigir muitos dados, recursos e validação.",
        "example": "Exemplo: rede convolucional para classificar imagens."
      },
      {
        "title": "IA generativa, prompts e ética",
        "text": "Modelos generativos produzem texto, imagem ou código a partir de padrões aprendidos. Verifique saídas, fontes e permissões de uso. Evite fornecer dados pessoais sensíveis e trate respostas de IA como sugestões sujeitas a testes.",
        "example": "Exemplo: pedir à IA que explique uma função e depois validar com testes reais."
      }
    ],
    "original": false,
    "optional": false
  }
];
