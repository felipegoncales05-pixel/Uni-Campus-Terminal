# Uni Campus Terminal

O Campus Terminal reúne materiais de faculdade, explicações, exemplos e questões comentadas em um só espaço, com um laboratório para aprender C++ no computador e no celular.

O projeto organiza conteúdos acadêmicos de várias disciplinas. Os textos das aulas são resumos didáticos próprios, apoiados em referências disponíveis no Google Drive. Os materiais de origem permanecem no Drive; livros e documentos não são republicados integralmente aqui.

## Trilhas e atividades

São 12 trilhas: Lógica e Algoritmos, C, C++, Banco de Dados e SQL, HTML, CSS/UI/UX, JavaScript, Git e GitHub, Python, Engenharia de Software/POO, Estatística/Dados/Power BI e IA.

Cada trilha começa com cinco aulas, exemplos e referências. Há 60 questões de múltipla escolha no total, cinco por matéria, com gabarito comentado. O progresso das aulas e as respostas ficam salvos no navegador do dispositivo.

O laboratório C++ permite escrever e organizar programas, ver sugestões locais de erros comuns, preparar entradas para o console, exportar arquivos .cpp e exportar/importar projetos JSON. A compilação real é opcional e utiliza um serviço isolado, conforme a documentação técnica.

## Tutores IA UNICID — repertório acadêmico complementar

A área **Tutores UNICID** reúne cinco disciplinas a partir do repertório público do Prof. Cid R. Andrade: Modelagem de Banco de Dados, Desenvolvimento Front-End para Web, Estruturas de Dados II, Paradigmas de Linguagens de Programação e Design Profissional.

O painel oferece 20 módulos de revisão temática, perguntas que estimulam o raciocínio, anotações locais, marcação de revisão, acesso às ementas e aos índices do professor e uma calculadora didática de A1/A2/AF voltada à regra específica dessas disciplinas.

**Importante:** esse painel não é um tutor de IA conversacional. Os tutores reais estão disponíveis no repositório original: https://github.com/cidandrade/tutores-ia-unicid . O conteúdo acadêmico original possui licença CC BY-NC-SA 4.0. Há atribuição, indicação de adaptações e condições de uso em [docs/TUTORES_UNICID.md](docs/TUTORES_UNICID.md). Não há vínculo oficial ou endosso pela UNICID ou pelo professor.

## Design Profissional — aprofundamento por apostila

A disciplina ganhou um **curso de revisão próprio**, acessível pelo menu lateral, pelo dashboard ou por Tutores UNICID → Design Profissional. O conteúdo foi organizado a partir dos PDFs do Drive da turma de 2026.2, em quatro unidades (identidade profissional; planejamento de carreira; ética e direitos digitais; sustentabilidade e impacto social), com **12 aulas ampliadas, 16 questões de revisão e dois simulados autorais de 12 questões**. Exemplos comentados, tarefas abertas, anotações e links para os documentos originais acompanham cada aula.

Os 40 exercícios novos são separados das 60 questões gerais. Os simulados não reproduzem a A1 ou a AF, e seus resultados são apenas para estudo. Veja os detalhes e fontes em [docs/DESIGN_PROFISSIONAL.md](docs/DESIGN_PROFISSIONAL.md).

## Rodando localmente

Tenha Node.js 22 instalado. Clone o repositório, execute npm install e depois npm run dev. Abra o endereço informado pelo Vite.

Para validar a quantidade de conteúdo: npm test. Para produzir os arquivos de publicação: npm run build.

Para habilitar compilação C++ remota, configure a variável VITE_COMPILER_API_URL apontando para o Worker descrito em docs/COMPILADOR.md. Sem ela, o editor continua funcionando, mas a execução real fica indisponível — o site avisa isso claramente, sem fingir resultados.

## GitHub Pages

O workflow .github/workflows/pages.yml prepara e publica o site ao receber alterações na branch main.

Em Settings → Pages → Build and deployment, selecione GitHub Actions. Se usar o compilador remoto, crie a variável de Actions VITE_COMPILER_API_URL em Settings → Secrets and variables → Actions → Variables e faça uma nova publicação.

## Pastas principais

- src/data/tracks.ts — disciplinas, aulas e fontes;
- src/data/questions.ts — banco de questões;
- src/components/CodeLab.tsx — laboratório C++;
- src/App.tsx — navegação, biblioteca, progresso e simulados;
- src/styles.css — interface e responsividade;
- worker/ — integração com Judge0;
- scripts/validate-content.mjs — verificação de conteúdo;
- docs/ — instruções técnicas e estado da versão.

A trilha C++ é um complemento educacional criado para este projeto. As referências originais continuam vinculadas ao Drive e sujeitas às respectivas permissões.
