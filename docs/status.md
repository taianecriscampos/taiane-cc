# Status do projeto

Atualize este arquivo ao final de cada tarefa.

**Versão atual:** 0.1.1 (Fundação, com redirecionamento temporário do domínio)
**Etapa atual:** 0.3.0 Direção de arte, junto com a estrutura da 0.2.0 (especificação base)
**Fase da etapa:** 0.3.c Direção de arte v3 · ajustes 1c em andamento (protótipos de Projetos e Skills pendentes)
**Status geral:** Em andamento
**Meta de lançamento:** 1.0.0 em 12/11/2026, no taiane.cc

## Ciclo de cada fase (Lean UX)

1. Hipótese — o que queremos e por quê.
2. Construção — o menor incremento revisável.
3. Revisão — navegador + /revisao-visual.
4. Aprovação — commit, /versionar.

## Etapas

| Versão | Etapa                                                                                  | Status       |
| ------ | -------------------------------------------------------------------------------------- | ------------ |
| 0.1.0  | Fundação: Astro, Git, tokens provisórios, Laboratório, qualidade automatizada          | Concluída    |
| 0.1.1  | Ajuste: taiane.cc redireciona para o Linktree até a 1.0.0; briefing de design          | Concluída    |
| 0.2.0  | Estrutura: mapa do site, páginas com conteúdo real sem estilo, 3 larguras              | Em andamento |
| 0.3.0  | Direção de arte: 3 propostas no Laboratório, escolha, tokens oficiais                  | Em andamento |
| 0.4.0  | Páginas e conteúdo: abertura em blocos, case de funis, cases do Azul GPT e da Luft     | Não iniciada |
| 0.5.0  | Movimento: Lenis, títulos revelados, lista com imagem, nuvem de skills, rastro binário | Não iniciada |
| 0.9.0  | Qualidade: acessibilidade, performance, SEO, revisão de texto                          | Não iniciada |
| 1.0.0  | Lançamento: domínio taiane.cc                                                          | Não iniciada |

## Fases da etapa 0.1.0

| Fase  | Descrição                                                                     | Status    |
| ----- | ----------------------------------------------------------------------------- | --------- |
| 0.1.a | Kit de arranque na pasta (CLAUDE.md, docs, skills)                            | Concluída |
| 0.1.b | Projeto Astro criado e rodando no navegador (Astro 7.4.10, TypeScript strict) | Concluída |
| 0.1.c | Arquitetura de pastas, tokens provisórios e Laboratório                       | Concluída |
| 0.1.d | Qualidade automatizada: TypeScript, formatação, testes de acessibilidade      | Concluída |
| 0.1.e | Git, GitHub, ramificações main e design, Vercel                               | Concluída |
| 0.1.f | Revisão e versão 0.1.0                                                        | Concluída |

## Fase 0.1.e

- **Parte 1, concluída:** Git com as ramificações main e design; Laboratório fora da produção
  (fica de fora só quando `VERCEL_ENV=production`); CSP do Astro e cabeçalhos de segurança no
  `vercel.json`; `npm audit` na qualidade; GitHub Actions; Dependabot semanal; `security.txt`
  com contato pelo LinkedIn, válido até 11/11/2027.
- **Parte 2, concluída:** repositório público em github.com/taianecriscampos/taiane-cc,
  com main e design enviadas e rastreadas. O primeiro GitHub Actions, na design, passou
  (audit, check, formatação, build e 20 testes). A main está protegida pela regra "proteger-main":
  só pull request, sem aprovação de outra pessoa, verificação `qualidade` obrigatória, sem force
  push e sem apagar. Vercel ligada: produção em taiane-cc.vercel.app (main) e prévias da design.

## Fase 0.1.f

- Auditoria aprovada: tipos, build e 20 testes sem falhas; Lighthouse 100 em desempenho,
  acessibilidade e boas práticas nas duas páginas, celular e desktop (SEO 60 só pelo `noindex`
  proposital); links, teclado e audit sem problemas.
- Versão 0.1.0: package.json, CHANGELOG.md, pull request da design para a main e etiqueta v0.1.0.

## Versão 0.1.1

- Domínio taiane.cc ligado à Vercel (www.taiane.cc redireciona para ele).
- Redirecionamento temporário 307 da rota `/` dos dois domínios para o Linktree.
- Briefing de design registrado em `docs/briefing-design.md`.

## Fase 0.2.a

- Mapa do site: `/` (abertura em blocos, projetos, sobre, experiência e formação, ferramentas,
  contato) e `/cases/<nome>` com índice lateral e fechamento padrão. Rodapé em todas as páginas.
- Dados de perfil e contato num único lugar: `src/dados/perfil.ts`. Trajetória em
  `src/dados/trajetoria.ts`, a partir de `docs/curriculo.md`.
- Cases: Funis interativos (Inlead, público, do Substack) e, sob sigilo, Azul GPT (2024) e
  Operação logística (Luft, 2023) só com estrutura e "[TEXTO DA TAIANE]".
- Textos marcados com "[RASCUNHO]": sobre, contato e fechamento do case.
- Pior caso (break-ui) no Laboratório, em `src/dados/pior-caso.ts`.
- Qualidade: 50 testes aprovados (acessibilidade, CSP, movimento reduzido, noindex, índice do case).
- Primeira revisão da Taiane aplicada: cabeçalho com nome e links Projetos, Sobre e Contato;
  experiência com cargo, empresa, anos e uma linha; "Case sob sigilo" só nos confidenciais;
  limites do schema (título até 60, valor até 16, no máximo 3 resultados); "[RASCUNHO]" colado
  ao parágrafo; case de funis com os resultados e o método do time de CX da Inlead.
- Aguardando a segunda revisão, com os prints, antes do pull request.

## Fases da etapa 0.3.0

A revisão da 0.2.a não foi aprovada ("cara de documento, poluído, cheio de linhas").
Estrutura e visual seguem juntos nesta etapa, na ramificação design, sem pull request da 0.2.0.
Referência: `docs/especificacao-base-debora.md` (11/11/2026), que substitui os briefings v1 e v2
e os protótipos da 0.3.a na parte visual.

| Fase  | Descrição                                                                   | Status             |
| ----- | --------------------------------------------------------------------------- | ------------------ |
| 0.3.a | Tokens oficiais, fontes, textura, blocos bento e protótipos no Laboratório  | Substituída        |
| 0.3.b | Base fiel à debora.wiki: tokens, cabeçalho, página inicial e página de case | Concluída          |
| 0.3.c | Direção de arte v3: Rodada 1 (tipografia, ilha, seções) e ajustes 1b        | Aguardando revisão |

## Fase 0.3.a

- Fontes auto-hospedadas em `public/fontes`, com as licenças SIL OFL 1.1 ao lado: Archivo
  variável (peso e largura) para textos e títulos, Geist Mono variável para detalhes técnicos.
- Escala de três tamanhos inspirada na debora.wiki: pequeno, corpo e título. Todo título de
  seção usa `--text-titulo`. Os nomes antigos apontam para a escala nova até a 0.3.b.
- Blocos bento (`.bento`), etiqueta (`.etiqueta`), cantos arredondados, ruído leve no fundo da
  página e ponto verde do status. Paleta mantida.
- Protótipos (skill prototype): três aberturas em `/laboratorio/abertura` (Slide limpo, Mosaico,
  Retrato) e dois menus em `/laboratorio/menu` (Barra de aplicativo, Ilha), com ícones
  desenhados para o site. Saem do projeto depois da escolha.
- Qualidade: 74 testes aprovados, incluindo acessibilidade e CSP nas páginas de protótipo.

## Fase 0.3.b

- Tokens trocados pelos da especificação, nas três camadas, com ajustes em 768 e 1200 px.
  Fonte Schibsted Grotesk variável auto-hospedada, com a licença SIL OFL 1.1 ao lado. Archivo e
  Geist Mono ficam em `public/fontes`, sem declaração, então não são baixadas.
- Saíram: protótipos da 0.3.a e suas rotas, blocos bento, etiqueta, textura, menu ilha, hora
  local, status com ponto verde, seção Ferramentas e cursos livres.
- Cabeçalho fixo e translúcido. No celular, botão Menu com painel nativo (popover). Nos cases,
  as seções do case no lugar das seções da página inicial, com painel até 1200 px.
- Página inicial: abertura com a frase, o retrato e o selo próprio; Projetos com "Novo" no case
  mais recente; Textos com os quatro textos; Sobre com Experiência e Educação; "Vamos conversar?";
  rodapé com nome, ano e cidade.
- Página de case: topo central com ano, cliente e tempo de leitura; três cartões de resumo
  (rascunho no case de funis, "[TEXTO DA TAIANE]" nos sigilosos); seções com título fixo à
  esquerda; frase-chave em azul; fechamento com o LinkedIn e a nota de confidencialidade.
- Schema: campos `cliente` (até 24 caracteres) e `cartoes`.
- CLAUDE.md atualizado para apontar o design system para a especificação base.
- Qualidade: audit sem vulnerabilidades, check sem erros, formatação ok, 56 testes aprovados.
- Comparação com a debora.wiki em 375, 768 e 1440 px, em `.revisao/lado-a-lado-*.png`.

## Fase 0.3.c

Referência: `docs/direcao-de-arte-v3.md` e, nos ajustes, `docs/ajustes-rodada-1b.md`.
Ramificação design, sem envio ao GitHub. A qualidade roda antes de cada commit.

- **Rodada 1:** fonte Google Sans Flex variável (peso e largura), espaço entre letras por nível;
  cabeçalho com a ilha; abertura nova; Artigos (antes Textos); Sobre em três colunas; rodapé
  preto; página de case com título grande, ficha, disciplinas e bloco de destaque.
- **Protótipo de Projetos:** bento x linhas. Escolha da Taiane: bento.
- **Ajustes 1b:**
  - Projetos em bento, com texto-modelo nos cartões sem chamada.
  - Ilha de vidro escuro igual às referências: número e nome da seção, ponto branco; painel com
    "Seções", "Fechar" e a lista numerada de 01 Início a 05 Skills. Teclado com setas, Esc e Fechar.
  - Primeira dobra inteira na tela (100svh) em todas as larguras medidas, inclusive celular deitado.
    Título sem caixa alta e sem condensar, −0,035em. No celular, "Tai", status acima da foto e
    faixa curta ("Design Engineer" e "LinkedIn").
  - Artigos com o título sempre inteiro, em até 2 linhas, com o mesmo tamanho para todos, só com
    CSS. Teste que falha se algum passar de 2 linhas em 375, 768 e 1440.
  - Sobre com Resumo, Experiência profissional e Formação acadêmica; foto abaixo do resumo;
    currículo em PDF ativo. Exceção do telefone no PDF registrada no ADR 0003.
  - Seção Skills nova, com ícones do Simple Icons (CC0) em cinza. Playwright sem ícone no pacote.
  - Rodapé "Me chama", com copiar e-mail, setas em todos os links externos e relógio.
  - Robustez: palavras longas e status longo não estouram a tela (pior caso do Laboratório).
- Qualidade: audit sem vulnerabilidades, check sem erros, formatação ok, 74 testes aprovados.
- Prints em `.revisao/r1b-*.png`.
- **Ajustes 1c** (`docs/ajustes-rodada-1c.md`):
  - Feitos: respiro da ilha; Artigos com a regra das 2 linhas só a partir de 768 px; Sobre sem
    foto e com etiqueta "não concluída"; rodapé "Me chama?" com o mesmo ritmo nas três colunas e
    dois-pontos piscando; conteúdo de exemplo no lugar dos colchetes (data-rascunho,
    `docs/rascunhos.md`); regra de raios nos tokens (24 px cartões e molduras, 8 px imagens dentro).
  - Correção da autocrítica: resultado em palavras não estoura o cartão em 768 px.
  - Pendentes: protótipos de Projetos (bento compacto x carrossel) e Skills (três colunas x
    duas colunas com faixa). A skill prototype só roda quando a Taiane digita /prototype.
  - Qualidade: 90 testes aprovados. Prints em `.revisao/r1c-*.png`.

## Pendências anotadas

- **0.3.c:** conferir num celular de verdade o desfoque da ilha (o navegador de testes desenha o
  desfoque de forma instável com a página rolada), o toque na ilha e o botão de copiar.
- **0.3.c:** o PDF do currículo guarda credenciais de conteúdo (C2PA) que dizem que foi gerado
  pelo ChatGPT. Decidir com a Taiane se remove.
- **0.3.c:** ano da pós da IDI: a direção v3 diz 2020; o currículo diz 2020 a 2021.
- **0.5.0:** Rodada 2 de movimento (efeitos da direção v3 e a nuvem magnética de skills).

- **1.0.0:** remover do `vercel.json` o redirecionamento temporário (307) de taiane.cc e
  www.taiane.cc para o Linktree. Ele vale só na rota `/`, para o `security.txt` continuar acessível.
- **0.3.0:** o Laboratório usa larguras de coluna em `rem` e linhas de `1px` soltas. Criar
  tokens para elas.
- **0.9.0:** nota A+ no Mozilla Observatory e checagem em securityheaders.com.
- **1.0.0:** liberar os buscadores: trocar `indexacaoLiberada` para `true` em
  `src/components/layout/LayoutBase.astro`. O Laboratório continua com `noindex`.
- **0.4.0:** imagens do case de funis, com texto alternativo; trocar todos os "[RASCUNHO]",
  "[TEXTO DA TAIANE]" e "[A DEFINIR]".
- **0.4.0:** chamadas dos cases do Azul GPT e da Luft; enquanto forem "[TEXTO DA TAIANE]", a
  lista de projetos mostra só o título.
- **Ambiente:** com pouca memória livre no computador, rodar os testes com `--workers=1`.
- **11/2027:** renovar a data `Expires` do `public/.well-known/security.txt` antes de 11/11/2027.
