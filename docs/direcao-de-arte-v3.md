# Direção de arte v3 — passos da Taiane, 11/11/2026

Parte da base fiel à debora.wiki (docs/especificacao-base-debora.md) e aplica as mudanças abaixo.
Executar em duas rodadas. Cada rodada termina com prints em 375, 768 e 1440 e revisão da Taiane.

Skills obrigatórias (chamar pelo nome e dizer, antes de codar, quais regras de cada uma se aplicam):

- frontend-design e /emil-design-eng: critério visual e de acabamento em toda a rodada.
- animation-vocabulary: para nomear corretamente cada efeito pedido antes de implementar.
- /prototype: sempre que houver dúvida real entre duas soluções (ex.: lista de projetos em bento).
- break-ui: títulos longos dos artigos e das entradas.
- mobile-native: hover em tela de toque, menu e status no celular.
- /review-animations e animation-performance: ao fim da rodada 2.

Regras de movimento (emil-design-eng + skill movimento): animar só transform, opacity, clip-path e filter;
interações de interface até 300 ms com ease-out forte cubic-bezier(0.23, 1, 0.32, 1); nunca ease-in;
nada surge de scale(0) (partir de 0.95 + opacidade); botões com scale(0.97) no :active;
prefers-reduced-motion desliga tudo que não for essencial; efeitos de cursor desligados em toque.

## Rodada 1 — estrutura e visual (sem os efeitos de rolagem)

### Tipografia

- Fonte: Google Sans Flex (Google Fonts, SIL OFL), variável, auto-hospedada, licença ao lado.
  Conferir os eixos disponíveis (peso, largura, tamanho ótico) e usá-los nos tokens.
- Escala: a da debora.wiki (especificação base).
- Espaço entre letras apertado, inspirado na hugeinc.com: 80 px −0.04em; 56 e 48 px −0.03em;
  32 e 24 px −0.02em; 20 px para baixo −0.01em.

### Cabeçalho (primeira dobra)

- Esquerda: "Taiane Cris Campos" (link para o início).
- Centro: menu "ilha" inspirado no Morphing Island (annnimate.com/animations/morphing-island), com
  implementação PRÓPRIA (o código original é pago e não deve ser copiado):
  cápsula escura que mostra o nome da seção atual (Projetos, Artigos, Sobre); ao clicar, cresce e vira a lista
  das seções; escolher uma rola até ela e a cápsula volta ao tamanho pequeno. Crescer com leve mola;
  encolher sem mola. Esc volta um nível. Acessível: botão com aria-expanded, lista navegável por teclado.
- Direita: "Remoto ou híbrido" com ponto verde de "online" pulsando de forma contínua e suave
  (inspirado em liamhayes.framer.website). Com redução de movimento, o ponto fica parado.

### Abertura (primeira dobra)

- Título em CAIXA ALTA (via CSS, o texto no HTML continua normal): "Design de produto com pensamento sistêmico,
  IA e código." Grande e condensado, usando o eixo de largura da Google Sans Flex.
- Foto nova (src/assets/taiane-retrato.png, já em alta resolução) MAIOR, cantos arredondados, SEM o selo.
- Título e foto centralizados verticalmente entre o cabeçalho e a faixa de baixo.
- Faixa de baixo: à esquerda, "Senior Product Designer | Design Engineering" com seta para baixo
  (clique leva a Projetos); à direita, "Me encontre no LinkedIn" com seta diagonal (externo).

### Setas (sistema)

- Seta diagonal ↗ só para links externos (LinkedIn, artigos, currículo).
- Seta reta → para links internos (cases).
- Seta para baixo ↓ para rolar dentro da página.

### Projetos

- Tirar a etiqueta "Novo".
- Manter título, descrição curta e "2025, Inlead", agora com seta reta →.
- Testar com /prototype: lista em blocos bento (cartões arredondados) x lista com linhas. A Taiane escolhe.

### Artigos (antes "Textos")

- Renomear a seção e o item do menu para "Artigos".
- Só títulos, sem descrição. Metadados: "2026, Substack" + seta ↗.
- Itens: "UX e Dev: Reconectando o Elo Perdido Entre Design e Tecnologia" (2026, Substack);
  "Design Engineering começa antes do código: o que aprendi construindo o designDivergente" (2026, designDivergente);
  "designDivergente: do planejamento ao roadmap de evolução" (2026, designDivergente).
  O item "Como construí meu portfólio com Claude Code" sai por enquanto.
- Título com no máximo 2 linhas e reticências; ao passar o mouse ou focar com o teclado, o título completo aparece
  com transição suave. O texto completo fica sempre no HTML (leitor de tela lê inteiro). Em toque, mostrar inteiro.
- Aqui ficam as linhas separadoras (diferencia de Projetos).

### Sobre

- A foto aparece também aqui (na rodada 2, ela "descola" da abertura e desce até aqui com a rolagem).
- Três colunas de MESMA largura: Descrição · Experiência profissional · Formação acadêmica.
- "Acessar currículo em PDF" com seta ↗, abre em nova aba (arquivo público em public/curriculo.pdf,
  versão SEM telefone e sem metadados; até a Taiane enviar, manter "em breve").
- Experiência profissional:
  Inlead — Senior Product Designer — 2025–2026
  WeFit — Senior Product Designer — 2023–2025
  Grupo Sifra — Design System Lead — 2021–2023
- Formação acadêmica:
  IDI — Pós-graduação em Ciências Cognitivas e Design de Interação — 2020
  PUCRS — Pós-graduação User Experience Design and Beyond — 2021–2022
  PUCRS — Pós-graduação em Desenvolvimento Full Stack — 2023 (não concluída), em cor secundária, menor destaque
- Abaixo: "Mais informações no LinkedIn" com seta ↗.

### Rodapé

- Substitui o bloco "Vamos conversar?" atual. Formato inspirado em liamhayes.framer.website, fundo PRETO.
- Conteúdo: título "Vamos conversar?"; navegação (Início, Projetos, Artigos, Sobre); contato (e-mail, LinkedIn);
  redes (LinkedIn, Substack, GitHub, designDivergente); "© 2026 Taiane Cris Campos"; "Ribeirão Preto, SP" com hora local.
- Contraste AA no fundo preto.

### Página de case (personalidade inspirada em kora.framer.media/cases/sitemark)

- Título grande (escala próxima de 120 px no desktop, espaço entre letras apertado).
- Introdução em texto grande (cerca de 30 px, peso semibold) à esquerda; à direita, disciplinas em pílulas
  e a ficha: empresa, ano, papel, duração.
- Bloco de destaque com cantos bem arredondados (30 a 40 px): imagem grande do case e, abaixo, os resultados
  em cartões arredondados (40%, cerca de 25%, 3x).
- Seções do texto com títulos grandes e imagens dentro de molduras arredondadas com fundo de cor suave.
- Manter a nota de confidencialidade e o convite para o LinkedIn no fim.

## Rodada 2 — movimento e personalidade (antecipa parte da 0.5.0)

- Abertura: efeito de tipografia gigante do 2025.driftime.com ("A quick look at..."): palavras em caixa alta,
  condensadas, ocupando a largura da tela, com a foto/cartão deslizando por cima ao rolar (scroll scrub).
- Foto: efeito do foyer.framer.website — distorção líquida (lente/ondulação) que segue o cursor sobre a foto,
  em WebGL leve (sem Three.js; preferir WebGL puro ou OGL), com textura de grão. Desligado em toque e com
  redução de movimento (foto estática).
- Foto "descolando" da abertura e assentando na seção Sobre ao rolar (técnica Flip + ScrollTrigger).
- Revelação de textos e imagens como no realfood.gov: texto que se preenche e elementos que surgem sem forçar.
- Nos cases: revelação das imagens nas molduras arredondadas, como no kora.
- Polimento da ilha (mola por tamanho) e revisão final com /review-animations, animation-performance e mobile-native.
