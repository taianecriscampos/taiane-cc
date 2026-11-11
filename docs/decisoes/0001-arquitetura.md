# ADR 0001 — Site estático em Astro, sem back-end na versão 1

**Data:** 10/11/2026 · **Status:** Aceita

## Contexto

Portfólio pessoal com 3 cases, publicação em 2 dias, custo zero, avaliado por recrutadores
e por engenheiros que podem inspecionar o código.

## Decisão

- Astro gerando HTML estático, TypeScript strict, hospedagem na Vercel.
- Conteúdo em Markdown com Content Collections e schema Zod (o "back-end" do conteúdo:
  tipos, validação e relações checados na compilação).
- Sem servidor, banco de dados ou CMS. Contato por e-mail e LinkedIn.
- JavaScript apenas nas ilhas de interação (GSAP, Lenis).

## Alternativas consideradas

- Next.js + Sanity (stack do designDivergente): mais poder, mas custo de complexidade
  desnecessário para 3 cases. Reavaliar se houver edição frequente por navegador.
- Framer/Webflow: rápido, mas não demonstra competência de Design Engineering.

## Consequências

- Site rápido, seguro e barato; menos superfície de ataque.
- Adicionar um formulário ou CMS no futuro exige nova ADR (ex.: função serverless na Vercel).
