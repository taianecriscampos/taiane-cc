# Ajustes da Rodada 1 (1d) — revisão da Taiane, 12/11/2026

APROVADO, não mexer: espaçamentos da ilha, primeira dobra, Artigos, links do Sobre (Currículo em PDF e LinkedIn),
página do case de Funis, relógio animado do rodapé, Projetos no celular.

## Processo obrigatório

1. Antes de codar cada item: aplique /emil-design-eng e frontend-design ao contexto do site e liste as regras
   que valem para o item.
2. Nesta rodada NÃO há protótipo: as decisões abaixo já foram tomadas pela Taiane.
3. Depois de implementar: prints em 375, 768 e 1440, autocrítica "Antes / Depois / Por quê" comparando com
   Artigos e Sobre. Corrija antes de mostrar.
4. `npm run qualidade` antes de cada commit.

## 1. Cabeçalho — "Remoto ou híbrido" no canto direito

- Desktop (768 px ou mais): "Remoto ou híbrido" com o ponto verde fica NO CABEÇALHO, alinhado à direita,
  na mesma linha do nome e da ilha. Sai de baixo do título.
- Celular (até 767 px): no cabeçalho, canto direito, só "Remoto" com o ponto verde, em 14 px, para equilibrar
  com "Tai" à esquerda e a ilha no centro. O texto completo fica no aria-label ("Disponível para trabalho
  remoto ou híbrido").
- Garantir que nome, ilha e status não se encostem em 320 px.

## 2. Projetos — três cartões no desktop

- Desktop (1200 px ou mais): uma linha com TRÊS cartões iguais (4 colunas cada da grade de 12, espaço de 24 px).
  Altura do cartão entre 380 e 440 px. Imagem no topo em 16:9, raio de 8 px; abaixo, título no tamanho de
  título de seção do case (32/40), chamada de 1 a 2 linhas (16/24, texto secundário) e "ano, empresa" + seta.
- Tablet (768 a 1199 px): dois por linha. Celular: mantém o layout atual (aprovado).
- Cartão: raio de 24 px, fundo cinza secundário do site, sem borda. Hover só em (hover: hover).

### 2.1 Funis interativos

- O cartão leva à página do case (seta reta →). É o único case com página nesta versão.

### 2.2 Azul GPT e Operação logística — cartão que vira (como carta de baralho)

- Ao clicar (ou Enter/Espaço), o cartão gira no eixo Y e mostra o verso. Clicar de novo (ou no botão
  "Voltar") desvira.
- Implementação: o cartão é um `<button>` com aria-expanded e aria-controls; frente e verso ficam no HTML
  (o leitor de tela lê o verso quando aberto). `perspective` no pai, `transform: rotateY(180deg)`,
  `backface-visibility: hidden`. Duração 350 a 400 ms, cubic-bezier(0.23, 1, 0.32, 1). Só CSS, sem GSAP.
  Com prefers-reduced-motion: troca por esmaecimento simples de 150 ms, sem girar.
- Na frente, um indicador discreto no lugar da seta: "Ver resumo" + ícone de girar.
- O verso tem o mesmo tamanho da frente, fundo #1a2025, texto claro, padding de 24 px. Se o texto não couber
  em 375 px, reduzir para 14/20, nunca cortar.
- As páginas /cases/azul-gpt e /cases/operacao-logistica SAEM desta versão (não gerar a rota). Os arquivos
  de conteúdo ficam no repositório marcados como rascunho para a v1.1.
- Textos (finais, aprovados para publicar; remover o data-rascunho deles):

**Azul GPT — frente**

- Título: Azul GPT
- Chamada: Assistente de IA generativa para a operação consultar normas técnicas direto na fonte.
- Meta: 2024, Azul · WeFit

**Azul GPT — verso**

> Em parceria com a OpenAI, a Azul criou um assistente interno para tripulantes e times da operação.
> Antes, eles procuravam regras técnicas em dezenas de PDFs. Com o Azul GPT, escolhem uma base de
> conhecimento, perguntam e recebem a resposta a partir do documento oficial.
>
> **Minha atuação:** arquitetura da informação, design de interface e de interação, protótipos e a versão
> de pré-produção da interface. Desenhei os fluxos felizes, de erro e de exceção, e contribuí com o design
> system próprio do produto.
>
> **O desafio:** desenhar para uma tecnologia nova para todo mundo, sem legado de referência, e fazer
> times internos trocarem o jeito de trabalhar por ela.
>
> Case em construção. Quer saber mais? Me chama no LinkedIn ↗

**Operação logística — frente**

- Título: Operação logística
- Chamada: Service blueprint de uma operação que vivia no papel e no boca a boca.
- Meta: 2023, Luft · WeFit

**Operação logística — verso**

> A Luft tinha processos no papel, no boca a boca e em sistemas antigos, cheios de lacunas. Antes de
> inovar, era preciso enxergar a operação inteira.
>
> **Minha atuação:** em dupla com outro designer, que fazia as entrevistas e a imersão em campo, eu
> documentei, mapeei e ilustrei as descobertas no service blueprint, trabalhando remotamente.
>
> **O resultado:** o mapa revelou pontos de contato e processos informais que a própria empresa não
> conhecia, e virou a base para decidir o que sistematizar primeiro, com valor para a empresa e para
> quem trabalha nela.
>
> Case em construção. Quer saber mais? Me chama no LinkedIn ↗

## 3. Sobre — colunas pelo conteúdo

Problema: Resumo e Formação têm quase a mesma largura, Experiência é mais estreita e sobra um vão enorme entre
Experiência e Formação.

- As três colunas passam a ter a largura do próprio conteúdo, com o MESMO espaço entre elas:
  Resumo começa na margem esquerda, Formação termina alinhada à margem direita, e Experiência fica no meio
  com distâncias iguais para os dois lados (ex.: grid com `grid-template-columns: minmax(0, 40ch) auto auto`
  e `justify-content: space-between`, ou a solução equivalente mais limpa).
- O Resumo limita a largura de leitura (cerca de 40 a 45 caracteres por linha).
- Celular: uma coluna, como hoje.

## 4. Skills — refazer com a mesma qualidade do resto

Decisão: opção A, três colunas que repetem EXATAMENTE as colunas do Sobre (mesmas larguras e espaços do item 3),
para as duas seções conversarem.

- Rótulo de seção "Skills" (20/28), igual a "Sobre". Sem subtítulo "Competências".
- Títulos das colunas no mesmo estilo dos títulos do Sobre: "Hard skills", "Soft skills", "Ferramentas".
- Pílulas: `display: flex; flex-wrap: wrap; gap: 8px`. Cada pílula com 36 px de altura, padding 0 14px,
  fundo #e5e8ec, texto 15 a 16 px #1a2025, peso 400, raio de pílula, sem borda, sem sombra.
- Ferramentas: a mesma pílula com ícone monocromático de 16 px em #4d575f, 8 px antes do nome
  (Simple Icons, CC0, SVG embutido). Sem ícone disponível: só o nome, mesma pílula.
- Espaço entre o título da coluna e as pílulas igual ao do Sobre.
- Celular: colunas empilhadas, 40 px entre elas; pílulas continuam quebrando linha.
- Na autocrítica, responder: a seção parece da mesma família de Sobre e Artigos? Se não, ajustar antes de mostrar.

## 5. Rodapé

- Título: "Me chama!" (com exclamação, não interrogação).

## 6. Case de Funis interativos — conteúdo real

- Ler o post do Substack do case (link em docs/referencias.md ou docs/imagens-case-funis.md) e usar o texto
  dele, adaptado ao molde da página, no lugar de todo rascunho do case. Manter os números já aprovados
  (40% menos ajustes manuais, cerca de 25% menos tempo, variações 3x mais rápidas), a linha de método e o
  agradecimento ao Carlos Giachetto.
- Baixar as imagens listadas em docs/imagens-case-funis.md para src/assets/cases/funis-interativos/,
  otimizar com o componente de imagem do Astro e escrever texto alternativo descritivo em cada uma.
  O diagrama do Fares Farhan NÃO entra.

## 7. Rascunhos restantes

- Sobre: trocar o texto de exemplo do Resumo pelo resumo de docs/curriculo.md (curto, até 4 linhas).
- Rodar o teste de rascunhos: a meta é ZERO na home e no case de Funis.
- Registrar na ADR 0003 a exceção do telefone no currículo em PDF (decisão da Taiane, temporária, até
  conseguir trabalho).
