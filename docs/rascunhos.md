# Rascunhos: conteúdo de exemplo para trocar antes da 1.0.0

Desde a rodada 1c, nenhum marcador entre colchetes aparece no site. No lugar deles há conteúdo
de exemplo, escrito do zero para a Taiane ver como vai ficar. Todo exemplo fica marcado no
código com o atributo `data-rascunho`.

O teste `testes/rascunhos.spec.ts` avisa, sem falhar, quantos rascunhos cada página ainda tem,
e falha se algum colchete voltar a aparecer na tela.

Para trocar um rascunho: escreva o texto verdadeiro e tire o campo da lista `rascunhos` do case
(ou o atributo `data-rascunho` do elemento). Quando a lista ficar vazia, apague esta linha daqui.

## Cases

Nos arquivos de `src/content/cases`, o campo `rascunhos` lista os campos do topo que são
exemplo. No texto do case, os trechos de exemplo ficam dentro de `<div data-rascunho>`.

- `azul-gpt.md`: tudo é exemplo. Chamada, resumo, duração ("8 meses"), disciplinas, os três
  cartões, os três resultados (em palavras, sem números) e as seis seções do texto.
- `operacao-logistica.md`: tudo é exemplo. Chamada, resumo, duração ("4 meses"), disciplinas,
  os três cartões, os três resultados (em palavras, sem números) e as seis seções do texto.
- `funis-interativos.md`: duração ("6 meses") e os três cartões, escritos a partir do artigo.

## Imagens

- `src/components/ui/Ilustracao.astro`: ilustração neutra, só formas em cinza, no lugar das
  imagens dos cases. Aparece no destaque do topo de cada case e no cartão grande de Projetos.

## Textos do site

- `src/components/blocos/Sobre.astro`: os dois parágrafos do Resumo.
- `src/components/blocos/FechamentoCase.astro`: a nota de confidencialidade do fim de cada case.
