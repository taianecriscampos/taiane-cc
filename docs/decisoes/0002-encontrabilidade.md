# ADR 0002 — Encontrabilidade para buscadores e IAs

**Data:** 10/11/2026 · **Status:** Aceita

## Contexto

O portfólio precisa ser encontrado e citado: pelo Google (SEO), por respostas diretas (AEO),
por motores generativos como ChatGPT, Perplexity e Gemini (GEO), oferecer boa experiência
depois do clique (SXO) e ser interpretável por IA em vários contextos (AIO).

## Decisão (custo zero, dentro das fases existentes)

- 0.4.0 Conteúdo: resposta primeiro. Cada página e case abre com um resumo de até 3 frases
  (quem, o quê, resultado); títulos descritivos; números com método.
- 0.9.0 Qualidade: JSON-LD ProfilePage + Person (jobTitle, knowsAbout, alumniOf, sameAs:
  LinkedIn, Substack, designDivergente, GitHub) e Article por case; sitemap e canonical;
  /llms.txt em Markdown com resumo e links; robots.txt liberando Googlebot, Bingbot,
  GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot e Google-Extended.
- 1.0.0 Lançamento: verificar o domínio no Google Search Console e no Bing Webmaster Tools
  (registro TXT na Hostinger, no mesmo passo do DNS).
- SXO coberto pelas metas de performance e acessibilidade.

## Fora do escopo

Assistentes de voz têm baixo impacto para portfólio; ficam atendidos pelos dados estruturados.
llms-full.txt e versões .md dos cases: versão 1.1.

## Como medir (pós-lançamento)

Search Console (impressões, cliques), Vercel Analytics, e uma checagem quinzenal perguntando
ao ChatGPT, Perplexity e Gemini "quem é Taiane Cris Campos, designer?".
