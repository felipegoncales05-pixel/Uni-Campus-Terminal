import type { Question } from '../types';

// Questões autorais, uma única alternativa correta, com explicação pedagógica.
export const questions: Question[] = [
  {
    "id": "logica-1",
    "trackId": "logica",
    "prompt": "O que melhor define um algoritmo?",
    "options": [
      "Um desenho sem instruções",
      "Uma sequência finita de passos para resolver um problema",
      "Qualquer arquivo de computador",
      "Somente um programa em C++"
    ],
    "answer": 1,
    "explanation": "Um algoritmo descreve passos ordenados para produzir um resultado, independentemente da linguagem usada."
  },
  {
    "id": "logica-2",
    "trackId": "logica",
    "prompt": "Qual tipo de dado é mais apropriado para representar uma condição de aprovação?",
    "options": [
      "Booleano",
      "String extensa",
      "Imagem",
      "Arquivo binário"
    ],
    "answer": 0,
    "explanation": "Uma condição possui valores lógicos verdadeiro ou falso, representáveis por um booleano."
  },
  {
    "id": "logica-3",
    "trackId": "logica",
    "prompt": "Quando uma seleção de dois caminhos é necessária, qual estrutura usar?",
    "options": [
      "Vetor",
      "if/else",
      "for infinito",
      "Comentário"
    ],
    "answer": 1,
    "explanation": "if/else executa um dos dois blocos conforme o resultado da expressão lógica."
  },
  {
    "id": "logica-4",
    "trackId": "logica",
    "prompt": "Qual laço é naturalmente adequado quando se conhece previamente a quantidade de repetições?",
    "options": [
      "for",
      "if",
      "switch",
      "return"
    ],
    "answer": 0,
    "explanation": "for é frequentemente usado com contador definido; while também pode repetir, mas for expressa bem a contagem."
  },
  {
    "id": "logica-5",
    "trackId": "logica",
    "prompt": "Em um vetor com três elementos indexado a partir de zero, qual é o último índice válido?",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "explanation": "Os índices são 0, 1 e 2; acessar 3 ultrapassa os limites."
  },
  {
    "id": "c-1",
    "trackId": "c",
    "prompt": "Qual função padrão escreve texto no terminal em C?",
    "options": [
      "scanf",
      "printf",
      "malloc",
      "free"
    ],
    "answer": 1,
    "explanation": "printf, declarada em stdio.h, produz saída formatada."
  },
  {
    "id": "c-2",
    "trackId": "c",
    "prompt": "O que o operador == faz em C?",
    "options": [
      "Atribui um valor",
      "Compara igualdade",
      "Reserva memória",
      "Cria um comentário"
    ],
    "answer": 1,
    "explanation": "== verifica igualdade; = realiza atribuição."
  },
  {
    "id": "c-3",
    "trackId": "c",
    "prompt": "Qual índice acessa o primeiro elemento de int valores[5]?",
    "options": [
      "1",
      "5",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "Vetores em C começam no índice zero."
  },
  {
    "id": "c-4",
    "trackId": "c",
    "prompt": "Qual afirmação sobre funções em C é verdadeira?",
    "options": [
      "Toda função precisa retornar int",
      "Funções podem receber parâmetros e devolver valores",
      "Funções não podem chamar outras funções",
      "Funções não têm escopo"
    ],
    "answer": 1,
    "explanation": "Funções podem receber argumentos, conter variáveis locais e retornar valores conforme seu tipo."
  },
  {
    "id": "c-5",
    "trackId": "c",
    "prompt": "Após alocar memória dinamicamente com malloc, qual operação libera o bloco?",
    "options": [
      "printf",
      "sizeof",
      "free",
      "scanf"
    ],
    "answer": 2,
    "explanation": "free libera a memória dinâmica. O ponteiro deixa de poder ser usado para acessar esse bloco após a liberação."
  },
  {
    "id": "cpp-1",
    "trackId": "cpp",
    "prompt": "Qual stream padrão normalmente exibe texto em C++?",
    "options": [
      "std::cin",
      "std::cout",
      "std::vector",
      "std::string"
    ],
    "answer": 1,
    "explanation": "std::cout representa a saída padrão, enquanto std::cin representa a entrada padrão."
  },
  {
    "id": "cpp-2",
    "trackId": "cpp",
    "prompt": "O que std::string oferece em comparação ao array char usado como string C?",
    "options": [
      "Não permite texto",
      "Gerenciamento de texto com operações convenientes",
      "Sempre ocupa um byte",
      "Dispensa compilação"
    ],
    "answer": 1,
    "explanation": "std::string gerencia o armazenamento e oferece operações úteis para texto."
  },
  {
    "id": "cpp-3",
    "trackId": "cpp",
    "prompt": "Por que passar uma referência const em uma função?",
    "options": [
      "Para garantir alteração do objeto",
      "Para evitar cópia desnecessária e impedir modificação por essa referência",
      "Para desabilitar funções",
      "Para converter toda variável em ponteiro nulo"
    ],
    "answer": 1,
    "explanation": "const T& permite observar um objeto sem copiá-lo e sem modificá-lo por aquela referência."
  },
  {
    "id": "cpp-4",
    "trackId": "cpp",
    "prompt": "Qual princípio agrupa dados e métodos e controla o acesso interno?",
    "options": [
      "Encapsulamento",
      "Repetição",
      "Pré-processamento",
      "Ordenação"
    ],
    "answer": 0,
    "explanation": "Encapsulamento organiza estado e comportamento e restringe alterações indevidas."
  },
  {
    "id": "cpp-5",
    "trackId": "cpp",
    "prompt": "O que fazer quando um código compila, mas imprime um resultado errado?",
    "options": [
      "Concluir que está correto",
      "Verificar lógica e criar casos de teste",
      "Trocar a extensão para .txt",
      "Ignorar o problema"
    ],
    "answer": 1,
    "explanation": "A compilação não garante correção lógica; testes e depuração investigam resultados."
  },
  {
    "id": "banco-1",
    "trackId": "banco",
    "prompt": "Qual é a função principal de um SGBD?",
    "options": [
      "Desenhar páginas HTML",
      "Gerenciar armazenamento e acesso aos dados",
      "Compilar C++",
      "Exibir somente imagens"
    ],
    "answer": 1,
    "explanation": "O Sistema Gerenciador de Bancos de Dados controla operações de organização, consulta e persistência."
  },
  {
    "id": "banco-2",
    "trackId": "banco",
    "prompt": "Um relacionamento entre um curso e muitos alunos é geralmente de que cardinalidade?",
    "options": [
      "N:N",
      "1:1",
      "1:N",
      "0:0"
    ],
    "answer": 2,
    "explanation": "Se cada aluno pertence a um curso e cada curso possui vários alunos, o relacionamento é 1:N."
  },
  {
    "id": "banco-3",
    "trackId": "banco",
    "prompt": "O que uma chave primária deve fazer?",
    "options": [
      "Armazenar apenas imagens",
      "Identificar unicamente uma linha",
      "Garantir que toda coluna seja texto",
      "Apagar registros duplicados automaticamente"
    ],
    "answer": 1,
    "explanation": "A chave primária identifica cada registro de forma única, sem valores nulos."
  },
  {
    "id": "banco-4",
    "trackId": "banco",
    "prompt": "Qual cláusula filtra linhas em uma consulta SQL antes da agregação?",
    "options": [
      "WHERE",
      "ORDER BY",
      "HAVING",
      "GROUP BY"
    ],
    "answer": 0,
    "explanation": "WHERE filtra linhas individuais; HAVING filtra grupos resultantes da agregação."
  },
  {
    "id": "banco-5",
    "trackId": "banco",
    "prompt": "Para combinar dados de duas tabelas usando chaves relacionadas, usa-se:",
    "options": [
      "JOIN",
      "COUNT isolado",
      "DROP",
      "CAST apenas"
    ],
    "answer": 0,
    "explanation": "JOIN relaciona registros de tabelas por uma condição de junção."
  },
  {
    "id": "html-1",
    "trackId": "html",
    "prompt": "Qual tecnologia descreve a estrutura semântica de uma página web?",
    "options": [
      "CSS",
      "HTML",
      "SQL",
      "C++"
    ],
    "answer": 1,
    "explanation": "HTML marca títulos, textos, regiões, links e formulários."
  },
  {
    "id": "html-2",
    "trackId": "html",
    "prompt": "Em qual região ficam metadados como o título da aba?",
    "options": [
      "body",
      "footer",
      "head",
      "main"
    ],
    "answer": 2,
    "explanation": "O elemento head contém título, metadados e referências a recursos."
  },
  {
    "id": "html-3",
    "trackId": "html",
    "prompt": "Qual elemento identifica o conteúdo principal de um documento?",
    "options": [
      "main",
      "strong",
      "div exclusivamente",
      "small"
    ],
    "answer": 0,
    "explanation": "main representa o conteúdo predominante da página."
  },
  {
    "id": "html-4",
    "trackId": "html",
    "prompt": "Qual associação melhora a acessibilidade de um input?",
    "options": [
      "label com for apontando para o id do campo",
      "div sem texto",
      "script vazio",
      "Somente uma cor de fundo"
    ],
    "answer": 0,
    "explanation": "label associa um texto identificador ao controle, melhorando a interação e acessibilidade."
  },
  {
    "id": "html-5",
    "trackId": "html",
    "prompt": "Por que a validação HTML com required não substitui a do servidor?",
    "options": [
      "Porque required só funciona em imagens",
      "Porque validação no navegador pode ser contornada",
      "Porque servidores não recebem formulários",
      "Porque impede HTTPS"
    ],
    "answer": 1,
    "explanation": "A entrada enviada ao servidor deve ser validada novamente, independentemente da validação do navegador."
  },
  {
    "id": "css-1",
    "trackId": "css",
    "prompt": "Qual seletor representa uma classe CSS?",
    "options": [
      "#card",
      ".card",
      "@card",
      "&card apenas"
    ],
    "answer": 1,
    "explanation": "O ponto indica seletor de classe; # indica id."
  },
  {
    "id": "css-2",
    "trackId": "css",
    "prompt": "Qual declaração ajuda a incluir borda e padding na largura declarada?",
    "options": [
      "display:none",
      "box-sizing:border-box",
      "float:left",
      "white-space:nowrap"
    ],
    "answer": 1,
    "explanation": "border-box faz com que width/height incluam padding e borda."
  },
  {
    "id": "css-3",
    "trackId": "css",
    "prompt": "Qual sistema é especialmente apropriado para layouts de linhas e colunas?",
    "options": [
      "CSS Grid",
      "Somente cor hexadecimal",
      "Um arquivo .sql",
      "HTML sem CSS"
    ],
    "answer": 0,
    "explanation": "Grid fornece ferramentas bidimensionais para linhas, colunas e áreas."
  },
  {
    "id": "css-4",
    "trackId": "css",
    "prompt": "Qual recurso altera estilos conforme a largura da tela?",
    "options": [
      "Media query",
      "Tag table obrigatória",
      "Console.log",
      "SELECT"
    ],
    "answer": 0,
    "explanation": "@media permite aplicar estilos condicionais, inclusive por largura da viewport."
  },
  {
    "id": "css-5",
    "trackId": "css",
    "prompt": "Na Gestalt, elementos próximos tendem a ser percebidos como:",
    "options": [
      "Elementos obrigatoriamente iguais",
      "Um grupo",
      "Imagens invisíveis",
      "Erros de código"
    ],
    "answer": 1,
    "explanation": "A lei da proximidade descreve o agrupamento perceptivo de elementos próximos."
  },
  {
    "id": "js-1",
    "trackId": "js",
    "prompt": "Qual declaração impede reatribuir a variável em JavaScript?",
    "options": [
      "var",
      "const",
      "function",
      "while"
    ],
    "answer": 1,
    "explanation": "const impede atribuir um novo valor ao vínculo, embora objetos ainda possam ter propriedades mutáveis."
  },
  {
    "id": "js-2",
    "trackId": "js",
    "prompt": "Qual operador compara valores sem coerção de tipo?",
    "options": [
      "=",
      "==",
      "===",
      "=>"
    ],
    "answer": 2,
    "explanation": "=== é o operador de igualdade estrita."
  },
  {
    "id": "js-3",
    "trackId": "js",
    "prompt": "O que é o DOM?",
    "options": [
      "Um tipo de banco SQL",
      "Uma representação em árvore dos elementos de um documento",
      "Um compilador C",
      "Um formato de imagem"
    ],
    "answer": 1,
    "explanation": "O Document Object Model permite que scripts encontrem e alterem elementos da página."
  },
  {
    "id": "js-4",
    "trackId": "js",
    "prompt": "Como ouvir um clique em um botão?",
    "options": [
      "addEventListener('click', ...)",
      "JSON.parse('click')",
      "SELECT click",
      "git push click"
    ],
    "answer": 0,
    "explanation": "addEventListener registra uma função que responde ao evento de clique."
  },
  {
    "id": "js-5",
    "trackId": "js",
    "prompt": "Qual função converte uma resposta HTTP em JSON no fluxo de fetch?",
    "options": [
      "response.json()",
      "JSON.print()",
      "response.css()",
      "fetch.html()"
    ],
    "answer": 0,
    "explanation": "response.json() lê o corpo da resposta e analisa seu conteúdo JSON."
  },
  {
    "id": "git-1",
    "trackId": "git",
    "prompt": "O que registra uma alteração no histórico Git?",
    "options": [
      "Commit",
      "CSS",
      "Pixel",
      "HTTP"
    ],
    "answer": 0,
    "explanation": "Um commit representa um estado versionado com mensagem e metadados."
  },
  {
    "id": "git-2",
    "trackId": "git",
    "prompt": "Qual comando mostra arquivos alterados no repositório local?",
    "options": [
      "git status",
      "git delete-all",
      "git browser",
      "git html"
    ],
    "answer": 0,
    "explanation": "git status informa o estado da área de trabalho e staging."
  },
  {
    "id": "git-3",
    "trackId": "git",
    "prompt": "Qual é o propósito de uma branch?",
    "options": [
      "Trocar automaticamente de linguagem",
      "Trabalhar numa linha de desenvolvimento separada",
      "Substituir um backup de banco",
      "Executar C++ online"
    ],
    "answer": 1,
    "explanation": "Uma branch aponta para uma linha de commits, útil para isolar mudanças."
  },
  {
    "id": "git-4",
    "trackId": "git",
    "prompt": "Para que serve um pull request?",
    "options": [
      "Revisar e propor a integração de mudanças",
      "Aumentar a memória RAM",
      "Executar SQL no navegador",
      "Alterar fontes do sistema"
    ],
    "answer": 0,
    "explanation": "Pull requests permitem discutir, testar e revisar mudanças antes do merge."
  },
  {
    "id": "git-5",
    "trackId": "git",
    "prompt": "O que o GitHub Pages hospeda diretamente?",
    "options": [
      "Aplicações C++ compiladas no servidor",
      "Sites estáticos",
      "Instâncias de banco de dados SQL",
      "Containers Docker persistentes"
    ],
    "answer": 1,
    "explanation": "GitHub Pages entrega arquivos estáticos; execução C++ requer outro ambiente."
  },
  {
    "id": "python-1",
    "trackId": "python",
    "prompt": "Por que a indentação é importante em Python?",
    "options": [
      "Define os blocos de código",
      "Só altera a cor do editor",
      "Cria arquivos automaticamente",
      "Substitui todas as variáveis"
    ],
    "answer": 0,
    "explanation": "A indentação é parte da sintaxe de blocos em Python."
  },
  {
    "id": "python-2",
    "trackId": "python",
    "prompt": "O que input() retorna por padrão?",
    "options": [
      "int",
      "float",
      "str",
      "bool"
    ],
    "answer": 2,
    "explanation": "input() devolve texto; converta para número se necessário."
  },
  {
    "id": "python-3",
    "trackId": "python",
    "prompt": "Qual estrutura associa chaves a valores?",
    "options": [
      "Lista apenas",
      "Dicionário",
      "Conjunto vazio sempre",
      "Tupla sem elementos"
    ],
    "answer": 1,
    "explanation": "dict armazena pares de chave e valor."
  },
  {
    "id": "python-4",
    "trackId": "python",
    "prompt": "Qual comando define uma função?",
    "options": [
      "def",
      "func",
      "method only",
      "function new"
    ],
    "answer": 0,
    "explanation": "def inicia a declaração de função em Python."
  },
  {
    "id": "python-5",
    "trackId": "python",
    "prompt": "Qual biblioteca é amplamente usada para DataFrames?",
    "options": [
      "Pandas",
      "Tkinter obrigatória",
      "socket apenas",
      "random exclusivamente"
    ],
    "answer": 0,
    "explanation": "Pandas oferece DataFrame e operações para análise tabular."
  },
  {
    "id": "engenharia-1",
    "trackId": "engenharia",
    "prompt": "Qual é um exemplo de requisito funcional?",
    "options": [
      "O sistema deve permitir responder questões",
      "O sistema deve ser elegante",
      "O site deve parecer moderno",
      "O código deve ser bonito"
    ],
    "answer": 0,
    "explanation": "Requisitos funcionais especificam comportamentos esperados."
  },
  {
    "id": "engenharia-2",
    "trackId": "engenharia",
    "prompt": "Qual benefício da separação em camadas?",
    "options": [
      "Aumentar acoplamento",
      "Separar responsabilidades e facilitar manutenção",
      "Eliminar testes",
      "Impedir reuso"
    ],
    "answer": 1,
    "explanation": "Camadas isolam partes como interface, regras e acesso a dados."
  },
  {
    "id": "engenharia-3",
    "trackId": "engenharia",
    "prompt": "O que é um objeto em POO?",
    "options": [
      "Uma instância de classe",
      "Somente uma imagem",
      "Uma tabela SQL sempre",
      "Um arquivo .json exclusivamente"
    ],
    "answer": 0,
    "explanation": "Objetos instanciam estruturas de dados e comportamentos definidos por classes."
  },
  {
    "id": "engenharia-4",
    "trackId": "engenharia",
    "prompt": "Qual teste verifica uma unidade pequena de código?",
    "options": [
      "Teste unitário",
      "Teste de marketing",
      "Teste de cor",
      "Teste de hospedagem física exclusivamente"
    ],
    "answer": 0,
    "explanation": "Teste unitário se concentra numa função ou componente isolado."
  },
  {
    "id": "engenharia-5",
    "trackId": "engenharia",
    "prompt": "Qual prática ajuda a entregar funcionalidades gradualmente?",
    "options": [
      "Desenvolvimento iterativo",
      "Alterar tudo sem commits",
      "Evitar feedback",
      "Eliminar backlog"
    ],
    "answer": 0,
    "explanation": "Ciclos iterativos permitem pequenas entregas avaliáveis."
  },
  {
    "id": "dados-1",
    "trackId": "dados",
    "prompt": "O que é uma amostra em estatística?",
    "options": [
      "Toda a população obrigatoriamente",
      "Um subconjunto observado de uma população",
      "Sempre uma tabela SQL",
      "Um único gráfico"
    ],
    "answer": 1,
    "explanation": "Amostra é parte da população utilizada para observação e inferência."
  },
  {
    "id": "dados-2",
    "trackId": "dados",
    "prompt": "Qual medida é o valor central dos dados ordenados?",
    "options": [
      "Moda",
      "Mediana",
      "Amplitude",
      "Variância"
    ],
    "answer": 1,
    "explanation": "A mediana separa uma distribuição ordenada em duas metades."
  },
  {
    "id": "dados-3",
    "trackId": "dados",
    "prompt": "Qual ferramenta do Power BI usa linguagem M para transformar dados?",
    "options": [
      "Power Query",
      "Monaco Editor",
      "GitHub Issues",
      "DOM"
    ],
    "answer": 0,
    "explanation": "O Power Query utiliza M para consultas e etapas de transformação."
  },
  {
    "id": "dados-4",
    "trackId": "dados",
    "prompt": "Em um esquema estrela, qual tabela concentra medidas e eventos?",
    "options": [
      "Tabela fato",
      "Tabela de ícones",
      "Tabela CSS",
      "Tabela de fontes"
    ],
    "answer": 0,
    "explanation": "A tabela fato registra medidas e ligações às dimensões."
  },
  {
    "id": "dados-5",
    "trackId": "dados",
    "prompt": "Qual função DAX normalmente soma uma coluna?",
    "options": [
      "SUM",
      "SELECT HTML",
      "std::cout",
      "fetch"
    ],
    "answer": 0,
    "explanation": "SUM agrega os valores numéricos de uma coluna no contexto de filtro."
  },
  {
    "id": "ia-1",
    "trackId": "ia",
    "prompt": "Qual tarefa é um exemplo de classificação supervisionada?",
    "options": [
      "Prever se um email é spam",
      "Organizar CSS por cor apenas",
      "Executar um programa C",
      "Editar um README"
    ],
    "answer": 0,
    "explanation": "Classificação prevê uma categoria a partir de exemplos rotulados."
  },
  {
    "id": "ia-2",
    "trackId": "ia",
    "prompt": "Qual é a finalidade de reservar um conjunto de teste?",
    "options": [
      "Treinar o modelo indefinidamente",
      "Estimar desempenho em dados não vistos durante o ajuste",
      "Eliminar a validação",
      "Garantir acerto de 100%"
    ],
    "answer": 1,
    "explanation": "O conjunto de teste estima generalização e deve ficar fora das decisões de treinamento."
  },
  {
    "id": "ia-3",
    "trackId": "ia",
    "prompt": "O que descreve overfitting?",
    "options": [
      "Modelo não recebe dados",
      "Modelo memoriza padrões do treino e generaliza mal",
      "Modelo sempre é perfeito",
      "Modelo não possui parâmetros"
    ],
    "answer": 1,
    "explanation": "Sobreajuste ocorre quando o modelo se adapta excessivamente ao treinamento."
  },
  {
    "id": "ia-4",
    "trackId": "ia",
    "prompt": "Para uma classe rara, qual métrica pode ser importante além da acurácia?",
    "options": [
      "Recall",
      "Tamanho do monitor",
      "Frequência do processador",
      "Cor do gráfico"
    ],
    "answer": 0,
    "explanation": "Recall mede a proporção de positivos reais identificados, importante quando falsos negativos custam caro."
  },
  {
    "id": "ia-5",
    "trackId": "ia",
    "prompt": "Qual cuidado é adequado ao usar IA generativa para programar?",
    "options": [
      "Confiar sem testar",
      "Executar diretamente dados sensíveis",
      "Conferir resultados, fontes e fazer testes",
      "Tratar todo código gerado como seguro"
    ],
    "answer": 2,
    "explanation": "Código e explicações gerados por IA precisam ser revisados e testados, protegendo informações sensíveis."
  }
];
