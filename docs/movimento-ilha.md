# Movimento da ilha (v1.1) — comportamento do Morphing Island, implementação própria

Referência: annnimate.com/animations/morphing-island (código pago: NÃO copiar código; replicar o
COMPORTAMENTO descrito publicamente na página e observado no preview).

## Três níveis (hoje temos só dois)

1. Cápsula: nome da seção atual.
2. Lista de seções (já existe).
3. NOVO: ao escolher uma seção na lista, a ilha cresce de novo e mostra um detalhe curto daquela seção:
   número, nome, uma frase e um link "Ir para a seção →". Clicar no link rola até a seção e a ilha
   volta à cápsula.
- Esc volta UM nível por vez (detalhe → lista → cápsula). "Fechar" volta direto à cápsula.

Frases do nível 3 (podem ser ajustadas pela Taiane):
- Início: "Quem eu sou, em uma frase e uma foto."
- Projetos: "Cases de produto, do diagnóstico ao código."
- Artigos: "O que escrevo sobre design, IA e engenharia."
- Sobre: "Trajetória, experiência e formação."
- Skills: "Competências e as ferramentas do dia a dia."
(No case: Visão geral, Contexto, Problema... com frases curtas tiradas do próprio texto.)

## Mola por movimento (o ponto principal)

- Todo CRESCIMENTO (cápsula → lista, lista → detalhe, detalhe maior ↔ menor) tem mola.
- A mola é calculada POR MOVIMENTO: ela passa do tamanho final sempre pelos MESMOS poucos pixels
  (cerca de 6 px), cresça a ilha pouco ou muito. Uma mola fixa faz o passo pequeno quase não mexer e o
  passo grande "tocar como campainha" — é exatamente o que não queremos.
  Técnica sugerida: medir o tamanho de saída e de chegada; overshoot = 6 px / distância; keyframes
  (início → final + 6 px → final) ou CustomEase gerada na hora.
- Todo ENCOLHIMENTO não tem mola: só assenta com ease-out forte. Caixa que encolhe e quica parece tremer.
- Duração do morph: cerca de 450 a 550 ms para crescer; cerca de 250 a 300 ms para encolher.

## Troca de conteúdo dentro da ilha

- O conteúdo antigo sai com opacidade e desfoque (blur de 4 a 8 px) enquanto o novo entra nítido.
- Os itens da lista entram um depois do outro (intervalo de 30 a 40 ms), com leve deslize vertical.

## Nome da seção na cápsula (rolagem)

- Todos os nomes de seção ficam numa FAIXA vertical atrás de uma "janela" do tamanho de um nome.
  A faixa desliza até a seção atual. Uma rolagem rápida por três seções vira UM movimento contínuo,
  não três trocas seguidas. O número acompanha do mesmo jeito.
- A largura da cápsula acompanha o nome novo com a mesma mola por movimento.

## Ponto da lista

- Com a lista aberta, existe UM ponto só, que DESLIZA entre as linhas quando a seção atual muda
  (por exemplo, se a página rola por baixo da lista aberta).

## Regras do projeto

- Animar só transform, opacity, filter e clip-path (para o tamanho, usar escala/clip-path ou FLIP;
  evitar animar width/height direto se causar reflow pesado).
- GSAP só se necessário (ScrollTrigger/CustomEase); se der com CSS + Web Animations API, melhor.
- prefers-reduced-motion: troca instantânea, sem mola, sem desfoque.
- Acessibilidade: aria-expanded, foco devolvido ao botão ao fechar, Esc por nível, ordem de Tab lógica,
  o nível 3 anunciado ao leitor de tela.
- Celular: o mesmo comportamento, respeitando a largura da tela.
