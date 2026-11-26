# Registro de mudanças

Todas as mudanças importantes do taiane.cc ficam registradas aqui.
O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o projeto usa [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não publicado]

## [1.2.0] - 2026-11-26

### Adicionado

- A seção Artigos se atualiza sozinha: no build, busca os 2 posts mais recentes do designDivergente na API pública do Sanity e mantém o artigo do Substack por último. Se a busca falhar, usa a lista de reserva.
- Rebuild diário pelo GitHub Actions, com um deploy hook do Cloudflare Pages (segredo `CLOUDFLARE_DEPLOY_HOOK`).
- Backlog do projeto em `docs/backlog.md`.

### Corrigido

- A lista de reserva troca os 2 links do blog que respondiam 404 pelos 2 posts mais recentes.

## [1.1.5] - 2026-11-22

### Corrigido

- No Resumo do Sobre, o link "designDivergente.blog" não quebra mais o parágrafo no celular: nova variante de link dentro do texto (`noTexto`), com a altura de linha do parágrafo e a seta e a vírgula coladas na palavra.
- No iPhone, "Grupo Sifra" e os anos não aparecem mais como links: `format-detection` no `<head>` e links automáticos do Safari neutralizados no CSS.

## [1.1.4] - 2026-11-20

### Alterado

- Preparado para o Cloudflare Pages (a conta da Vercel foi pausada): produção também é reconhecida por `CF_PAGES` e `CF_PAGES_BRANCH`.
- Cabeçalhos de segurança em `public/_headers`, iguais aos do `vercel.json`.

## [1.1.3] - 2026-11-18

### Adicionado

- Nos cartões confidenciais, em telas de toque, o logo ganha a cor original ao passar pelo centro da tela, com esmaecimento cruzado de 700 ms.
- Audit com `audit-ci`: bloqueia vulnerabilidade alta, exceto o aviso conhecido do picomatch (ADR 0003).

### Alterado

- "IA generativa" virou "IA" em todo o site (cartão e case do Azul GPT, Hard skills, llms.txt e dados estruturados).
- Artigos em ordem de publicação: o do Substack vai para o fim.
- Novo texto do Resumo (Sobre), com link para o designDivergente.blog.
- Dependências atualizadas com `npm audit fix`.

## [1.1.2] - 2026-11-14

### Alterado

- E-mail de contato trocado para taianecc.contato@gmail.com (perfil e testes).

## [1.1.1] - 2026-11-14

### Corrigido

- Ilha invisível no iPhone (Safari e navegador interno do Instagram): no WebKit, desfoque de fundo com clip-path dentro do cabeçalho sticky faz o vidro sumir. O vidro agora tem base sólida escura em todo navegador; o desfoque translúcido fica só fora do WebKit, e a mola do recorte, se recusada, cai direto no tamanho final.

### Adicionado

- Projeto de testes WebKit (iPhone 13) no Playwright, rodando no GitHub Actions, com teste do vidro escuro da ilha.

## [1.1.0] - 2026-11-13

### Adicionado

- Rolagem suave nos links internos e esmaecimento entre páginas (View Transitions nativas), ambos desligados com movimento reduzido.
- Hover sutil nas pílulas de Skills e de disciplina dos cases; sublinhado no "ano, local" dos Artigos.
- Sumário do case com encolher suave e ilha com três níveis.

### Alterado

- A linha inteira de cada artigo é clicável, com cursor de mão.
- "Currículo em PDF" fica visível e desativado (aria-disabled, cursor not-allowed), com exceção de contraste.

### Removido

- `public/curriculo.pdf`: o telefone não está mais publicado.

## [1.0.0] - 2026-11-12

Lançamento do taiane.cc.

### Adicionado

- Site completo: página inicial (abertura, Projetos, Artigos, Sobre, Skills e rodapé "Me chama!")
  e o case de Funis interativos, com a ilha de navegação e o botão "Voltar ao topo".
- Encontrabilidade: JSON-LD (ProfilePage, Person e Article), sitemap, robots.txt, llms.txt,
  Open Graph e canonical.

### Alterado

- Celular (até 767 px): o cabeçalho mostra só o ponto verde animado; o rodapé fica todo
  centralizado; o botão "Voltar ao topo" para abaixo da linha da cidade e da hora.

### Removido

- Redirecionamento temporário (307) de taiane.cc e www.taiane.cc para o Linktree.

## [0.1.1] - 2026-11-11

Ajuste: o domínio taiane.cc fica apontando para o Linktree até o lançamento.

### Adicionado

- Redirecionamento temporário (307) da rota `/` de taiane.cc e www.taiane.cc para
  https://linktr.ee/taianecriscampos, no `vercel.json`. O taiane-cc.vercel.app, as prévias e as
  demais rotas, como o `security.txt`, não mudam. Será removido na versão 1.0.0.
- Briefing de design (`docs/briefing-design.md`), base para as etapas 0.2.0 e 0.3.0.

## [0.1.0] - 2026-11-11

Etapa Fundação: a base técnica do portfólio, sem conteúdo real ainda.

### Adicionado

- Projeto Astro 7 estático, com TypeScript em modo strict e CSS puro em camadas.
- Arquitetura de pastas: componentes em `ui/`, `blocos/` e `layout/`, coleção de cases com schema Zod.
- Tokens provisórios em três camadas (primitivos, semânticos e de componente).
- Laboratório (`/laboratorio`), que mostra todos os tokens, com medição de contraste WCAG 2.2.
  Ele existe no ambiente local e nas prévias, mas fica fora da produção.
- Link "Pular para o conteúdo" e página em `pt-BR`.
- Qualidade automatizada: Prettier com o plugin do Astro, `.editorconfig`, Playwright com Chromium
  e testes de acessibilidade com axe (WCAG 2.2 AA), teclado, movimento reduzido e segurança.
- Script `npm run qualidade`: audit, check, formatação, build e testes.
- Segurança (ADR 0003): CSP do Astro com hashes, cabeçalhos no `vercel.json` (frame-ancestors,
  HSTS, nosniff, Referrer-Policy, Permissions-Policy) e `/.well-known/security.txt`.
- Git com as ramificações `main` e `design`, repositório no GitHub e main protegida
  (só pull request com a qualidade aprovada).
- GitHub Actions rodando a qualidade em todo envio e pull request; Dependabot semanal.
- Publicação na Vercel: produção em taiane-cc.vercel.app e prévias da ramificação design.

[Não publicado]: https://github.com/taianecriscampos/taiane-cc/compare/v1.1.3...HEAD
[1.1.3]: https://github.com/taianecriscampos/taiane-cc/compare/v1.1.2...v1.1.3
[1.0.0]: https://github.com/taianecriscampos/taiane-cc/compare/v0.1.1...v1.0.0
[0.1.1]: https://github.com/taianecriscampos/taiane-cc/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/taianecriscampos/taiane-cc/releases/tag/v0.1.0
