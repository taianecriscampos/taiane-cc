# Ajustes da Rodada 1 (1e) — revisão da Taiane, 12/11/2026

Substitui o pedido de "Revisão da 1d" onde houver conflito.

APROVADO, não mexer: primeira dobra (hero), Artigos (desktop e celular), rodapé, cabeçalho, menu ilha.
Efeitos no texto e na foto do hero ficam para a Rodada 2.

## Regra que vale para TODOS os itens: hierarquia tipográfica única

A Taiane apontou que "cada hora muda a tipografia". A partir de agora, só os tamanhos da escala do site:

| Papel                                              | Tamanho               | Peso       | Cor              |
| -------------------------------------------------- | --------------------- | ---------- | ---------------- |
| Título de entrada (projetos, "Me chama!")          | 56/56 (40 no celular) | 500        | texto            |
| Título de cartão e de seção do case                | 32/40                 | 500        | texto            |
| Texto de destaque (intro, textos dos resumos)      | 20/28                 | 400        | texto            |
| Texto                                              | 16/24                 | 400        | texto            |
| Rótulo (Minha atuação, Desafio, nomes das colunas) | 16/24                 | 400        | texto secundário |
| Pequeno (metadados, etiquetas)                     | 14/20                 | 400 ou 500 | secundário       |

Proibido criar tamanho novo, comprimir texto ou usar negrito no meio de parágrafo para fazer papel de título.
Espaços só da escala (8, 16, 24, 32, 40, 48, 56, 80).

## Processo obrigatório

1. Antes de cada item: /emil-design-eng e frontend-design no contexto do site; liste as regras que valem.
2. Depois: prints em 375, 768, 1024 e 1440 e autocrítica "Antes / Depois / Por quê" comparando com
   Artigos e o hero. Corrija antes de mostrar.
3. `npm run qualidade` antes de cada commit.

## 1. Projetos

### 1.1 Tirar as ilustrações

- Tirar as ilustrações cinza (wireframe e diagrama) do Azul GPT e da Operação logística. Elas não comunicam nada.
- Funis interativos continua igual (com imagem), mas a capa troca por uma imagem do artigo SEM texto escrito.

### 1.2 Bento inteligente, sem buraco

- Desktop (1200 px ou mais): três cartões lado a lado, mesma altura (como hoje).
- Tablet (768 a 1199 px): Funis ocupa a largura toda, em formato horizontal (imagem à esquerda, texto à direita);
  embaixo, Azul GPT e Operação logística lado a lado. Nunca sobra espaço vazio.
- Celular: empilhados.

### 1.3 Frente dos cartões sem imagem (Azul GPT e Operação logística)

- Cartão tipográfico, mesmo fundo e raio dos outros: título (32/40) no topo, chamada (16/24, secundário) logo
  abaixo, e embaixo, colado na base, "ano, empresa" à esquerda e "Ver resumo" + ícone à direita.
  O espaço livre fica no meio, de propósito, como respiro.
- Ícone de "Ver resumo": tirar o ícone circular (parece carregamento). Usar um ícone que comunique virar a carta:
  seta curva ABERTA (ex.: Lucide `redo-2` ou `rotate-3d`) ou mão/dedo. Mostrar as duas opções no print para a Taiane.

### 1.4 Verso dos cartões — mesma hierarquia do site

- Fundo escuro (#1a2025) aprovado. Padding igual ao da frente.
- Ordem: título (32/40) · subtítulo (16/24, secundário claro) · espaço de 24 · blocos com rótulo (16/24, secundário)
  e texto (16/24), 16 px entre blocos · rodapé do cartão colado na base.
- Rodapé do verso, uma linha só: à esquerda "Quer saber mais? Me chama no LinkedIn ↗"; à direita "Voltar".
  A frase "Case em construção. Quer saber mais?" solta SAI.
- Os três cartões da linha têm a mesma altura: se o verso precisar de mais espaço, a linha inteira cresce.
  Nada comprimido, nada cortado, sem texto em 14 px.
- Textos novos (mais curtos):

**Azul GPT**

- Subtítulo: Assistente interno de IA generativa, criado com a OpenAI, para a operação consultar normas técnicas
  direto no documento oficial.
- Minha atuação: Arquitetura da informação, design de interface e de interação, protótipos e a interface de
  pré-produção, com todos os fluxos de sucesso, erro e exceção.
- O desafio: Desenhar para uma tecnologia nova para todo mundo e fazer times internos trocarem o jeito de trabalhar
  por ela.

**Operação logística**

- Subtítulo: Service blueprint de uma grande operação logística que vivia no papel, no boca a boca e em sistemas antigos.
- Minha atuação: Em dupla com outro designer, que fazia a imersão em campo, eu documentei, mapeei e ilustrei
  as descobertas, remotamente.
- O resultado: O mapa revelou pontos de contato e processos informais que a empresa não conhecia e virou a base
  para decidir o que sistematizar primeiro.

## 2. Sobre — refazer como foi pedido

- Voltar o texto do Resumo para a versão ANTERIOR à rodada 1d (a Taiane não pediu para mudar).
- Colunas: Resumo e Formação acadêmica com a MESMA largura, como antes. Só a Experiência profissional fica mais
  estreita, do tamanho do próprio conteúdo. Ajustar os ESPAÇOS entre as colunas, que ficam iguais.
  Sugestão: `grid-template-columns: 1fr auto 1fr` com o mesmo `column-gap` nos dois vãos.
- "Currículo em PDF ↗" fica logo abaixo do texto do Resumo, na coluna do Resumo.
  "Mais informações no LinkedIn ↗" fica na coluna da Formação, alinhado na MESMA linha do "Currículo em PDF"
  (segunda linha da grade, os dois no mesmo alinhamento de base).
- Etiqueta "não concluída": peso 500 ou 600, mesma cor de hoje.

## 3. Skills — só duas colunas

- Duas colunas: Hard skills e Soft skills (6 colunas cada na grade de 12).
- Nas duas, o comportamento que hoje está nas Soft skills: pílulas lado a lado, quebrando linha quando acaba o espaço.
  Nunca uma pílula por linha.
- Ferramentas saem daqui.

## 4. Nova seção: Ferramentas

- Seção própria, depois de Skills, com o mesmo rótulo de seção de Projetos, Artigos e Sobre ("Ferramentas").
  Não entra no menu ilha.
- Uma faixa horizontal com logo + nome de cada ferramenta, SEM pílula, SEM fundo, um ao lado do outro.
- Movimento de letreiro: a faixa vai e volta bem devagar (vai até o fim e volta, sem duplicar itens),
  só CSS com `transform: translateX`, algo entre 40 e 60 s por ida. Para quando o mouse ou o foco está na faixa.
  Com movimento reduzido: parada, e a faixa rola com o dedo/trackpad.
- Logos em cinza (monocromático) por padrão; no hover ou foco de cada ferramenta, o logo ganha a cor original
  da marca (transição de 200 ms, ease-out). Em toque, ficam em cinza.
- Lista semântica (`ul`), nomes legíveis por leitor de tela.

## 5. Página do case de Funis

### 5.1 Topo

- Intro em texto grande: peso 400 (hoje está grossa demais).
- Etiquetas de disciplina: ficam como estão. Cor por assunto e interação ficam para a Rodada 2.
- Capa: tirar a moldura cinza (está apagada). A imagem fica direto na página, com raio de 24 px.

### 5.2 Resultados e resumo — sem cartões, com linhas verticais

- Resultados (40%, cerca de 25%, 3x): três colunas separadas por linhas VERTICAIS de 1 px #cbd0d6, sem fundo.
  Número em 56/56 peso 500; descrição embaixo em 16/24.
- Minha atuação, Desafio e Solução: o mesmo padrão, três colunas com linhas verticais, sem fundo.
  Rótulo em 16/24 secundário; texto em 20/28 (texto de destaque), não menor.
- No celular, as colunas empilham e as linhas verticais viram horizontais.

### 5.3 Linhas entre seções

- Tirar a linha entre o bloco de resumo e "Contexto". Linhas horizontais só ENTRE as seções do texto
  (Contexto | Problema | Processo de decisões | ... | Solução). A tipografia já separa o resto.

### 5.4 Sumário que se empilha (coluna da esquerda)

Comportamento pedido pela Taiane:

- A coluna da esquerda vira um sumário fixo (sticky) com os títulos das seções.
- A seção que está sendo lida aparece com o título grande (32/40).
- Quando o leitor passa de uma seção, o título dela NÃO some: diminui para 16/24, cor secundária, e fica empilhado
  acima do título da seção atual. Ao fim, o sumário mostra a lista de todas as seções já lidas, pequenas, e a atual
  grande embaixo.
- Cada item pequeno é um link: clicar rola até a seção (respeitando a altura do cabeçalho).
- Rolando para cima, o caminho inverso.
- Técnica: IntersectionObserver; animar com transform (scale) e opacity, até 300 ms, cubic-bezier(0.23, 1, 0.32, 1).
  Com movimento reduzido, troca sem animação.
- Acessibilidade: `nav` com aria-label "Sumário do case", item atual com aria-current. Os h2 das seções continuam
  no HTML (podem ficar visualmente ocultos no desktop, onde o sumário cumpre o papel).
- Celular: sem sumário fixo; títulos acima do texto, como hoje.
- Se algo não ficar claro, PERGUNTE à Taiane antes de implementar.

### 5.5 Fim do case

- Tirar "Quer saber mais? Fale comigo no LinkedIn". O rodapé já faz esse papel.

## 6. Pendências da revisão anterior

- Conferir se a ilha mostra "01 Início" no topo da página.
- Depois de tudo: qualidade, commit e enviar a branch design para o GitHub (para ver na Vercel).
