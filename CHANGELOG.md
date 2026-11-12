# Registro de mudanças

Todas as mudanças importantes do taiane.cc ficam registradas aqui.
O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o projeto usa [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não publicado]

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

[Não publicado]: https://github.com/taianecriscampos/taiane-cc/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/taianecriscampos/taiane-cc/compare/v0.1.1...v1.0.0
[0.1.1]: https://github.com/taianecriscampos/taiane-cc/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/taianecriscampos/taiane-cc/releases/tag/v0.1.0
