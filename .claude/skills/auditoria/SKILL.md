---
name: auditoria
description: Auditoria técnica do portfólio antes de publicar: acessibilidade, performance, SEO, links e código. Use quando a Taiane pedir auditoria, checagem de qualidade, ou antes de qualquer versão.
---
# Auditoria

1. `npm run check` (tipos e Astro) e `npm run build`.
2. `npm run test` (Playwright + axe): zero violações de acessibilidade.
3. Lighthouse nas páginas principais, desktop e celular. Meta: 95+ em todas as categorias.
4. Links quebrados internos e externos.
5. SEO: título, descrição, Open Graph, dados estruturados, sitemap, `noindex` só no Laboratório.
6. Teclado: percorra a página com Tab; foco sempre visível e ordem lógica.
7. Segurança: `npm audit --audit-level=high`; cabeçalhos de segurança presentes na resposta do site;
   nenhum segredo, telefone ou dado pessoal sensível no código, no PDF ou nos metadados das imagens.
8. Código: nenhum valor de cor/espaço/tamanho fora dos tokens (procure por `#`, `px`, `rem` soltos nos componentes).

Responda em português simples: aprovado ou não, e uma lista curta do que corrigir por prioridade.
