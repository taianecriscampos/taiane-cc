# Rascunhos: conteúdo de exemplo para trocar antes da 1.0.0

Desde a rodada 1c, nenhum marcador entre colchetes aparece no site. No lugar deles há conteúdo
de exemplo, escrito do zero para a Taiane ver como vai ficar. Todo exemplo fica marcado no
código com o atributo `data-rascunho`.

O teste `testes/rascunhos.spec.ts` falha se algum colchete aparecer na tela ou se algum
rascunho voltar à página inicial ou ao case de Funis (meta zero desde a rodada 1d).

Para trocar um rascunho: escreva o texto verdadeiro e tire o campo da lista `rascunhos` do case
(ou o atributo `data-rascunho` do elemento). Quando a lista ficar vazia, apague esta linha daqui.

## Situação na rodada 1d (12/11/2026)

Zero rascunhos na página inicial e no case de Funis interativos. O que sobra está fora do ar.

## Cases

Nos arquivos de `src/content/cases`, o campo `rascunhos` lista os campos do topo que são
exemplo. No texto do case, os trechos de exemplo ficam dentro de `<div data-rascunho>`.

- `azul-gpt.md` e `operacao-logistica.md`: sem página na 1.0.0 (`pagina: false`). Na página
  inicial, só o cartão que vira, com chamada e verso finais (aprovados pela Taiane). O resto do
  arquivo (resumo, duração, disciplinas, cartões, resultados e as seis seções do texto) é
  exemplo, para a v1.1.
- `funis-interativos.md`: sem rascunhos. A duração não aparece porque o artigo não informa.

## Imagens

- `src/components/ui/Ilustracao.astro`: ilustração neutra, só formas em cinza. Nos cartões do
  Azul GPT e da Operação logística ela é a imagem definitiva (cases sob sigilo não mostram telas)
  e não conta como rascunho. Nos outros usos (Laboratório), conta.

## Textos do site

- `src/components/blocos/FechamentoCase.astro`: a nota de confidencialidade dos cases sob
  sigilo. Só aparece quando algum deles ganhar página (v1.1).
