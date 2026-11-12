# Ajustes da Rodada 1 (1c) — revisão da Taiane, 11/11/2026

O que está APROVADO e não deve mudar: primeira dobra (título, foto, faixa de baixo), artigos no desktop,
estrutura do Sobre, página de case.

## Processo obrigatório nesta rodada (o que faltou na 1b)

As skills foram carregadas na 1b, mas não foram usadas para REVISAR o resultado. Agora:

1. Para cada item, antes de codar, aplique /emil-design-eng e frontend-design ao CONTEXTO do site atual
   (tipografia, grade de 12 colunas, cinzas, raio de 8 px nos elementos e cartões, ritmo da debora.wiki).
2. Onde houver duas soluções possíveis, use /prototype e PARE para a Taiane escolher.
3. Depois de implementar, tire prints e faça uma autocrítica com /emil-design-eng no formato
   "Antes / Depois / Por quê", comparando com as seções aprovadas (Artigos e Sobre).
   Corrija o que achar ANTES de mostrar à Taiane.
4. Qualidade antes de cada commit.

## 1. Ilha — respiro

- Painel aberto colado no topo da tela: afastar 12 px do topo da janela.
- Padding interno do painel: 20 px no topo e na base, 24 px nas laterais.
- Espaço entre o cabeçalho do painel (Seções / Fechar) e a lista: 16 px.
- Cápsula fechada: 12 px do topo, padding lateral de 16 a 20 px, altura de 44 a 48 px.
- Manter tudo o mais como está (cores, números, ponto, movimento).

## 2. Projetos — mais compacto (use /prototype com 2 opções)

Problema: o bento ficou gigante; a imagem não é o foco.

- Opção A, bento compacto: o mesmo arranjo (um cartão grande + dois empilhados), com cerca de METADE da altura atual.
  No desktop, altura total do bloco entre 380 e 440 px. Imagem do cartão grande menor (proporção 16:9, no máximo
  metade da altura do cartão). Título do cartão no tamanho de título de entrada do site; cartões pequenos com título
  menor. Raio e cinza dos cartões iguais aos de hoje.
- Opção B, carrossel de aplicativo: cartões lado a lado com rolagem horizontal (scroll-snap), como uma lista de app.
  Cartão com cerca de 360 x 420 px no desktop e 85% da largura no celular, mostrando parte do próximo. Navegação por
  teclado e por arrastar; sem barra de rolagem visível; setas discretas no desktop.
- Pare e mostre as duas para a Taiane escolher.

## 3. Artigos — regra só no desktop

- A regra "título em no máximo 2 linhas, todos com o mesmo tamanho" vale SÓ a partir de 768 px.
- No celular (até 767 px): os títulos voltam ao tamanho de título de entrada usado no resto do site no celular
  (o mesmo dos projetos e do "Me chama?"), podendo quebrar em quantas linhas precisar.
- Ajustar o teste automatizado: a verificação de 2 linhas só em 768 e 1440.

## 4. Sobre

- Tirar a foto do Sobre. Os links "Currículo em PDF" e "Mais informações no LinkedIn" sobem.
- Formação acadêmica: a PUCRS da pós em Desenvolvimento Full Stack fica com a MESMA estrutura e hierarquia das outras
  (instituição em negrito, curso, ano). O "não concluída" vira uma etiqueta discreta ao lado do ano: pílula pequena,
  fundo cinza claro, texto secundário em 12 a 14 px. Nada mais muda nesse item.

## 5. Skills — refazer (use /prototype com 2 opções)

Problema: lista solta, sem relação com o design do site.

- Tirar o subtítulo "Competências". Ficam só "Hard skills" e "Soft skills".
- As skills viram etiquetas (pílulas) que se acomodam umas ao lado e embaixo das outras, como na referência
  da nuvem de etiquetas (annnimate.com/animations/magnetic-tag-cloud). Nesta rodada, sem o efeito magnético
  (ele entra na Rodada 2). Pílula: fundo cinza claro do site, texto 16 px, raio de pílula, padding confortável.
- Ferramentas e tecnologias: pílulas com o ícone monocromático dentro, no mesmo estilo das outras.
- Opção A: três colunas iguais, alinhadas à grade do Sobre: Hard skills · Soft skills · Ferramentas.
- Opção B: Hard skills e Soft skills em duas colunas de pílulas; abaixo, uma faixa com as ferramentas em uma linha
  contínua (na Rodada 2 ela pode deslizar devagar).
- Pare e mostre as duas para a Taiane escolher.

## 6. Rodapé

- Título: "Me chama?" (com interrogação).
- As três colunas (Navegação, Contato, Redes) com EXATAMENTE o mesmo espaçamento entre itens e a mesma distância
  entre o título da coluna e o primeiro item. Usar o espaçamento de Contato e Redes como padrão.
- Ícone de relógio dinâmico, que pareça vivo como o ponto verde: ponteiro girando de forma contínua e suave e os
  dois-pontos da hora piscando devagar (1 s). Com redução de movimento, tudo parado.

## 7. Conteúdo de rascunho sem colchetes

- Substituir TODOS os marcadores entre colchetes visíveis ([TEXTO DA TAIANE], [IMAGEM DO CASE], [Chamada...],
  [RASCUNHO]...) por conteúdo de exemplo realista, em português, escrito do zero, para a Taiane ver como vai ficar.
  Ex.: chamadas dos cases, ficha (duração "6 meses"), seções dos cases sob sigilo, textos do Sobre.
- Imagens de exemplo: ilustrações neutras geradas no próprio código (formas e tons de cinza do site), sem texto.
- Todo conteúdo de exemplo fica marcado no código com o atributo data-rascunho e listado em docs/rascunhos.md,
  para ser trocado antes da 1.0.0. Um teste avisa (sem falhar) quantos rascunhos ainda existem.
