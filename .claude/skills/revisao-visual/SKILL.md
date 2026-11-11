---
name: revisao-visual
description: Revisão visual do portfólio em três larguras de tela, como abrir o Figma. Use quando a Taiane pedir para revisar, ver, conferir ou comparar a interface, ou depois de qualquer mudança visual.
---
# Revisão visual

1. Garanta que o servidor local está rodando (`npm run dev`).
2. Com Playwright, tire prints de página inteira em 375, 768 e 1440 px de largura da página pedida
   (padrão: `/`) e salve em `.revisao/<data>-<pagina>-<largura>.png` (pasta ignorada pelo Git).
3. Olhe os prints e avalie, citando o token envolvido em cada observação:
   - Grid e alinhamento: elementos alinhados às colunas e margens.
   - Hierarquia: um ponto de entrada claro por tela; no máximo 3 níveis de texto visíveis.
   - Espaçamento: só valores da escala; ritmo vertical consistente entre seções.
   - Tipografia: comprimento de linha entre 45 e 75 caracteres no texto corrido; sem viúvas no título.
   - Cor: vermelho de destaque abaixo de 5% da área; contraste AA.
   - Quebras: nada cortado, sobreposto ou com rolagem horizontal.
4. Responda em português simples: o que está bom, o que ajustar (no máximo 5 itens, por prioridade)
   e a sugestão de correção. Não corrija nada sem a Taiane aprovar.
