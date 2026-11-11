# Status do projeto

Atualize este arquivo ao final de cada tarefa.

**Versão atual:** 0.0.0 (kit de arranque)
**Etapa atual:** 0.1.0 Fundação
**Fase da etapa:** 0.1.e parte 1 concluída · próxima: 0.1.e parte 2
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
| 0.1.0  | Fundação: Astro, Git, tokens provisórios, Laboratório, qualidade automatizada          | Em andamento |
| 0.2.0  | Estrutura: mapa do site, páginas com conteúdo real sem estilo, 3 larguras              | Não iniciada |
| 0.3.0  | Direção de arte: 3 propostas no Laboratório, escolha, tokens oficiais                  | Não iniciada |
| 0.4.0  | Páginas e conteúdo: abertura em blocos, case de funis, cases do Azul GPT e da Luft     | Não iniciada |
| 0.5.0  | Movimento: Lenis, títulos revelados, lista com imagem, nuvem de skills, rastro binário | Não iniciada |
| 0.9.0  | Qualidade: acessibilidade, performance, SEO, revisão de texto                          | Não iniciada |
| 1.0.0  | Lançamento: domínio taiane.cc                                                          | Não iniciada |

## Fases da etapa 0.1.0

| Fase  | Descrição                                                                     | Status       |
| ----- | ----------------------------------------------------------------------------- | ------------ |
| 0.1.a | Kit de arranque na pasta (CLAUDE.md, docs, skills)                            | Concluída    |
| 0.1.b | Projeto Astro criado e rodando no navegador (Astro 7.4.10, TypeScript strict) | Concluída    |
| 0.1.c | Arquitetura de pastas, tokens provisórios e Laboratório                       | Concluída    |
| 0.1.d | Qualidade automatizada: TypeScript, formatação, testes de acessibilidade      | Concluída    |
| 0.1.e | Git, GitHub, ramificações main e design, Vercel                               | Em andamento |
| 0.1.f | Revisão e versão 0.1.0                                                        | Não iniciada |

## Fase 0.1.e

- **Parte 1, concluída:** Git com as ramificações main e design; Laboratório fora da produção
  (fica de fora só quando `VERCEL_ENV=production`); CSP do Astro e cabeçalhos de segurança no
  `vercel.json`; `npm audit` na qualidade; GitHub Actions; Dependabot semanal; `security.txt`
  com contato pelo LinkedIn, válido até 11/11/2027.
- **Parte 2, a seguir:** criar o repositório no GitHub e enviar main e design; proteger a main
  (só pull request com a qualidade aprovada); ligar a Vercel ao repositório.

## Pendências anotadas

- **0.1.e parte 2:** depois do primeiro envio, conferir que o GitHub Actions passou e que os
  cabeçalhos do `vercel.json` chegam ao navegador (prévia da Vercel e securityheaders.com).
  Conferir também que o `/laboratorio` existe na prévia e não existe na produção.
- **0.2.0:** tirar o `noindex` da página inicial quando ela tiver conteúdo real.
- **11/2027:** renovar a data `Expires` do `public/.well-known/security.txt` antes de 11/11/2027.
