---
name: movimento
description: Padrão de animação e interação do portfólio com GSAP, ScrollTrigger, SplitText e Lenis. Use sempre que a tarefa envolver animação, transição, rolagem suave, efeito de cursor ou hover.
---
# Movimento

Princípio: o movimento explica e conduz; nunca decora. Teto: realfood.gov.

Padrões:
- Bibliotecas: `gsap` (ScrollTrigger, SplitText) e `lenis`. Inicialização única em
  `src/scripts/movimento/index.ts`, um módulo por efeito.
- Tokens de movimento em tokens.css: `--motion-duration-fast` (0.2s), `--motion-duration-base` (0.4s),
  `--motion-duration-slow` (0.8s), `--motion-ease-out` (cubic-bezier(.22,1,.36,1)). Leia-os no JS.
- Animar só `transform` e `opacity`. Nada de layout.
- Divisão de trabalho (ver animation-performance): transições simples (hover, foco, aparecer) em CSS;
  GSAP só para o que depende da rolagem (ScrollTrigger), SplitText e o rastro binário.
  GSAP roda na thread principal: nada de animação GSAP durante carregamento pesado.
- `prefers-reduced-motion: reduce` → sem Lenis, sem SplitText, sem cursor; conteúdo aparece direto.
- `(hover: none)` ou `(pointer: coarse)` → sem efeitos de cursor.
- O conteúdo tem que estar visível e legível se o JavaScript falhar (classe de "aguardando"
  removida por timeout, como na debora.wiki).
- Elementos animados por cursor ficam fora da árvore de acessibilidade (`aria-hidden`).
- Teste a 60 fps no celular simulado antes de concluir.

Ao pedir um efeito, especifique: gatilho, o que se move, duração, curva e alternativa sem movimento.
