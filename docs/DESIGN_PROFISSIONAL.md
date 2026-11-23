# Design Profissional — guia de estudo e simulados autorais

Este módulo complementa a disciplina Design Profissional (turma 2026.2, Prof. Cid R. Andrade) usando os textos e apresentações da pasta **Arquivo_DP** no Google Drive, sem copiar os documentos para o repositório.

Pasta de origem: https://drive.google.com/drive/folders/1QYVfowSWJQoiXn6f7P8CNCJHHbd3ku-Y

## Organização

O curso inclui **4 unidades temáticas, 12 aulas ampliadas, 13 documentos diretamente referenciados, 16 questões de revisão e 2 simulados de 12 perguntas cada** (40 questões adicionais exclusivas desta área). Os tópicos são:

1. **Identidade profissional:** perfis no GitHub e LinkedIn, portfólio documentado, networking, Git, branches e pull requests.
2. **Planejamento de carreira:** mapeamento de áreas, hard skills e soft skills, PDI, metas SMART, certificações e uso crítico de IA.
3. **Ética e direitos digitais:** Código de Ética da ACM, licenças e autoria de código, LGPD, privacidade, vieses de IA e supervisão humana.
4. **Sustentabilidade e impacto social:** TI Verde, PUE de data centers, lixo eletrônico, otimização de software e acessibilidade segundo WCAG.

Cada aula apresenta objetivos, explicações, conceitos-chave, um exemplo comentado, proposta de exercício aberto, anotações pessoais locais e links diretos para os PDFs relevantes. O conteúdo é uma síntese didática original; consulte o arquivo vinculado para conferir detalhes.

## Questionários

- **Revisão por unidade:** quatro questões comentadas em cada unidade. A explicação aparece após escolher a alternativa e a resposta pode ser alterada.
- **Simulado A:** doze perguntas autorais, três por unidade.
- **Simulado B:** doze outras perguntas autorais, três por unidade.

O gabarito dos simulados só aparece após responder todas as doze questões e clicar em **Entregar e ver gabarito**. É possível refazer cada simulado. Não há cronômetro nem lançamento de notas no sistema acadêmico. Progresso, respostas e anotações ficam no **localStorage do dispositivo**, e podem ser perdidos se os dados do navegador forem apagados.

**Esses exercícios não são questões da A1/AF e não reproduzem avaliações do professor.** Não asseguram aprovação nem previsão do conteúdo cobrado. Materiais de trabalho em grupo e orientações de entrega não foram transformados em respostas prontas.

## Proveniência e limitações

A versão foi produzida com base na leitura textual das apostilas e apresentações do Drive, preservando os títulos e agrupamentos das unidades. As perguntas e cenários foram criados para este site, não copiados de provas.

Os documentos têm dados de mercado e projeções de 2025–2026. Esses valores são tratados como contexto das fontes, não como informações atuais verificadas externamente. Para uma decisão real sobre certificação, carreira, legislação ou custos, consulte fontes oficiais atualizadas.

Os arquivos originais do Drive não foram alterados. Acesso aos PDFs depende das permissões existentes. A nova área pode ser aberta no menu lateral **Design Profissional**, no cartão do dashboard ou pelo painel **Tutores UNICID → Design Profissional**.

Implementação: `src/data/designCourse.ts`, `src/data/designQuestions.ts`, `src/components/DesignCourse.tsx`. Testes de quantidade, integridade, links e estrutura são executados por `npm test`.
