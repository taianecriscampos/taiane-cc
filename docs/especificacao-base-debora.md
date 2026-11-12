# Especificação da interface base — réplica estrutural da debora.wiki

Decisão da Taiane (11/11/2026): reconstruir a interface EXATAMENTE como a debora.wiki,
com o conteúdo da Taiane, como base. Depois a Taiane indica, passo a passo, o que muda.
Esta especificação SUBSTITUI os briefings v1 e v2 e os protótipos da 0.3.a na parte visual.

Medidas levantadas no site publicado (11/11/2026), em 1440 x 900 e 375 x 812.
Regras: nada de copiar arquivos, textos, imagens ou o selo da Debora. Replicamos medidas, grade,
hierarquia e comportamento, com conteúdo, selo e textos próprios.

## 1. Tokens

Cores:

- fundo #fafafa · fundo secundário #e5e8ec
- texto #1a2025 · texto secundário #4d575f
- borda e divisórias #cbd0d6
- marca (selo e detalhes) #ff2400
- destaque nos cases (frase-chave e marcadores de mídia) #0040ff

Tipografia:

- Schibsted Grotesk variável (SIL OFL), auto-hospedada. Pesos 400, 500 e 700.
  A Archivo já baixada fica pronta para troca futura, mas NÃO é usada agora.
- Frase da abertura: 80/80 px, peso 500 no desktop; clamp(2.5rem, 5.556vw, 5rem); 40/40 px no celular.
- Título de entrada (projetos, textos, "Vamos conversar?"): 56/56 px, peso 500; 40/40 px no celular.
- Rótulo de seção (Projetos, Textos, Sobre): 20/28 px, peso 400.
- Texto: 16/24 px, peso 400. Texto grande: 18/26 px. Pequeno: 14/20 px. Legenda: 12/18 px.
- Título do case: 48/48 px, peso 500. Título de seção do case: 32/40 px, peso 400. Subtítulo: 24/32 px.

Espaço: escala 0, 2, 4, 8, 16, 24, 32, 40, 48, 56, 80 px.

- Margem da página: 16 px no celular, 24 px no tablet, clamp(24px, 2.78vw, 40px) a partir de 1200 px.
- Espaço entre seções: 40 px no celular, 80 px a partir de 768 px.
- Grade: 12 colunas, espaço de 24 px, largura máxima 1800 px.

Raio: 8 px (foto, mídias, cartões). Pílula 9999 px.
Movimento (só para os links, por enquanto): 0.28 s, cubic-bezier(.22, 1, .36, 1).
Sublinhado dos links: 1 pt, animado da esquerda para a direita no hover e no foco.
Quebras: 768, 1200 e 1441 px (min-width).

## 2. Cabeçalho (todas as páginas)

- Fixo no topo (sticky), 56 px de altura, fundo #fafafa com 10% de opacidade e desfoque de 15 px.
- Esquerda: "Taiane Cris Campos", 16/24, link para o início.
- Direita, desktop: Projetos, Textos, Sobre — 16/24, espaço de 16 px, links com sublinhado animado.
- Celular: botão de menu 40 x 40 px à direita, abrindo um painel com os mesmos links.
- Nos cases: à direita, os links das seções do case (Contexto, Problema, Destaques, Solução final).
- Sem linha embaixo.

## 3. Página inicial

### Abertura (100% da altura da tela menos o cabeçalho)

- Coluna flexível, conteúdo no topo e base separados (space-between), 40 px de respiro no topo.
- Topo, em linha: a frase "Design de produto com pensamento sistêmico, IA e código." como h1,
  ocupando ~8 colunas; à direita, alinhado à margem, o retrato 207 x 257 px com raio de 8 px.
- Selo circular de 96 px sobrepondo o canto inferior esquerdo do retrato (~30 px para fora à esquerda e
  ~30 px abaixo). Selo PRÓPRIO: texto circular "taiane.cc · design engineer ·" em #ff2400 sobre fundo claro.
  Parado por enquanto; a rotação entra na 0.5.0.
- Base, em linha: à esquerda, botão redondo de 48 px com seta para baixo (leva a Projetos);
  à direita, "Me encontre no LinkedIn" + círculo de 40 px com seta diagonal de 20 px.
- Celular: frase 40 px no topo, retrato abaixo à esquerda, selo sobreposto, base no fim da tela.

### Seções (Projetos, Textos)

- Rótulo de seção 20/28 no topo, espaço de 24 px até a lista.
- Lista: cada entrada é uma linha de grade com 3 áreas: 6 colunas (título), 3 (descrição), 3 (metadados à direita).
  - Título 56/56, peso 500. Descrição 16/24, até 3 linhas. Metadados: "2025, Inlead" + círculo de seta, alinhados à direita.
  - Entrada mais recente com etiqueta "Novo": pílula escura (#1a2025), texto claro 16 px negrito, logo após o título.
- Entre entradas: UMA divisória de 1 px #cbd0d6, com 24 px acima e abaixo. Nenhuma outra linha.
- Texto "em construção": cores secundárias (#4d575f), sem link, com ponto de 10 px + "Em construção" nos metadados.
- Celular: tudo empilhado em 1 coluna; título 40 px.

Conteúdo de Projetos (ordem):

1. Funis interativos — "2025, Inlead" — etiqueta Novo — chamada da coleção.
2. Azul GPT — "2024, Azul · WeFit".
3. Operação logística — "2023, Luft · WeFit".

Conteúdo de Textos:

1. Como construí meu portfólio com Claude Code — "2026, Substack" — Em construção.
2. Design Engineering começa antes do código — "2026, designDivergente" — link.
3. designDivergente: do planejamento ao roadmap de evolução — "2026, designDivergente" — link.
4. UX e Dev: reconectando o elo perdido — ano e plataforma conforme o post no Substack — link.
   Links externos com "— abre em nova aba" para leitor de tela.

### Sobre

- Rótulo "Sobre". Grade de 3 áreas (6 / 3 / 3 colunas):
  - Área 1: texto do sobre (16/24, até 4 linhas) + "Acessar currículo em PDF" com círculo de seta
    (enquanto o PDF não existir: texto "Currículo em PDF, em breve", sem link).
  - Área 2: "Experiência" (16/24) e a lista: cada item com empresa em negrito, cargo e anos, 3 linhas de 24 px,
    8 px entre itens.
  - Área 3: "Educação", mesmo padrão: instituição em negrito, curso, anos.
- Celular: 1 coluna.

### Vamos conversar?

- Linha de grade 6 / 3 / 3: "Vamos conversar?" no tamanho de título de entrada (56/56) · texto curto (16/24) ·
  "Me encontre no LinkedIn" com círculo de seta, à direita.
- Texto: "Sobre vagas, projetos e trocas sobre design, IA e código." (rascunho)

### Rodapé

- 104 px, em linha, extremos: "Taiane Cris Campos @ 2026" · "Ribeirão Preto • SP" (ponto de 5 px).
- Sem linha. Seções Ferramentas e Explorações NÃO entram nesta base.

## 4. Página de case

- Topo: coluna central de 668 px (colunas 4 a 9): h1 48/48; abaixo, 24 px, metadados 14/20 com pontos de 10 px:
  "2025 • Inlead • N minutos de leitura".
- Corpo: linhas de grade 3 / 6 / 3 (314 / 668 / 314 px no desktop), espaço de 24 px.
  - Primeira linha: mídia (imagem ou vídeo, raio 8 px), frase-resumo 18/26, e 3 cartões de resumo
    (Minha atuação, Desafio, Solução) em grade de 3, raio 8 px, padding 16 px, 14/20, 32 px entre rótulo e texto.
  - Demais linhas: título de seção 32/40 na coluna esquerda, fixo ao rolar (sticky) até a próxima seção;
    texto na coluna central, parágrafos 16/24 com 16 px entre si.
  - Destaques: subtítulos 24/32; parágrafos que começam com "O que eu fiz:" e "O que isso viabilizou:" em negrito.
  - Frase-chave de cada seção pode vir em #0040ff.
  - Mídias numeradas: marcador redondo de 20 px #0040ff com número branco 14 px no canto superior esquerdo.
- Entre seções do case: divisória de 1 px #cbd0d6, 48 px acima e abaixo.
- Fim: "Quer saber mais detalhes? Fale comigo no LinkedIn" + nota de confidencialidade (14/20, cor secundária).
- Celular: 1 coluna, títulos de seção acima do texto, sem sticky.
- Os cases do Azul GPT e da Luft seguem o mesmo molde, com "[TEXTO DA TAIANE]".

## 5. Fora desta base (fica para depois)

Animação de entrada palavra por palavra, transição entre páginas, rotação do selo e títulos fixos animados (0.5.0);
logos, ferramentas e conteúdo rico dos cases (0.4.0); modo escuro (1.1.0).
O menu ilha, os blocos bento, a textura e a Archivo saem desta base. Os protótipos da 0.3.a são removidos.
