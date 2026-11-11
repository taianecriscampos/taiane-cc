# Registro de mudanças

Todas as mudanças importantes do taiane.cc ficam registradas aqui.
O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e o projeto usa [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não publicado]

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

[Não publicado]: https://github.com/taianecriscampos/taiane-cc/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/taianecriscampos/taiane-cc/releases/tag/v0.1.0
