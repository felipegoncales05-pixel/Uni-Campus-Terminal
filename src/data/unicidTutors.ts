// Guia complementar original para o Campus Terminal, inspirado na organização
// acadêmica do repositório público Tutores IA UNICID (Prof. Cid R. Andrade).
// A ementa oficial, o índice vivo e os materiais permanecem nos links de origem.
// Não importa a skill nem simula uma IA de conversação.
export type TutorModule = {
  id: string;
  title: string;
  summary: string;
  reflection: string;
  practice: string;
};
export type UnicidTutor = {
  id: string;
  title: string;
  description: string;
  color: string;
  relatedTrackIds: string[];
  modules: TutorModule[];
  official: {
    repository: string;
    syllabus: string;
    index: string;
    materials: string;
    skill: string;
    download: string;
  };
};
export const unicidTutors: UnicidTutor[] = [
  {
    "id": "mbd",
    "title": "Modelagem de Banco de Dados",
    "description": "Da análise do problema ao modelo relacional e à manipulação de dados.",
    "color": "#F59E0B",
    "relatedTrackIds": [
      "banco",
      "dados"
    ],
    "official": {
      "repository": "https://github.com/cidandrade/tutores-ia-unicid",
      "syllabus": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/disciplinas/mbd/ementa.md",
      "index": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/indices/mbd.md",
      "materials": "https://drive.google.com/drive/folders/1QVVdiG4LxFE7L3BSnZDFmHyakaoPX94A",
      "skill": "https://github.com/cidandrade/tutores-ia-unicid/tree/main/skills/tutor-mbd",
      "download": "https://github.com/cidandrade/tutores-ia-unicid/releases/latest/download/tutor-mbd.zip"
    },
    "modules": [
      {
        "id": "u1",
        "title": "Fundamentos e ética dos dados",
        "summary": "Diferença entre dado e informação, LGPD, tipos de dados e modelos conceitual, lógico e físico.",
        "reflection": "Como você explicaria a diferença entre um dado bruto e uma informação útil?",
        "practice": "Uma loja registra clientes e compras. Separe dados coletados, finalidade e cuidados com a privacidade."
      },
      {
        "id": "u2",
        "title": "MER, DER e representação",
        "summary": "Entidades, atributos, relacionamentos, cardinalidades, ferramentas de diagrama e dicionário de dados.",
        "reflection": "Quais entidades você identificaria num sistema de empréstimo de livros?",
        "practice": "Descreva, sem desenhar, duas entidades e uma relação com cardinalidade, justificando-a."
      },
      {
        "id": "u3",
        "title": "Normalização e integridade",
        "summary": "Transformar o modelo ER em tabelas, organizar chaves e reduzir redundâncias com regras de normalização.",
        "reflection": "O que pode dar errado ao repetir endereço do cliente em toda linha de pedido?",
        "practice": "Proponha tabelas para um catálogo e explique onde entram uma PK e uma FK."
      },
      {
        "id": "u4",
        "title": "SQL e ferramentas",
        "summary": "Tipos de dados e operações de inserção, consulta, alteração e exclusão; uso de ambientes de administração.",
        "reflection": "Como um SELECT se diferencia de um UPDATE em seus efeitos?",
        "practice": "Esboce uma consulta para listar pedidos por data, indicando quais colunas seriam necessárias."
      }
    ]
  },
  {
    "id": "dfw",
    "title": "Desenvolvimento Front-End para Web",
    "description": "Construção de interfaces com HTML, CSS, JavaScript e práticas de publicação.",
    "color": "#FB7185",
    "relatedTrackIds": [
      "html",
      "css",
      "js",
      "git"
    ],
    "official": {
      "repository": "https://github.com/cidandrade/tutores-ia-unicid",
      "syllabus": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/disciplinas/dfw/ementa.md",
      "index": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/indices/dfw.md",
      "materials": "https://drive.google.com/drive/folders/1csuG61YR6Ue2zVjk5Qcw1In7Dj4I1f2t",
      "skill": "https://github.com/cidandrade/tutores-ia-unicid/tree/main/skills/tutor-dfw",
      "download": "https://github.com/cidandrade/tutores-ia-unicid/releases/latest/download/tutor-dfw.zip"
    },
    "modules": [
      {
        "id": "u1",
        "title": "HTML e fundamentos da Web",
        "summary": "Requisições HTTP/HTTPS, semântica, formulários, mídia, SVG e Canvas.",
        "reflection": "O que muda quando você usa main e nav em vez de div para tudo?",
        "practice": "Organize semanticamente uma página com cabeçalho, navegação, formulário e rodapé."
      },
      {
        "id": "u2",
        "title": "CSS e composição visual",
        "summary": "Seletores, layout com Flexbox e Grid, menus, cartões, estados de interação e adaptação de tela.",
        "reflection": "Como escolher entre Flexbox e Grid para uma página de cards?",
        "practice": "Descreva o comportamento esperado para três cards no celular e no computador."
      },
      {
        "id": "u3",
        "title": "JavaScript e estado no navegador",
        "summary": "Eventos, DOM, escopo, funções e armazenamento por cookies, localStorage e sessionStorage.",
        "reflection": "O que acontece quando um clique atualiza textContent de um elemento?",
        "practice": "Descreva os eventos necessários para salvar e restaurar uma preferência de tema."
      },
      {
        "id": "u4",
        "title": "Versionamento, acessibilidade e publicação",
        "summary": "Git/GitHub, deploy, DNS, TLS/SSL, WCAG e uso responsável de assistentes de IA.",
        "reflection": "O que um usuário de teclado precisa para navegar por um menu?",
        "practice": "Crie um checklist de revisão antes de publicar uma página em GitHub Pages."
      }
    ]
  },
  {
    "id": "ed2",
    "title": "Estruturas de Dados II",
    "description": "Estruturas não lineares em C, árvores, recursão e tabelas hash.",
    "color": "#34D399",
    "relatedTrackIds": [
      "c",
      "logica"
    ],
    "official": {
      "repository": "https://github.com/cidandrade/tutores-ia-unicid",
      "syllabus": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/disciplinas/ed2/ementa.md",
      "index": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/indices/ed2.md",
      "materials": "https://drive.google.com/drive/folders/1JO_xwTOVjJkKsrajU6yQOFKncCZVg0BO",
      "skill": "https://github.com/cidandrade/tutores-ia-unicid/tree/main/skills/tutor-ed2",
      "download": "https://github.com/cidandrade/tutores-ia-unicid/releases/latest/download/tutor-ed2.zip"
    },
    "modules": [
      {
        "id": "u1",
        "title": "Memória dinâmica e recursão",
        "summary": "Ponteiros, structs, alocação, liberação e análise de custo de algoritmos recursivos.",
        "reflection": "Como reconhecer uma condição de parada numa função recursiva?",
        "practice": "Trace mentalmente a sequência de chamadas de uma busca recursiva simples."
      },
      {
        "id": "u2",
        "title": "Árvores binárias de busca",
        "summary": "Inserção, busca, exclusão e percursos em pré, em e pós-ordem.",
        "reflection": "Em uma BST, como decidir se uma busca segue pela esquerda ou direita?",
        "practice": "Desenhe uma BST para cinco valores escolhidos e informe o percurso em ordem."
      },
      {
        "id": "u3",
        "title": "Árvores balanceadas",
        "summary": "Características e compromissos de AVL, rubro-negra, 2-3, B e B+.",
        "reflection": "Por que manter uma árvore balanceada pode beneficiar pesquisas?",
        "practice": "Compare em palavras a busca numa lista desordenada e numa árvore balanceada."
      },
      {
        "id": "u4",
        "title": "Hashing",
        "summary": "Função hash, colisões, encadeamento, endereçamento aberto e redimensionamento.",
        "reflection": "Se duas chaves gerarem a mesma posição, que alternativas existem?",
        "practice": "Monte uma tabela hash pequena e represente uma colisão por encadeamento."
      }
    ]
  },
  {
    "id": "plp",
    "title": "Paradigmas de Linguagens de Programação",
    "description": "Linguagens, tipos, semântica e diferentes formas de estruturar programas.",
    "color": "#60A5FA",
    "relatedTrackIds": [
      "logica",
      "c",
      "cpp",
      "python",
      "engenharia"
    ],
    "official": {
      "repository": "https://github.com/cidandrade/tutores-ia-unicid",
      "syllabus": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/disciplinas/plp/ementa.md",
      "index": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/indices/plp.md",
      "materials": "https://drive.google.com/drive/folders/1ueryzU01WBlCYrnpjuMFCtN6rhzVfVn8",
      "skill": "https://github.com/cidandrade/tutores-ia-unicid/tree/main/skills/tutor-plp",
      "download": "https://github.com/cidandrade/tutores-ia-unicid/releases/latest/download/tutor-plp.zip"
    },
    "modules": [
      {
        "id": "u1",
        "title": "História, critérios e tradução",
        "summary": "Evolução das linguagens, legibilidade, custo, compilação, interpretação e máquinas virtuais.",
        "reflection": "Qual diferença prática existe entre compilar e interpretar código?",
        "practice": "Compare duas linguagens que conhece usando legibilidade e confiabilidade como critérios."
      },
      {
        "id": "u2",
        "title": "Sintaxe, tipos, escopo e funções",
        "summary": "Análise léxica, sintática, semântica, vínculo, passagem de parâmetros e gerenciamento de memória.",
        "reflection": "Quando uma variável deixa de estar acessível por causa do escopo?",
        "practice": "Explique um erro de tipo e uma situação de passagem de parâmetro sem usar uma prova real."
      },
      {
        "id": "u3",
        "title": "Imperativo, objetos e concorrência",
        "summary": "Estilo procedural, classes e objetos, threads/processos e coordenação de tarefas.",
        "reflection": "Como uma função pura se distingue de um procedimento que modifica estado?",
        "practice": "Compare um problema resolvido de forma imperativa e com objetos, apontando responsabilidades."
      },
      {
        "id": "u4",
        "title": "Funcional e lógico",
        "summary": "Funções e imutabilidade, recursão, relações lógicas e mecanismos como unificação e busca.",
        "reflection": "Em vez de especificar uma sequência de comandos, como você descreveria relações entre fatos?",
        "practice": "Proponha um problema simples para expressar como regra lógica ou função sem efeito colateral."
      }
    ]
  },
  {
    "id": "dp",
    "title": "Design Profissional",
    "description": "Carreira em tecnologia, portfólio, ética e responsabilidade social.",
    "color": "#A78BFA",
    "relatedTrackIds": [
      "git",
      "engenharia",
      "ia"
    ],
    "official": {
      "repository": "https://github.com/cidandrade/tutores-ia-unicid",
      "syllabus": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/disciplinas/dp/ementa.md",
      "index": "https://github.com/cidandrade/tutores-ia-unicid/blob/main/indices/dp.md",
      "materials": "https://drive.google.com/drive/folders/1QYVfowSWJQoiXn6f7P8CNCJHHbd3ku-Y",
      "skill": "https://github.com/cidandrade/tutores-ia-unicid/tree/main/skills/tutor-design-profissional",
      "download": "https://github.com/cidandrade/tutores-ia-unicid/releases/latest/download/tutor-design-profissional.zip"
    },
    "modules": [
      {
        "id": "u1",
        "title": "Identidade e portfólio profissional",
        "summary": "Perfis públicos, apresentação de projetos, documentação e networking.",
        "reflection": "Seu README explica claramente o problema e a solução do projeto?",
        "practice": "Escreva três critérios para selecionar trabalhos do seu portfólio de TI."
      },
      {
        "id": "u2",
        "title": "Planejamento de carreira",
        "summary": "Áreas de atuação, metas verificáveis, plano individual e estratégias de aprendizagem.",
        "reflection": "Qual competência você pretende desenvolver neste semestre e como vai medir o avanço?",
        "practice": "Transforme um objetivo genérico de carreira em uma meta específica e com prazo."
      },
      {
        "id": "u3",
        "title": "Ética e direitos digitais",
        "summary": "Licenças de código, proteção de dados, transparência e vieses de sistemas de IA.",
        "reflection": "Quais permissões uma licença concede e quais condições ela impõe?",
        "practice": "Analise os riscos de publicar dados pessoais em um repositório público."
      },
      {
        "id": "u4",
        "title": "Sustentabilidade e inclusão",
        "summary": "Consumo de recursos computacionais, acessibilidade e impactos sociais da tecnologia.",
        "reflection": "Que barreiras uma interface pode criar para pessoas com deficiência?",
        "practice": "Faça duas propostas para reduzir consumo de recursos e melhorar acessibilidade no site."
      }
    ]
  }
];
