---
titulo: "Funis interativos"
chamada: "Modelos prontos para criar funis em formato de quiz sem depender do suporte técnico."
resumo: "Na Inlead, reorganizei a criação de funis interativos em formato de quiz, a etapa que mais gerava frustração e chamados ao suporte. Sem mexer no back-end, transformei um benchmarking de 15 funis de alta conversão em modelos estruturais prontos na interface. Resultado: 40% menos ajustes manuais e funis criados em cerca de 45 minutos, contra 1 hora antes."
empresa: "Inlead"
ano: 2025
papel: "Senior Product Designer"
sigilo: "publico"
ordem: 1
resultados:
  - valor: "40%"
    descricao: "menos ajustes manuais na criação de funis"
  - valor: "45 min"
    descricao: "para criar um funil, contra cerca de 1 hora antes"
  - valor: "+5% a +15%"
    descricao: "na conversão final dos funis"
---

<!--
Fonte: https://taianecriscampos.substack.com/p/case-study-benchmarking-de-funil (30/01/2026).
Perguntas em aberto para a Taiane:
1. Método de medição de cada número: quem mediu, como, em que período e com quantos funis ou clientes.
2. O "+20% de rapidez" e o "de ~1h para ~45min" não batem (1h para 45min é 25%). Qual vale?
3. O que foi decisão sua e o que foi do time (o texto usa "optamos" e "a hipótese mais votada").
4. Ano do projeto: 2025 ou 2026? Tamanho e composição da equipe.
5. As imagens do artigo entram na 0.4.0, com texto alternativo.
6. O agradecimento ao Carlos Giachetto continua no site?
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

### Diagnóstico

Usamos os três pilares de produto do Design Thinking (desejável para o usuário, viável para o negócio e factível para a tecnologia), com base no Design Process in Agile Context, de Fares Farhan.

O diagnóstico principal: a funcionalidade de pontuação, responsável pela gamificação, era confusa até para usuários avançados. Configurar a lógica do quiz era o ponto mais sensível da experiência. Ali se definia o sucesso ou o fracasso da conversão.

### Hipótese

A hipótese mais votada foi gamificar a própria configuração da gamificação: tornar a construção mais guiada, mais intuitiva e menos técnica.

### Restrições

- Sem recursos de back-end disponíveis.
- Sem orçamento para uma reestruturação.
- Sem possibilidade de alterar a lógica técnica do sistema.

### Decisão de design

Atuar no front-end, com foco em reduzir a carga cognitiva, padronizar boas práticas, organizar a estrutura dos funis e preparar a interface para a aplicação estratégica da gamificação. A pergunta que guiou o trabalho:

> Como podemos orientar o usuário sem alterar drasticamente o back-end?

### Benchmarking

Analisamos 15 funis de alta conversão, de clientes da startup e de clientes de concorrentes diretos. Mapeamos padrões de layout, fases recorrentes (início, meio e fim), a ordem ideal das etapas, os componentes mais usados, os tipos de pergunta mais frequentes e as estratégias de storytelling. Essa pesquisa foi determinante para identificar padrões replicáveis.

### Arquitetura da informação

No FigJam, organizamos os fluxos em macroestruturas e classificamos as etapas do quiz em três tipos: entrada (ações do usuário), processamento (carregamentos e transições) e saída (retorno e resultado). Também mapeamos a estrutura da landing page depois do quiz, os gatilhos mais usados e os componentes de conversão.

## Solução

Como não era possível alterar a lógica da ferramenta, decidimos:

- criar padrões estruturais replicáveis;
- organizar templates com base nos "funis campeões";
- reduzir decisões desnecessárias;
- preparar a interface para a aplicação estratégica da pontuação.

A principal entrega foi uma barra lateral com etapas prontas. O objetivo: permitir que o usuário foque na estratégia do funil, não na complexidade técnica.

Antes, o usuário precisava decidir espaçamentos, hierarquia tipográfica, organização dos componentes e a estrutura base de cada etapa. Depois, os componentes passaram a carregar estrutura automaticamente, os layouts já respeitam hierarquia e espaçamento, e os elementos críticos ficam protegidos contra alterações acidentais. O layout para celular já nasce responsivo.

## Resultados

<p class="marcador">[MÉTODO DA MEDIÇÃO: TEXTO DA TAIANE]</p>

Mesmo sem alterar a arquitetura de back-end, a solução gerou:

- 40% menos ajustes manuais;
- criação de funis cerca de 20% mais rápida, de aproximadamente 1 hora para 45 minutos por funil;
- de 10% a 25% a mais na taxa de conclusão do funil;
- de 5% a 15% a mais na conversão final;
- variações de funil criadas até 3 vezes mais rápido, com testes A/B de menos risco estrutural.

Segundo a análise do time de CX, houve redução significativa de chamados sobre configuração, melhor entendimento da lógica de pontuação, mais autonomia do usuário e mais alinhamento entre expectativa e entrega. O aumento não veio de mudança de tráfego, mas de organização estrutural.

Essa foi a primeira entrega de um plano maior de melhoria contínua da experiência.

## Aprendizados

Em vez de buscar uma solução ideal tecnicamente inviável, optei por uma solução estrategicamente viável e economicamente inteligente. A decisão de atuar pelo front-end não foi paliativa: atacou o ponto determinante, a carga cognitiva do usuário no momento mais sensível do funil.

Produto não é apenas funcionalidade. Produto é estrutura que direciona comportamento. Ao reduzir complexidade, organizamos intenção; ao organizar intenção, aumentamos conversão.

Agradecimento especial ao Carlos Giachetto, do time de CX.
