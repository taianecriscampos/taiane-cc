# taiane.cc — regras do projeto

Portfólio de Taiane Cris Campos, Senior Product Designer · Design Engineer.
Frase de apresentação: "Design de produto com pensamento sistêmico, IA e código."

## Quem está falando com você

A Taiane é designer sênior e está aprendendo o Claude Code. Explique cada passo em português
do Brasil, em linguagem simples, sem jargão sem explicação. Ela usa leitura em voz alta:
evite tabelas longas e símbolos desnecessários nas respostas.

## Como trabalhar

1. Sempre mostre o plano antes de criar ou alterar arquivos.
2. Nunca altere a ramificação main diretamente. Trabalhe em `design` ou numa ramificação de tarefa.
3. Antes de dizer que terminou, rode `npm run check` e mostre o resultado.
4. Ao final de cada tarefa, diga: etapa, fase, versão e status (veja docs/status.md) e atualize esse arquivo.
5. Commits no padrão Conventional Commits, em português: `feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`.
6. Lean UX: entregue o menor incremento que dá pra revisar. Nada de funcionalidade fora do escopo de docs/status.md.

## Arquitetura (detalhes em docs/decisoes/)

- Astro, site estático, TypeScript em modo strict.
- Sem framework de CSS. CSS puro com camadas (@layer) e variáveis.
- Conteúdo em Markdown/MDX com Content Collections e schema Zod: o conteúdo é validado na compilação.
- Componentes `.astro` pequenos, um por arquivo, em `src/components/`, agrupados por camada:
  `ui/` (átomos), `blocos/` (seções), `layout/`.
- JavaScript só onde há interação (ilhas). Movimento em `src/scripts/movimento/`.
- Sem back-end na versão 1 (ver ADR 0001). Contato por e-mail e LinkedIn.
- Segurança enxuta (docs/decisoes/0003-seguranca.md): cabeçalhos em `vercel.json` (CSP, HSTS, nosniff,
  Referrer-Policy, Permissions-Policy), nenhum script de terceiros, nenhum segredo no repositório,
  `npm audit` na qualidade, sem dados pessoais sensíveis publicados.

## Design system

- Tokens em `src/styles/tokens.css`, em três camadas: primitivos → semânticos → componentes.
- Componentes usam SOMENTE tokens semânticos ou de componente. Nunca cor, tamanho ou espaçamento solto.
- Base visual: docs/especificacao-base-debora.md (medidas, grade, hierarquia e comportamento da
  debora.wiki, com conteúdo, selo e textos próprios). Ela substitui os briefings v1 e v2.
  Nada de copiar arquivos, textos, imagens ou o selo da debora.wiki.
- Paleta: fundo #fafafa, texto #1a2025, cinza secundário, borda clara, vermelho de marca só no
  selo e azul de destaque só nos cases.
- Tipografia: Schibsted Grotesk, pesos 400, 500 e 700. Mono do sistema só nos marcadores de rascunho.
- A página `/laboratorio` mostra todos os tokens e componentes, com `noindex`.
- Demais referências em docs/referencias.md. Cada mudança da Taiane sobre a base vai passo a passo.

## Qualidade obrigatória

- Acessibilidade WCAG 2.2 AA: contraste, foco visível, navegação por teclado, textos alternativos,
  link "Pular para o conteúdo", `prefers-reduced-motion` respeitado em todo movimento.
- Movimento: só `transform` e `opacity`. Desligar efeitos de cursor em telas de toque.
- Performance: Lighthouse 95+ em todas as categorias. Imagens via `astro:assets`, fontes locais com preload.
- Encontrabilidade (SEO, AEO, GEO, SXO, AIO), ver docs/decisoes/0002-encontrabilidade.md:
  título e descrição por página, Open Graph, canonical, sitemap; JSON-LD ProfilePage + Person
  (jobTitle, knowsAbout, sameAs) e Article por case; HTML semântico; cada página e case abre com
  um resumo que responde "quem, o quê, resultado" em até 3 frases; /llms.txt; robots.txt liberando
  buscadores e assistentes de IA; nome e cargo idênticos em todos os perfis.

## Proibido (para não parecer gerado por IA)

Cartões com borda e sombra genéricos, gradientes roxos, emojis na interface, ícones de banco,
textos de preenchimento, efeitos que não estejam no escopo.

## Skills do projeto

- /revisao-visual — prints em 375, 768 e 1440 e checklist visual.
- /novo-case — cria um case na estrutura padrão.
- movimento — ativa sozinha ao pedir animação (GSAP + Lenis).
- /auditoria — acessibilidade, performance, SEO e links.
- /versionar — SemVer, CHANGELOG e etiqueta no Git.

Use também a skill frontend-design (plugin oficial) para toda decisão visual.

Skills de Emil Kowalski (emilkowalski/skills), critério de qualidade de interface e movimento:

- emil-design-eng — critérios gerais de design engineering. Use em revisões visuais e de movimento.
- prototype — alternativas de um mesmo elemento, isoladas, no Laboratório. Etapa 0.3.0.
- animation-vocabulary — traduz o pedido da Taiane para termos precisos de animação.
- review-animations e animation-performance — revisão e desempenho do movimento. Etapa 0.5.0.
- mobile-native — hover preso no toque, 100vh, zoom em campos, áreas seguras. Etapas 0.5.0 e 0.9.0.
- break-ui — testes com dados extremos. Etapas 0.4.0 e 0.9.0.

Precedência: em conflito, valem este CLAUDE.md, os ADRs e as skills do projeto (a stack é Astro + CSS + GSAP + Lenis).
As skills do Emil orientam o critério, não trocam a stack nem adicionam bibliotecas sem aprovação.
Os exemplos delas em React e Framer Motion devem ser traduzidos para Astro, CSS e GSAP.
/prototype e /review-animations só rodam quando chamadas pelo nome.
As skills ficam em .claude/skills; .agents/skills e skills-lock.json registram a origem.
Ao atualizar uma skill do Emil, copie de novo de .agents/skills para .claude/skills.
