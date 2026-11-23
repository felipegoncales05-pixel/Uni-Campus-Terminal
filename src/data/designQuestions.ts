export type DesignQuestion = {
 id:string;unitId:string;phase:'rev'|'A'|'B';prompt:string;options:[string,string,string,string];answer:number;explanation:string;
};
export const designQuestions: DesignQuestion[] = [
  {
    "id": "dp-identidade-1",
    "unitId": "identidade",
    "phase": "rev",
    "prompt": "O que melhor comprova uma competência descrita no perfil profissional?",
    "options": [
      "Uma lista enorme de ferramentas",
      "Um projeto documentado com decisões e resultados",
      "Uma foto com muitas certificações",
      "Uma contagem alta de seguidores"
    ],
    "answer": 1,
    "explanation": "O material diferencia declarar conhecimentos de demonstrar decisões e soluções verificáveis."
  },
  {
    "id": "dp-identidade-2",
    "unitId": "identidade",
    "phase": "rev",
    "prompt": "Qual informação é mais útil no README de um projeto?",
    "options": [
      "Somente badges coloridos",
      "Apenas o nome do repositório",
      "O problema resolvido e como executar",
      "Uma lista de todos os contatos pessoais"
    ],
    "answer": 2,
    "explanation": "README contextualiza finalidade, funcionamento, execução e resultados."
  },
  {
    "id": "dp-identidade-3",
    "unitId": "identidade",
    "phase": "rev",
    "prompt": "Qual comportamento representa networking mais relevante?",
    "options": [
      "Enviar convites genéricos em massa",
      "Comprar seguidores",
      "Comentar de modo técnico e contextualizar contatos",
      "Ignorar contribuições de outras pessoas"
    ],
    "answer": 2,
    "explanation": "Apostilas valorizam troca genuína de conhecimentos e contatos personalizados."
  },
  {
    "id": "dp-identidade-4",
    "unitId": "identidade",
    "phase": "rev",
    "prompt": "Para que serve um pull request no fluxo colaborativo?",
    "options": [
      "Substituir a necessidade de documentação",
      "Propor integração com revisão de mudanças",
      "Apagar todo o histórico",
      "Transformar automaticamente todo código em open source"
    ],
    "answer": 1,
    "explanation": "O pull request permite revisar e discutir alterações antes da integração."
  },
  {
    "id": "dp-identidade-5",
    "unitId": "identidade",
    "phase": "A",
    "prompt": "Em uma apresentação no GitHub, qual opção aproxima portfólio e evidência?",
    "options": [
      "Detalhar problema, decisões e aprendizado",
      "Mostrar somente estrelas",
      "Publicar apenas arquivos compilados",
      "Fixar todos os repositórios disponíveis"
    ],
    "answer": 0,
    "explanation": "A curadoria e o relato técnico oferecem evidências mais fortes que decoração ou volume."
  },
  {
    "id": "dp-identidade-6",
    "unitId": "identidade",
    "phase": "A",
    "prompt": "Qual característica ajuda no posicionamento do LinkedIn?",
    "options": [
      "Título vago sem área",
      "Descrever objetivos e competências coerentes com projetos",
      "Ocultar todas as experiências",
      "Repetir palavras-chave sem exemplos"
    ],
    "answer": 1,
    "explanation": "Coerência entre título, resumo e experiências é enfatizada nas referências."
  },
  {
    "id": "dp-identidade-7",
    "unitId": "identidade",
    "phase": "A",
    "prompt": "Qual ação favorece rastreabilidade em equipe?",
    "options": [
      "Editar a main diretamente sem histórico",
      "Registrar alterações em commits e PRs explicativos",
      "Compartilhar senhas de GitHub",
      "Enviar um ZIP em lugar de usar Git"
    ],
    "answer": 1,
    "explanation": "Commits e PRs registram alterações e facilitam a colaboração."
  },
  {
    "id": "dp-identidade-8",
    "unitId": "identidade",
    "phase": "B",
    "prompt": "Um repositório público sem arquivo de licença pode ser reutilizado livremente?",
    "options": [
      "Sim, a publicidade remove direitos",
      "Sim, se o projeto tiver estrelas",
      "Não se deve presumir autorização de reutilização",
      "Somente se houver README"
    ],
    "answer": 2,
    "explanation": "A publicidade não equivale à permissão legal; verifique a licença antes de copiar."
  },
  {
    "id": "dp-identidade-9",
    "unitId": "identidade",
    "phase": "B",
    "prompt": "O que demonstra uma contribuição útil a uma comunidade técnica?",
    "options": [
      "Comentários contextualizados e construtivos",
      "Mensagens idênticas para todos",
      "Publicar apenas números de seguidores",
      "Evitar feedback de colegas"
    ],
    "answer": 0,
    "explanation": "Networking na disciplina envolve participar das discussões e trocar informação útil."
  },
  {
    "id": "dp-identidade-10",
    "unitId": "identidade",
    "phase": "B",
    "prompt": "Qual sequência representa um fluxo colaborativo adequado?",
    "options": [
      "Alterar main e pedir revisão depois",
      "Criar branch, commitar, abrir PR e revisar",
      "Substituir o histórico por um arquivo novo",
      "Copiar todo o projeto para outra conta sem avisar"
    ],
    "answer": 1,
    "explanation": "O guia de Git recomenda isolamento em branch e revisão antes do merge."
  },
  {
    "id": "dp-carreira-1",
    "unitId": "carreira",
    "phase": "rev",
    "prompt": "O que diferencia hard skill de soft skill?",
    "options": [
      "Hard skill é evidência técnica; soft skill envolve aspectos comportamentais",
      "Hard skill é sempre liderança",
      "Soft skill é só saber uma linguagem",
      "São termos iguais"
    ],
    "answer": 0,
    "explanation": "As apostilas distinguem competências técnicas e comportamentais."
  },
  {
    "id": "dp-carreira-2",
    "unitId": "carreira",
    "phase": "rev",
    "prompt": "Uma meta SMART precisa ser:",
    "options": [
      "Genérica e permanente",
      "Sem medida",
      "Específica, mensurável e com prazo, entre outros critérios",
      "Focada só em salário"
    ],
    "answer": 2,
    "explanation": "A metodologia SMART organiza metas acompanháveis e ligadas ao objetivo."
  },
  {
    "id": "dp-carreira-3",
    "unitId": "carreira",
    "phase": "rev",
    "prompt": "Qual o primeiro passo para escolher uma certificação?",
    "options": [
      "Pagar a mais cara",
      "Verificar a relação com a área e as competências necessárias",
      "Colecionar o maior número de certificados",
      "Seguir somente a popularidade na rede"
    ],
    "answer": 1,
    "explanation": "Os materiais enfatizam alinhamento de conteúdo, custo-benefício e necessidades de carreira."
  },
  {
    "id": "dp-carreira-4",
    "unitId": "carreira",
    "phase": "rev",
    "prompt": "Qual uso responsável de IA no planejamento profissional?",
    "options": [
      "Delegar toda decisão sem revisar",
      "Publicar dados pessoais de colegas",
      "Usar sugestões como apoio e verificar resultados e fontes",
      "Tratar saída de IA como garantia de contratação"
    ],
    "answer": 2,
    "explanation": "IA auxilia análise e automação, mas decisões e verificação continuam humanas."
  },
  {
    "id": "dp-carreira-5",
    "unitId": "carreira",
    "phase": "A",
    "prompt": "Qual exemplo é uma meta mais mensurável?",
    "options": [
      "Estudar alguma coisa",
      "Aprender todas as tecnologias",
      "Documentar dois projetos SQL até o fim do mês",
      "Ser uma pessoa reconhecida"
    ],
    "answer": 2,
    "explanation": "Objetivo específico, evidência e prazo permitem acompanhar execução do PDI."
  },
  {
    "id": "dp-carreira-6",
    "unitId": "carreira",
    "phase": "A",
    "prompt": "Uma vaga exige SQL, comunicação e trabalho em equipe. Isso envolve:",
    "options": [
      "Somente hard skills",
      "Somente soft skills",
      "Competências técnicas e comportamentais",
      "Apenas certificação formal"
    ],
    "answer": 2,
    "explanation": "SQL é competência técnica; comunicação e colaboração são comportamentais."
  },
  {
    "id": "dp-carreira-7",
    "unitId": "carreira",
    "phase": "A",
    "prompt": "Qual a melhor decisão diante de uma certificação com preço elevado?",
    "options": [
      "Comprar sem pesquisar",
      "Comparar programa, pré-requisitos, custo e aplicação",
      "Usar somente um ranking antigo",
      "Abandonar estudos práticos"
    ],
    "answer": 1,
    "explanation": "O guia recomenda avaliar o retorno frente ao tempo, custo e trajetória desejada."
  },
  {
    "id": "dp-carreira-8",
    "unitId": "carreira",
    "phase": "B",
    "prompt": "Qual indicador pode comprovar avanço num PDI?",
    "options": [
      "Quantidade de abas abertas",
      "Projeto concluído e documentado até data prevista",
      "Número de promessas feitas",
      "Quantidade de tendências copiadas"
    ],
    "answer": 1,
    "explanation": "Um indicador útil é verificável e ligado à meta."
  },
  {
    "id": "dp-carreira-9",
    "unitId": "carreira",
    "phase": "B",
    "prompt": "Ao consultar salários e vagas apresentados em slides de 2026, deve-se:",
    "options": [
      "Assumir que nunca mudam",
      "Conferir fontes e situação atual antes de decidir",
      "Publicá-los como garantia de renda",
      "Desconsiderar todas as tendências"
    ],
    "answer": 1,
    "explanation": "Os números contextualizam o período das apostilas; decisões exigem fontes atuais."
  },
  {
    "id": "dp-carreira-10",
    "unitId": "carreira",
    "phase": "B",
    "prompt": "O que fazer quando uma ferramenta de IA sugere um código para portfólio?",
    "options": [
      "Colar diretamente sem testes",
      "Testar, revisar a licença e documentar as escolhas",
      "Ocultar o uso em qualquer circunstância",
      "Enviar tokens pessoais no prompt"
    ],
    "answer": 1,
    "explanation": "A responsabilidade técnica e ética pela entrega é de quem usa a ferramenta."
  },
  {
    "id": "dp-etica-1",
    "unitId": "etica",
    "phase": "rev",
    "prompt": "Qual princípio é associado ao Código de Ética da ACM nas apostilas?",
    "options": [
      "Maximizar interação a qualquer custo",
      "Evitar danos e contribuir ao bem-estar social",
      "Eliminar auditorias",
      "Atribuir decisões éticas inteiramente ao software"
    ],
    "answer": 1,
    "explanation": "O material relaciona bem-estar humano e prevenção de danos à prática profissional."
  },
  {
    "id": "dp-etica-2",
    "unitId": "etica",
    "phase": "rev",
    "prompt": "Uma empresa decide finalidade e meios de tratamento de dados pessoais. Na LGPD, ela é:",
    "options": [
      "Titular",
      "Controladora",
      "Operadora sempre",
      "Encarregada por definição"
    ],
    "answer": 1,
    "explanation": "Controlador é quem toma decisões relativas ao tratamento dos dados pessoais."
  },
  {
    "id": "dp-etica-3",
    "unitId": "etica",
    "phase": "rev",
    "prompt": "Qual cenário representa minimização de dados?",
    "options": [
      "Exigir dados sem função explicada",
      "Coletar somente informações necessárias à finalidade",
      "Manter tudo para sempre",
      "Enviar dados a terceiros sem explicação"
    ],
    "answer": 1,
    "explanation": "Necessidade e finalidade orientam a extensão da coleta."
  },
  {
    "id": "dp-etica-4",
    "unitId": "etica",
    "phase": "rev",
    "prompt": "Por que remover gênero de dados de treinamento pode ser insuficiente para impedir viés?",
    "options": [
      "Porque gênero é sempre obrigatório",
      "Porque variáveis correlacionadas podem atuar como proxies",
      "Porque todo modelo já é imparcial",
      "Porque avaliação por grupo é proibida"
    ],
    "answer": 1,
    "explanation": "Outros sinais podem reproduzir padrões discriminatórios mesmo sem campo explícito."
  },
  {
    "id": "dp-etica-5",
    "unitId": "etica",
    "phase": "A",
    "prompt": "Um repositório público sem licença concede automaticamente direito de redistribuir?",
    "options": [
      "Sim",
      "Não, é preciso verificar autorização e condições",
      "Sim, se o nome do autor constar no README",
      "Sim, porque GitHub é gratuito"
    ],
    "answer": 1,
    "explanation": "A visibilidade pública não dispensa direitos autorais."
  },
  {
    "id": "dp-etica-6",
    "unitId": "etica",
    "phase": "A",
    "prompt": "Qual par descreve corretamente papéis da LGPD?",
    "options": [
      "Titular decide tratamento; controlador é dado armazenado",
      "Controlador define finalidade; operador atua em nome dele",
      "Operador sempre é o titular",
      "Encarregado é qualquer usuário"
    ],
    "answer": 1,
    "explanation": "O guia distingue controlador e operador conforme decisões e operações de tratamento."
  },
  {
    "id": "dp-etica-7",
    "unitId": "etica",
    "phase": "A",
    "prompt": "Qual controle reduz danos em sistemas de triagem automatizada?",
    "options": [
      "Eliminar revisão humana",
      "Auditar erros por subgrupos e permitir contestação",
      "Usar somente acurácia global",
      "Ignorar variáveis proxies"
    ],
    "answer": 1,
    "explanation": "Auditoria e contestação são medidas tratadas na aula de responsabilidade em IA."
  },
  {
    "id": "dp-etica-8",
    "unitId": "etica",
    "phase": "B",
    "prompt": "Qual é uma atitude responsável ao usar bibliotecas de terceiros?",
    "options": [
      "Não ler licenças",
      "Verificar permissões e obrigações de atribuição",
      "Copiar todo código que aparece em buscas",
      "Assumir que a IA verificou autoria"
    ],
    "answer": 1,
    "explanation": "As condições legais de reutilização precisam ser verificadas."
  },
  {
    "id": "dp-etica-9",
    "unitId": "etica",
    "phase": "B",
    "prompt": "Consentimento é:",
    "options": [
      "A única base possível para todo tratamento",
      "Uma base legal possível, dependendo da finalidade e do contexto",
      "Uma autorização para guardar dados indefinidamente",
      "Desnecessário em qualquer situação"
    ],
    "answer": 1,
    "explanation": "A LGPD prevê bases legais diversas; escolha depende do tratamento."
  },
  {
    "id": "dp-etica-10",
    "unitId": "etica",
    "phase": "B",
    "prompt": "Por que supervisão humana precisa ser efetiva?",
    "options": [
      "Para confirmar sempre a máquina",
      "Para permitir revisão real e alteração de decisões quando necessário",
      "Para remover o registro de erros",
      "Para impedir auditoria"
    ],
    "answer": 1,
    "explanation": "Ter autoridade para revisar e contestar decisões é central à supervisão."
  },
  {
    "id": "dp-social-1",
    "unitId": "social",
    "phase": "rev",
    "prompt": "Como se calcula o PUE de um data center?",
    "options": [
      "Energia de TI dividida pela área construída",
      "Energia total da instalação dividida pela energia dos equipamentos de TI",
      "Número de servidores multiplicado por água",
      "Emissões de carbono divididas pelo lucro"
    ],
    "answer": 1,
    "explanation": "PUE é razão de energia total sobre energia entregue aos equipamentos de TI."
  },
  {
    "id": "dp-social-2",
    "unitId": "social",
    "phase": "rev",
    "prompt": "Um PUE menor indica necessariamente emissão de carbono zero?",
    "options": [
      "Sim",
      "Não, depende também de energia e outras condições",
      "Sim, se for abaixo de 2",
      "Sempre significa ausência de água"
    ],
    "answer": 1,
    "explanation": "PUE trata da eficiência elétrica da instalação, não mede sozinho carbono ou água."
  },
  {
    "id": "dp-social-3",
    "unitId": "social",
    "phase": "rev",
    "prompt": "Qual problema é relacionado ao lixo eletrônico no material?",
    "options": [
      "Aumento de reutilização sem consequências",
      "Descarte de equipamentos e perda de materiais recuperáveis",
      "Ausência de fabricação de dispositivos",
      "Inexistência de consumo energético"
    ],
    "answer": 1,
    "explanation": "O relatório discute ciclo de vida, reciclagem e impactos do descarte."
  },
  {
    "id": "dp-social-4",
    "unitId": "social",
    "phase": "rev",
    "prompt": "Quais são os quatro princípios das WCAG apresentados na apostila?",
    "options": [
      "Prático, rápido, barato, lucrativo",
      "Perceptível, operável, compreensível e robusto",
      "Seguro, bonito, original e moderno",
      "Visível, digital, analítico e automático"
    ],
    "answer": 1,
    "explanation": "A WCAG estrutura acessibilidade em perceptibilidade, operabilidade, compreensibilidade e robustez."
  },
  {
    "id": "dp-social-5",
    "unitId": "social",
    "phase": "A",
    "prompt": "Um data center usa 1.200 kWh no total e 800 kWh em TI. Qual PUE?",
    "options": [
      "0,67",
      "1,5",
      "2,5",
      "800"
    ],
    "answer": 1,
    "explanation": "Divida a energia total de 1.200 kWh pelos 800 kWh usados em TI: PUE = 1,5. Não confunda com emissões de carbono."
  },
  {
    "id": "dp-social-6",
    "unitId": "social",
    "phase": "A",
    "prompt": "Qual mudança pode reduzir recursos computacionais sem perder funcionalidade?",
    "options": [
      "Aumentar requisições redundantes",
      "Medir e eliminar polling desnecessário",
      "Desabilitar cache sempre",
      "Executar tudo em loop infinito"
    ],
    "answer": 1,
    "explanation": "O material relaciona carga de CPU/rede desnecessária a consumo adicional."
  },
  {
    "id": "dp-social-7",
    "unitId": "social",
    "phase": "A",
    "prompt": "Qual ação favorece acessibilidade de formulário?",
    "options": [
      "Retirar labels",
      "Associar rótulos e permitir navegação por teclado",
      "Usar apenas ícones sem nome",
      "Bloquear zoom"
    ],
    "answer": 1,
    "explanation": "Rótulos e teclado apoiam pessoas que usam tecnologia assistiva."
  },
  {
    "id": "dp-social-8",
    "unitId": "social",
    "phase": "B",
    "prompt": "Qual fator deve ser considerado junto ao consumo energético?",
    "options": [
      "Somente o nome do servidor",
      "Intensidade de carbono da matriz elétrica",
      "Quantidade de comentários no código",
      "Número de logotipos"
    ],
    "answer": 1,
    "explanation": "A emissão depende também da origem da eletricidade utilizada."
  },
  {
    "id": "dp-social-9",
    "unitId": "social",
    "phase": "B",
    "prompt": "Qual afirmação sobre ferramentas automáticas de acessibilidade é adequada?",
    "options": [
      "Elas substituem totalmente pessoas usuárias",
      "São úteis, mas testes humanos continuam importantes",
      "Elas garantem compreensão de todos",
      "Dispensam testes no teclado"
    ],
    "answer": 1,
    "explanation": "Os materiais defendem avaliação além dos testes automáticos."
  },
  {
    "id": "dp-social-10",
    "unitId": "social",
    "phase": "B",
    "prompt": "O que diferencia conectividade de inclusão digital?",
    "options": [
      "Nada",
      "Acesso à internet não garante que o serviço seja utilizável",
      "Inclusão exige somente velocidade alta",
      "Basta abrir um site para toda pessoa participar"
    ],
    "answer": 1,
    "explanation": "Barreiras de interação podem excluir mesmo pessoas conectadas."
  }
];
