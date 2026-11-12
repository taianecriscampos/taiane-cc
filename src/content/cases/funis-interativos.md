---
titulo: "Funis interativos"
chamada: "Modelos prontos para criar funis em formato de quiz sem depender do suporte técnico."
resumo: "Na Inlead, propus e liderei a reorganização da criação de funis interativos em formato de quiz, a etapa que mais gerava frustração e chamados ao suporte. Sem mexer no back-end, transformei um benchmarking de 15 funis de alta conversão em modelos estruturais prontos na interface. Resultado: 40% menos ajustes manuais e cerca de 25% menos tempo para criar um funil."
empresa: "Inlead"
cliente: "Inlead"
ano: 2025
publicadoEm: 2026-01-30
papel: "Senior Product Designer"
disciplinas:
  - "Product Discovery"
  - "Arquitetura da Informação"
  - "Benchmarking"
  - "Design de Interação"
  - "Alinhamento design-código"
sigilo: "publico"
ordem: 1
cartoes:
  atuacao: "Propus e liderei o projeto do início ao fim, do diagnóstico ao handoff para o front-end."
  desafio: "Montar um funil em formato de quiz exigia lógica condicional e repertório técnico que a maioria dos usuários não tinha."
  solucao: "Uma barra lateral com etapas prontas, baseadas em 15 funis de alta conversão, sem mexer no back-end."
resultados:
  - valor: "40%"
    descricao: "menos ajustes manuais na criação de funis"
  - valor: "~25%"
    descricao: "menos tempo para criar um funil, de 15% a 30% conforme a experiência do usuário"
  - valor: "3x"
    descricao: "mais rápido para criar variações de campanha, com a duplicação de etapas"
# Duração: o artigo não informa, então a ficha não mostra. Cartões adaptados do artigo.
rascunhos: []
capa:
  # Imagem do artigo sem texto escrito por cima (rodada 1e): a barra lateral, a entrega principal.
  src: "../../assets/cases/funis-interativos/sidebar-etapas-prontas.png"
  alt: "A barra lateral com etapas prontas: onze modelos em miniatura, de Página inicial a Fim do funil. Abaixo, o construtor de funis da Inlead aberto num notebook, com a lista de etapas, a barra de modelos e a prévia da etapa no celular."
---

<!--
Fonte do texto: https://taianecriscampos.substack.com/p/case-study-benchmarking-de-funil (30/01/2026).
Fonte dos números: relatório do time de Customer Experience da Inlead, 2026.
Projeto em 2025; resultados percebidos em 2026.
Imagens: do próprio artigo, em src/assets/cases/funis-interativos/ (docs/imagens-case-funis.md).
O diagrama "Design Process in Agile Context", de Fares Farhan, é de terceiros e não entra.
-->

## Contexto

A partir de uma pesquisa de satisfação e da implementação de um onboarding estruturado para novos usuários, identificamos um padrão recorrente de frustração na criação de funis interativos em formato de quiz.

No módulo Construtor da plataforma SaaS, o usuário pode criar funis de três formas: do zero, a partir de templates ou com auxílio de IA (ChatGPT). Como se trata de uma solução inovadora, 100% dos usuários são novos no modelo mental exigido pela ferramenta.

## Problema

Depois de aplicar uma matriz de prioridade, definimos o problema-alvo:

> Existe uma lacuna de aprendizado na criação de funis interativos gamificados.

Apesar das diferentes entradas, todas convergiam para a mesma dificuldade: falta de métricas claras, ausência de orientação estratégica para a gamificação, alto esforço cognitivo e uma curva de aprendizado extensa.

Para montar um quiz, o usuário precisava configurar exibições condicionais, criar rotas baseadas em respostas anteriores e trabalhar com variáveis e valores dinâmicos. Esse nível de complexidade dependia do repertório técnico prévio dele em marketing e programação.

As consequências:

- potencial de conversão subaproveitado;
- dependência excessiva do suporte técnico;
- frustração no momento mais determinante do funil;
- bloqueio criativo na construção da lógica condicional.

A promessa de "alta conversão via quiz" não se concretizava sem orientação estratégica.

## Processo e decisões

A iniciativa foi minha. Liderei e executei o projeto do início ao fim, do diagnóstico ao handoff para o front-end.

### Diagnóstico

Usei os três pilares de produto do Design Thinking (desejável para o usuário, viável para o negócio e factível para a tecnologia), com base no Design Process in Agile Context, de Fares Farhan.

O diagnóstico principal: a funcionalidade de pontuação, responsável pela gamificação, era confusa até para usuários avançados. Configurar a lógica do quiz era o ponto mais sensível da experiência. Ali se definia o sucesso ou o fracasso da conversão.

### Hipótese

A hipótese mais votada foi gamificar a própria configuração da gamificação: tornar a construção mais guiada, mais intuitiva e menos técnica.

### Restrições

- Sem recursos de back-end disponíveis.
- Sem orçamento para uma reestruturação.
- Sem possibilidade de alterar a lógica técnica do sistema.

### Decisão de design

Numa startup com pouca abertura para mudanças estruturais, escolhi atuar só no front-end, sem mexer no back-end, justamente para viabilizar a entrega. O foco foi reduzir a carga cognitiva, padronizar boas práticas, organizar a estrutura dos funis e preparar a interface para a aplicação estratégica da gamificação. A pergunta que guiou o trabalho:

> Como podemos orientar o usuário sem alterar drasticamente o back-end?

### Benchmarking

Analisei 15 funis de alta conversão, de clientes da startup e de clientes de concorrentes diretos. Mapeei padrões de layout, fases recorrentes (início, meio e fim), a ordem ideal das etapas, os componentes mais usados, os tipos de pergunta mais frequentes e as estratégias de storytelling. Essa pesquisa foi determinante para identificar padrões replicáveis.

![Quadro de benchmarking no FigJam com os padrões de etapa encontrados nos funis: Página inicial, Formulário simples, Formulário complexo, Escala de Likert clássica e personalizada, Múltipla escolha, Única escolha, Processamento e Página de venda. Cada padrão mostra o esqueleto de componentes entre o cabeçalho e o rodapé, como texto, mídia, formulário e navegação.](../../assets/cases/funis-interativos/layouts-recorrentes.png)

### Arquitetura da informação

No FigJam, organizei os fluxos em macroestruturas e classifiquei as etapas do quiz em três tipos: entrada (ações do usuário), processamento (carregamentos e transições) e saída (retorno e resultado). Também mapeei a estrutura da landing page depois do quiz, os gatilhos mais usados e os componentes de conversão.

![Mapa no FigJam com as etapas recorrentes do quiz agrupadas por tipo: entrada de informação, entrada simples, entrada complexa, questionários, processamento e saída. Ao lado de cada esqueleto de etapa, capturas de tela das etapas equivalentes nos funis analisados.](../../assets/cases/funis-interativos/etapas-do-quiz.png)

![Estrutura da etapa de conversão, a página de venda depois do quiz, com os blocos timer, antes e depois, cupom, planos, garantia, mockup, premiações, benefícios, chamada para ação, testemunho e prova social. Ao lado, quatro páginas de venda reais usadas como referência, com contagem regressiva, comparação de antes e depois e planos com desconto.](../../assets/cases/funis-interativos/etapa-de-conversao.jpg)

## Solução

Como não era possível alterar a lógica da ferramenta, decidi:

- criar padrões estruturais replicáveis;
- organizar templates com base nos "funis campeões";
- reduzir decisões desnecessárias;
- preparar a interface para a aplicação estratégica da pontuação.

A principal entrega foi uma barra lateral com etapas prontas. O objetivo: permitir que o usuário foque na estratégia do funil, não na complexidade técnica.

![A barra lateral com etapas prontas: onze modelos em miniatura, de Página inicial a Fim do funil, passando por Questão de lista, Escala de Likert, Formulário e Gráficos e métricas. Abaixo, o construtor de funis da Inlead aberto num notebook, com a lista de etapas, a barra de modelos e a prévia da etapa no celular.](../../assets/cases/funis-interativos/sidebar-etapas-prontas.png)

Antes, o usuário precisava decidir espaçamentos, hierarquia tipográfica, organização dos componentes e a estrutura base de cada etapa. Depois, os componentes passaram a carregar estrutura automaticamente, os layouts já respeitam hierarquia e espaçamento, e os elementos críticos ficam protegidos contra alterações acidentais. O layout para celular já nasce responsivo.

## Resultados

Resultados levantados pelo time de Customer Experience da Inlead, com avaliação qualitativa e quantitativa após a entrega, em 2026. Não tive acesso aos dados brutos; os intervalos refletem a diferença entre usuários iniciantes e avançados.

Mesmo sem alterar a arquitetura de back-end, a solução gerou:

- 40% menos ajustes manuais;
- cerca de 25% menos tempo para criar um funil, de 15% a 30% conforme a experiência do usuário: por exemplo, de 1 hora para 45 minutos;
- variações de campanha criadas até 3 vezes mais rápido, com a duplicação de etapas, e testes A/B com menos risco estrutural.

Como estimativa, o time de CX aponta +10% a +25% na conclusão do funil e +5% a +15% na conversão final.

Segundo a análise do CX, houve redução significativa de chamados sobre configuração, melhor entendimento da lógica de pontuação, mais autonomia do usuário e mais alinhamento entre expectativa e entrega. O ganho veio da organização estrutural, não de mudança de tráfego.

Essa foi a primeira entrega de um plano maior de melhoria contínua da experiência.

## Aprendizados

Em vez de buscar uma solução ideal tecnicamente inviável, optei por uma solução estrategicamente viável e economicamente inteligente. A decisão de atuar pelo front-end não foi paliativa: atacou o ponto determinante, a carga cognitiva do usuário no momento mais sensível do funil.

Produto não é apenas funcionalidade. Produto é estrutura que direciona comportamento. Ao reduzir complexidade, organizamos intenção; ao organizar intenção, aumentamos conversão.

Agradecimento especial ao Carlos Giachetto, do time de CX.
