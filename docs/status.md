# Status do projeto

Atualize este arquivo ao final de cada tarefa.

**Versão atual:** 0.1.1 (Fundação, com redirecionamento temporário do domínio)
**Etapa atual:** 0.3.0 Direção de arte, junto com a estrutura da 0.2.0 (briefing de design v2)
**Fase da etapa:** 0.3.a Tokens oficiais e protótipos no Laboratório · aguardando a escolha da Taiane
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
Referência: `docs/briefing-design-v2.md`, que substitui as decisões visuais do briefing v1.

| Fase  | Descrição                                                                    | Status               |
| ----- | ---------------------------------------------------------------------------- | -------------------- |
| 0.3.a | Tokens oficiais, fontes, textura, blocos bento e protótipos no Laboratório   | Aguardando a escolha |
| 0.3.b | Aplicar a abertura e o menu escolhidos no site inteiro, na ordem do briefing | Não iniciada         |

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

## Pendências anotadas

- **1.0.0:** remover do `vercel.json` o redirecionamento temporário (307) de taiane.cc e
  www.taiane.cc para o Linktree. Ele vale só na rota `/`, para o `security.txt` continuar acessível.
- **0.3.0:** o Laboratório usa larguras de coluna em `rem` e linhas de `1px` soltas. Criar
  tokens para elas quando os tokens oficiais forem definidos.
- **0.9.0:** nota A+ no Mozilla Observatory e checagem em securityheaders.com.
- **1.0.0:** liberar os buscadores: trocar `indexacaoLiberada` para `true` em
  `src/components/layout/LayoutBase.astro`. O Laboratório continua com `noindex`.
- **0.4.0:** imagens do case de funis, com texto alternativo; trocar todos os "[RASCUNHO]",
  "[TEXTO DA TAIANE]" e "[A DEFINIR]".
- **0.3.b:** seção Textos com os dois textos do designDivergente (2026), o post do Substack
  `ux-e-dev-reconectando-o-elo-perdido` (ler o post para pegar o título exato e o ano) e
  "Como construí meu portfólio com Claude Code" com a etiqueta "em produção".
  O case de funis não entra, porque já está em Projetos.
- **0.3.b:** remover os nomes de transição de tamanho de texto em `tokens.css` e o cabeçalho de
  texto, substituído pelo menu flutuante.
- **Ambiente:** com pouca memória livre no computador, rodar os testes com `--workers=1`.
- **0.3.0:** a foto tem 512 px; trocar por uma maior para telas de alta densidade.
- **11/2027:** renovar a data `Expires` do `public/.well-known/security.txt` antes de 11/11/2027.
