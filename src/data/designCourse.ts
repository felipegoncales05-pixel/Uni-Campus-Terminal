export type DesignSource = {id:string;title:string;url:string};
export type DesignLesson = {
 id:string;title:string;objectives:string[];paragraphs:string[];concepts:string[];
 example:{situation:string;approach:string;why:string};activity:string;sourceIds:string[];
};
export type DesignUnit = {id:string;title:string;eyebrow:string;description:string;lessons:DesignLesson[]};
export const designSources: DesignSource[] = [
  {
    "id": "perfil",
    "title": "Guia de Construção de Perfil Profissional (2025–2026)",
    "url": "https://drive.google.com/file/d/1urxzz1CNEtFhX_H6rLFdpZuNMXbQ6J2V/view"
  },
  {
    "id": "portfolio",
    "title": "Portfólio Digital no GitHub",
    "url": "https://drive.google.com/file/d/1B2lXGo7A_IMfehrrqo5pp7NjVKpD2SHW/view"
  },
  {
    "id": "linkedin",
    "title": "LinkedIn para TI",
    "url": "https://drive.google.com/file/d/1_XDBXc1ls4He6hyFl5u2PlnsqF5ivYtb/view"
  },
  {
    "id": "git",
    "title": "Como Usar Git e GitHub",
    "url": "https://drive.google.com/file/d/1BCJeEQcVYHMxAx8UooIrWLxZZNo1a7-f/view"
  },
  {
    "id": "network",
    "title": "Networking e Comunidades de Tecnologia",
    "url": "https://drive.google.com/file/d/1E-MeJ_-xRwxbdrw0WM9mParG2asYbsDq/view"
  },
  {
    "id": "carreira",
    "title": "Planejamento de Carreira em TI",
    "url": "https://drive.google.com/file/d/1UIvRTg3EDIfNENv0D618cMnbQTCJ3NAj/view"
  },
  {
    "id": "cert",
    "title": "Certificações e Formação Estratégica",
    "url": "https://drive.google.com/file/d/1I-2FkRWAuOVJmTXuQcnE6xTEau5Ce5hW/view"
  },
  {
    "id": "ferramentas",
    "title": "Ferramentas de IA para Desenvolvimento Profissional",
    "url": "https://drive.google.com/file/d/1ldME9LRLaIygdet9SN-8x2bNxOEJ0vvp/view"
  },
  {
    "id": "direitos",
    "title": "Fundamentos Éticos e Direitos Digitais",
    "url": "https://drive.google.com/file/d/1b4tT8-pwf35c3i3zgymMHKPU752fCYSD/view"
  },
  {
    "id": "lgpd",
    "title": "LGPD e Privacidade",
    "url": "https://drive.google.com/file/d/1AzNDHzIN2LaCggb5jsv6yTTiwps_Rl6v/view"
  },
  {
    "id": "ia",
    "title": "Responsabilidade Ética na IA",
    "url": "https://drive.google.com/file/d/18eDDJeAdqbbtofVRRMApuWM50lF39WrL/view"
  },
  {
    "id": "verde",
    "title": "TI Verde",
    "url": "https://drive.google.com/file/d/1Z2GDmOqzMPfUZ0zfg42r8c82xgkMKBaR/view"
  },
  {
    "id": "inclusao",
    "title": "Impacto Social, Inclusão e Acessibilidade",
    "url": "https://drive.google.com/file/d/1Z2RzMuxpJIHV4AkvjUKapovDrO7HebqI/view"
  }
];
export const designUnits: DesignUnit[] = [
  {
    "id": "identidade",
    "title": "Identidade e posicionamento profissional",
    "eyebrow": "UNIDADE 1",
    "description": "Presença profissional, GitHub, LinkedIn, documentação e participação em comunidades.",
    "lessons": [
      {
        "id": "perfil",
        "title": "Sua identidade digital comunica competência",
        "objectives": [
          "Diferenciar habilidades declaradas de evidências verificáveis.",
          "Organizar GitHub, LinkedIn e apresentação pessoal de forma coerente."
        ],
        "paragraphs": [
          "O material de perfil profissional trata a presença digital como uma apresentação técnica contínua. Um perfil que apenas lista ferramentas informa interesses; um perfil que mostra projetos documentados apresenta decisões, dificuldades enfrentadas e resultados observáveis.",
          "No GitHub, selecione projetos relevantes e escreva READMEs que expliquem o problema, as ferramentas utilizadas, o modo de executar e o que você aprendeu. No LinkedIn, alinhe título, resumo, experiências e competências com uma área de atuação específica. A coerência entre os canais facilita compreender seu objetivo profissional.",
          "Evite copiar números de mercado dos slides como se fossem garantias de contratação: eles contextualizam a aula e podem mudar. O ponto didático é demonstrar capacidade prática e comunicação clara."
        ],
        "concepts": [
          "Marca pessoal",
          "Hard skills e soft skills",
          "Curadoria de projetos"
        ],
        "example": {
          "situation": "Uma estudante escreveu 'sei JavaScript, React e SQL' no perfil, mas seus repositórios têm apenas arquivos sem descrição.",
          "approach": "Ela escolhe um projeto web, explica o problema que resolveu, documenta como executar, mostra uma captura de tela e descreve uma decisão técnica tomada.",
          "why": "A evidência observável conecta a competência declarada a um trabalho concreto; não promete contratação."
        },
        "activity": "Escolha um projeto de estudo e esboce um README com problema, solução, instalação, demonstração e aprendizado.",
        "sourceIds": [
          "perfil",
          "portfolio"
        ]
      },
      {
        "id": "linkedin",
        "title": "LinkedIn, comunidade e networking responsável",
        "objectives": [
          "Identificar elementos de um perfil pesquisável.",
          "Praticar networking personalizado em vez de convites automáticos."
        ],
        "paragraphs": [
          "Os materiais de LinkedIn apresentam a plataforma como um ambiente em que recrutadores procuram competências e experiências. Foto, título, resumo, projetos e histórico devem contar uma história consistente, em vez de repetir palavras-chave sem demonstração.",
          "Networking é construção de relações e troca de conhecimentos. O material propõe acompanhar comunidades, escrever comentários relevantes e personalizar convites. Quantidade de contatos, isoladamente, não comprova qualidade das conexões.",
          "Plataformas de escrita técnica, como Dev.to e Medium, podem registrar explicações e aprendizados. Compartilhe somente códigos, dados e imagens que você tenha permissão de publicar."
        ],
        "concepts": [
          "Headline",
          "Networking",
          "Presença digital"
        ],
        "example": {
          "situation": "Um aluno envia 80 convites genéricos pedindo emprego.",
          "approach": "Ele passa a participar de discussões sobre a área escolhida, comenta um projeto de outra pessoa com observação técnica e envia convite contextualizado.",
          "why": "A interação oferece valor e contexto; evita tratar relacionamentos profissionais como números."
        },
        "activity": "Escreva uma mensagem curta de apresentação profissional e um comentário técnico construtivo sobre um projeto fictício.",
        "sourceIds": [
          "linkedin",
          "network"
        ]
      },
      {
        "id": "git",
        "title": "Git, portfólio e colaboração verificável",
        "objectives": [
          "Distinguir repositório, commit, branch e pull request.",
          "Relacionar documentação e histórico de mudanças ao trabalho em equipe."
        ],
        "paragraphs": [
          "O guia de Git e GitHub explica o controle de versão como histórico de mudanças que permite investigar quando e por que o projeto foi alterado. Um commit deve registrar um conjunto coerente de alterações com mensagem informativa; uma branch isola o trabalho antes de integrá-lo.",
          "Pull requests permitem revisar diferenças, discutir implementação e executar verificações. Nos trabalhos de grupo da disciplina, o histórico de contribuições é relevante como evidência, mas um commit por si só não prova que a pessoa compreende o código.",
          "Um bom portfólio combina o repositório executável com informações de uso e um relato de decisões. Badges e animações podem decorar a apresentação, mas não substituem resultados, testes e explicações."
        ],
        "concepts": [
          "Commit",
          "Branch",
          "Pull request",
          "README"
        ],
        "example": {
          "situation": "Três colegas editam o mesmo arquivo diretamente na branch principal, sem revisar alterações.",
          "approach": "Cada pessoa trabalha numa branch temática, abre um pull request, descreve o que fez e recebe revisão antes da integração.",
          "why": "O fluxo torna as decisões rastreáveis e diminui conflitos, embora ainda exija coordenação humana."
        },
        "activity": "Planeje três commits e um pull request para implementar um formulário acessível, com mensagens de commit claras.",
        "sourceIds": [
          "git",
          "portfolio"
        ]
      }
    ]
  },
  {
    "id": "carreira",
    "title": "Planejamento de carreira e formação",
    "eyebrow": "UNIDADE 2",
    "description": "Áreas de TI, competências, PDI, certificações e uso crítico de ferramentas de IA.",
    "lessons": [
      {
        "id": "areas",
        "title": "Escolher um rumo em TI sem confundir áreas",
        "objectives": [
          "Comparar caminhos de carreira e responsabilidades.",
          "Separar competências técnicas de comportamentais."
        ],
        "paragraphs": [
          "O planejamento de carreira começa pelo entendimento das funções em TI. O acervo distingue atividades relacionadas a dados, infraestrutura em nuvem, cibersegurança, redes e gestão. Profissões colaboram em sistemas reais e não são compartimentos fechados.",
          "Hard skills incluem conhecimento demonstrável de linguagens, SQL, redes, testes e outras tecnologias. Soft skills incluem comunicação, colaboração, pensamento crítico e organização. Uma descrição de vaga pode exigir ambas; elas devem ser evidenciadas em situações de trabalho.",
          "Antes de escolher uma certificação, identifique a função pretendida, o que as vagas descrevem e quais habilidades você já consegue demonstrar. Evite tentar aprender todas as tecnologias simultaneamente."
        ],
        "concepts": [
          "Hard skills",
          "Soft skills",
          "Mapeamento de competências"
        ],
        "example": {
          "situation": "Uma pessoa quer trabalhar com engenharia de dados e começa ao mesmo tempo cinco cursos desconectados.",
          "approach": "Ela analisa vagas da área, identifica SQL e pipelines como competências recorrentes e seleciona um projeto de dados para estudar e demonstrar.",
          "why": "A seleção de prioridades conecta estudo a um objetivo verificável, sem presumir que toda vaga exige as mesmas ferramentas."
        },
        "activity": "Escolha uma área de TI e registre três competências técnicas e duas comportamentais a desenvolver.",
        "sourceIds": [
          "carreira",
          "cert"
        ]
      },
      {
        "id": "pdi",
        "title": "Plano de Desenvolvimento Individual (PDI)",
        "objectives": [
          "Transformar desejos profissionais em metas acompanháveis.",
          "Criar evidências e prazos para revisar o aprendizado."
        ],
        "paragraphs": [
          "O PDI organiza uma trajetória de curto, médio e longo prazo. A proposta da disciplina é mapear a situação atual, identificar lacunas em relação ao objetivo e escolher ações viáveis, não apenas declarar ambições.",
          "Metas SMART devem ser específicas, mensuráveis, atingíveis, relevantes e delimitadas no tempo. Uma meta como 'ser melhor em programação' não indica o que fazer; 'criar e documentar duas consultas SQL com JOIN até o fim do mês' permite conferir progresso.",
          "Revisar o PDI é parte do método. Se uma ação não produziu evidências, ajuste o plano conforme recursos e dificuldades observadas, sem confundir mudança de rota com fracasso."
        ],
        "concepts": [
          "PDI",
          "Metas SMART",
          "Análise de lacunas"
        ],
        "example": {
          "situation": "Objetivo inicial: 'Quero entrar na área de cloud'.",
          "approach": "Meta de quatro semanas: concluir um laboratório introdutório, documentar configuração, custos e riscos num repositório e pedir revisão.",
          "why": "O plano tem prazo e evidência de aprendizado; não promete uma vaga."
        },
        "activity": "Escreva uma meta SMART e identifique um indicador de conclusão, prazo e possível obstáculo.",
        "sourceIds": [
          "carreira"
        ]
      },
      {
        "id": "certificacao",
        "title": "Certificações e IA como ferramentas de carreira",
        "objectives": [
          "Avaliar uma certificação antes de investir.",
          "Definir limites da IA para estudo e produção profissional."
        ],
        "paragraphs": [
          "Os materiais sobre certificações apresentam credenciais para diferentes áreas e recomendam considerar reconhecimento no setor, alinhamento ao objetivo, conteúdo, custo, tempo disponível e utilidade prática. Uma certificação isolada não substitui experiência nem portfólio.",
          "As ferramentas de IA são organizadas por tarefas, como texto, código, automação e análise de dados. Selecionar a ferramenta pela necessidade é mais importante do que usar várias ao mesmo tempo. Resultados de modelos exigem conferência de fontes, testes e julgamento humano.",
          "Informações sobre preços, disponibilidade e nomes de exames presentes nos documentos refletem o período de elaboração; verifique os sites oficiais antes de se inscrever. Ao usar IA com dados reais, respeite privacidade, licenças e políticas do ambiente."
        ],
        "concepts": [
          "Certificações",
          "Custo-benefício",
          "Revisão humana de IA"
        ],
        "example": {
          "situation": "Um candidato compra um curso caro após ver um ranking genérico na internet.",
          "approach": "Ele compara programa, pré-requisitos, valores atuais e vagas da área, e escolhe primeiro um laboratório prático para verificar interesse.",
          "why": "A decisão prioriza a necessidade profissional e reduz risco de investimento desalinhado."
        },
        "activity": "Monte uma matriz de decisão para uma certificação: objetivo, requisitos, prova prática, custo e evidência esperada.",
        "sourceIds": [
          "cert",
          "ferramentas"
        ]
      }
    ]
  },
  {
    "id": "etica",
    "title": "Ética, direitos digitais e IA",
    "eyebrow": "UNIDADE 3",
    "description": "Ética profissional, licenças, proteção de dados e decisões automatizadas.",
    "lessons": [
      {
        "id": "licencas",
        "title": "Responsabilidade profissional e licenças",
        "objectives": [
          "Relacionar escolhas de engenharia aos princípios de ética.",
          "Explicar por que acesso público não significa domínio público."
        ],
        "paragraphs": [
          "O Código de Ética da ACM, citado nas apostilas, destaca o bem-estar social, a prevenção de danos e o respeito ao trabalho de outras pessoas. Uma aplicação não pode ser considerada adequada apenas porque funciona: é preciso olhar seus efeitos sobre usuários e comunidades.",
          "Licenças definem condições para usar, modificar e redistribuir obras. Um repositório público no GitHub não elimina os direitos autorais automaticamente. Ao incorporar bibliotecas, confira o arquivo de licença, as obrigações de atribuição e a compatibilidade com seu projeto.",
          "Assistentes de IA aceleram a escrita de código, mas não transferem para a ferramenta a responsabilidade de testar, revisar segurança, conferir origem e cumprir termos de uso."
        ],
        "concepts": [
          "Código de Ética da ACM",
          "Direitos autorais",
          "Licenças de software"
        ],
        "example": {
          "situation": "Um time encontra um projeto público sem arquivo de licença e decide copiá-lo integralmente.",
          "approach": "Antes de reutilizar, verifica autorização aplicável, identifica o titular e procura alternativa com licença compatível.",
          "why": "A disponibilidade de acesso não concede automaticamente direitos de cópia ou redistribuição."
        },
        "activity": "Faça um checklist de cinco verificações antes de incorporar código de terceiros.",
        "sourceIds": [
          "direitos"
        ]
      },
      {
        "id": "privacidade",
        "title": "LGPD: coletar menos, proteger melhor",
        "objectives": [
          "Reconhecer titular, controlador e operador.",
          "Aplicar finalidade, necessidade e segurança em um cadastro."
        ],
        "paragraphs": [
          "O guia de LGPD define dado pessoal como informação associada a pessoa identificada ou identificável. Dados sensíveis têm tratamento específico. A legislação distingue o titular, o controlador que decide sobre o tratamento e o operador que realiza operações em nome do controlador.",
          "Tratamento inclui coletar, armazenar, acessar, compartilhar e excluir informações. Princípios como finalidade, adequação e necessidade orientam quais campos devem existir. Consentimento é uma base legal possível, mas não a única; a base adequada depende da finalidade e do contexto.",
          "Uma aplicação deve prever informação clara ao usuário, controles de acesso, retenção proporcional e resposta a incidentes. Criptografia ajuda, mas não substitui governança ou restrições de acesso."
        ],
        "concepts": [
          "LGPD",
          "Finalidade e necessidade",
          "Titular, controlador e operador"
        ],
        "example": {
          "situation": "Um formulário de inscrição para receber avisos pede nome, CPF, endereço completo e data de nascimento sem justificar esses campos.",
          "approach": "O time identifica a finalidade e solicita somente os dados necessários ao serviço, informando uso e retenção.",
          "why": "Minimização reduz dados expostos e reforça o princípio da necessidade."
        },
        "activity": "Revise um formulário fictício com oito campos e justifique quais manter e quais remover.",
        "sourceIds": [
          "lgpd"
        ]
      },
      {
        "id": "vies",
        "title": "Viés algorítmico, explicabilidade e revisão humana",
        "objectives": [
          "Explicar como vieses históricos podem afetar modelos.",
          "Propor controles para contestar decisões automatizadas."
        ],
        "paragraphs": [
          "O material de responsabilidade ética na IA analisa sistemas de triagem de currículos. Se os dados históricos contiverem desigualdades, o modelo poderá reproduzir essas distorções em escala. Remover atributos explícitos nem sempre elimina o problema, pois variáveis relacionadas podem funcionar como proxies.",
          "Explicabilidade busca tornar decisões compreensíveis; auditorias por subgrupos ajudam a enxergar impactos que a acurácia global não mostra. Revisão humana efetiva deve permitir reavaliar ou alterar decisões, e não apenas confirmar resultados automáticos.",
          "Um sistema responsável combina qualidade de dados, medição de erros por grupos, documentação, contestação e avaliação contínua de riscos. Os casos descritos nos slides ilustram riscos; não trate percentuais de estudos como desempenho universal."
        ],
        "concepts": [
          "Viés algorítmico",
          "Proxies",
          "Explicabilidade",
          "Supervisão humana"
        ],
        "example": {
          "situation": "Uma IA rejeita candidatos de determinadas regiões mesmo após remover o campo 'gênero'.",
          "approach": "A equipe audita outras variáveis correlacionadas, compara taxas de erro por grupos e permite revisão humana das decisões.",
          "why": "Proxies e padrões históricos podem continuar gerando discriminação sem um atributo explícito."
        },
        "activity": "Descreva três controles para reduzir dano em um sistema fictício de seleção automatizada.",
        "sourceIds": [
          "ia"
        ]
      }
    ]
  },
  {
    "id": "social",
    "title": "Sustentabilidade, inclusão e impacto social",
    "eyebrow": "UNIDADE 4",
    "description": "Consumo de recursos, lixo eletrônico, software responsável e acessibilidade.",
    "lessons": [
      {
        "id": "datacenters",
        "title": "Energia, data centers e indicador PUE",
        "objectives": [
          "Descrever custos físicos da infraestrutura digital.",
          "Interpretar o indicador PUE em termos conceituais."
        ],
        "paragraphs": [
          "A apostila de TI Verde destaca que softwares dependem de redes, servidores, armazenamento e refrigeração. Nuvem não elimina consumo elétrico nem impactos da fabricação e descarte de dispositivos.",
          "PUE é a razão entre energia total de uma instalação e a energia usada pelos equipamentos de TI. Valores próximos de 1 indicam menor consumo adicional de infraestrutura. O PUE não mede sozinho emissões de carbono, qualidade do serviço ou uso de água.",
          "Comparar sistemas requer contexto: demanda computacional, matriz elétrica, eficiência do hardware, localização e tempo de uso. Números de mercado e projeções do material devem ser interpretados como estimativas do período."
        ],
        "concepts": [
          "Data center",
          "PUE",
          "Consumo energético"
        ],
        "example": {
          "situation": "Um data center consome 1.500 kWh no total e entrega 1.000 kWh aos equipamentos de TI.",
          "approach": "PUE = 1.500 ÷ 1.000 = 1,5. O excedente representa consumo das demais estruturas, como resfriamento e distribuição elétrica.",
          "why": "A razão ajuda a acompanhar eficiência da instalação, mas não permite inferir diretamente o carbono emitido."
        },
        "activity": "Calcule o PUE de uma instalação com 2.400 kWh totais e 1.600 kWh em equipamentos de TI; explique uma limitação dessa métrica.",
        "sourceIds": [
          "verde"
        ]
      },
      {
        "id": "software-verde",
        "title": "Código eficiente e ciclo de vida do hardware",
        "objectives": [
          "Conectar decisões de software a consumo de recursos.",
          "Reconhecer impactos de descarte e reciclagem de equipamentos."
        ],
        "paragraphs": [
          "Consultas repetidas desnecessariamente, transferências excessivas de dados e processos que trabalham sem necessidade podem aumentar carga em CPU, rede e armazenamento. Melhorar eficiência depende de medir o sistema real, não apenas de remover linhas de código.",
          "O relatório associa software sustentável à energia consumida, à intensidade de carbono da eletricidade e ao ciclo de vida do hardware. Substituições prematuras ampliam resíduos eletrônicos e demanda por novos materiais; manutenção e descarte adequado fazem parte da solução.",
          "Ferramentas como CO2.js são citadas como formas de estimar impactos, não como medidores perfeitos de emissões. Relacione métricas ao serviço prestado e confira hipóteses, fontes e incertezas."
        ],
        "concepts": [
          "Eficiência computacional",
          "Lixo eletrônico",
          "Ciclo de vida"
        ],
        "example": {
          "situation": "Uma página faz uma requisição a cada segundo, mesmo quando nenhuma informação mudou.",
          "approach": "A equipe mede uso real, verifica se eventos ou uma frequência menor atendem à necessidade e compara consumo e experiência antes e depois.",
          "why": "Reduzir processamento e transferências desnecessárias pode economizar recursos sem sacrificar funcionalidade."
        },
        "activity": "Liste duas mudanças técnicas para reduzir consumo de uma aplicação e uma métrica que verificaria cada uma.",
        "sourceIds": [
          "verde"
        ]
      },
      {
        "id": "acessibilidade",
        "title": "Inclusão digital e acessibilidade desde os requisitos",
        "objectives": [
          "Distinguir acesso à internet de capacidade real de uso.",
          "Aplicar princípios básicos de WCAG e testes inclusivos."
        ],
        "paragraphs": [
          "O material de impacto social argumenta que conectividade não garante inclusão. Formulários sem rótulos, imagens informativas sem descrição, baixo contraste e navegação dependente de mouse podem impedir o uso de serviços essenciais.",
          "As WCAG organizam diretrizes em quatro princípios: conteúdo perceptível, operável, compreensível e robusto. Para interfaces web, exemplos incluem rótulos claros nos campos, foco visível, texto alternativo apropriado e funcionamento pelo teclado.",
          "Acessibilidade começa ao definir requisitos e precisa ser testada com diferentes dispositivos e tecnologias assistivas, idealmente com participação das pessoas afetadas. Uma verificação automática é útil, mas não substitui avaliação humana."
        ],
        "concepts": [
          "Inclusão digital",
          "WCAG",
          "Tecnologia assistiva"
        ],
        "example": {
          "situation": "Um botão mostra apenas um ícone sem nome acessível, e o usuário de leitor de tela não sabe sua finalidade.",
          "approach": "A equipe atribui um nome acessível significativo e testa o fluxo completo com teclado e leitor de tela.",
          "why": "O controle passa a comunicar sua ação também a quem não percebe o símbolo visual."
        },
        "activity": "Faça uma auditoria simples no Campus Terminal: navegue sem mouse e registre duas barreiras ou pontos positivos de acessibilidade.",
        "sourceIds": [
          "inclusao"
        ]
      }
    ]
  }
];
