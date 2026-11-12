# Briefing de design v2 — revisão da Taiane, 11/11/2026

Substitui as decisões visuais do briefing v1 onde houver conflito. Base: revisão da 0.2.a.
Diagnóstico da Taiane: "faltou personalidade na vitrine; ficou com cara de documento, poluído, cheio de linhas".

## Princípios

1. Referência principal continua sendo a debora.wiki: limpeza, respiro, poucos elementos por tela, "parece um slide clean".
2. Linhas só para separar itens de uma lista (um projeto do outro). Para agrupar informação, usar blocos bento
   (cantos arredondados, fundo sutil), como na vexoo.framer.website. Nada de linha acima de título, de foto ou abaixo do header.
3. Todos os títulos de seção com o MESMO tamanho, como na debora.wiki (frase de abertura, nomes dos cases,
   textos, "Vamos conversar?"). Textos de apoio pequenos, de 1 a 3 linhas.
4. Tipografia: a de realfood.gov é a Die Grotesk (Klim, paga) com Geist Mono. Alternativa gratuita escolhida:
   Archivo (variável, com eixo de largura, para títulos mais estreitos e fortes) + Geist Mono para detalhes técnicos.
   Escala de tamanhos inspirada na debora.wiki.
5. Fundo com textura sutil (ruído leve), como na Vexoo, em vez de branco chapado. Cantos arredondados.
6. Personalidade: parecer um aplicativo bem-feito, porque a Taiane desenha aplicativos.

## Página inicial (ordem)

1. Menu flutuante tipo aplicativo (tab bar), com ícones e rótulos acessíveis. Embaixo no celular; no desktop,
   flutuante (topo ou base, testar). Itens: Início, Projetos, Sobre, Contato.
2. Abertura estilo debora.wiki: SEM o nome como título (o nome fica só na marca do menu/rodapé).
   Título = a frase "Design de produto com pensamento sistêmico, IA e código." Foto com cantos arredondados.
   Seta para baixo e link "Me encontre no LinkedIn".
   Um bloco bento pequeno, estilo Vexoo: "Design Engineer", Ribeirão Preto, hora local e status "Disponível"
   com ponto verde aceso.
3. Projetos: uma linha separando um projeto do outro, só isso. Título do projeto é o maior texto da linha.
   Ano como etiqueta (tag) ao lado do título. Cliente com seta, como link. Chamada curta.
4. Sobre: texto curto + link "Acessar currículo em PDF" (em breve até a 0.4.0).
5. Experiência e Formação lado a lado, na mesma linha, em colunas. Cada item com 2 linhas, pequeno, discreto.
   Sem títulos repetidos. Teste na 0.4.0: logos em cinza das empresas e instituições.
6. Textos: como na debora.wiki. Posts do designDivergente e do Substack, com ano e plataforma, e itens
   "em produção" como etiqueta.
7. Ferramentas: discretas. Logos em cinza passando devagar (0.4.0 logos, 0.5.0 movimento) e nível de domínio
   qualitativo (ex.: uso diário, domínio, em aprendizado), nunca barras de porcentagem.
8. Vamos conversar? Como na debora.wiki: título do mesmo tamanho, uma linha de texto e o link.

## Página de case

- Ficha (empresa, ano, papel) e resultados em blocos bento, não em linhas.
- Precisa suportar conteúdo rico (0.4.0): imagem, vídeo (no lugar de GIF), bloco de código com destaque de sintaxe
  compatível com a CSP, embed do Figma e do Notion (exige nova ADR de segurança), citação e destaque.
- Futuro (1.1+): diagramas interativos navegáveis.

## Depois (não agora)

- 0.5.0: elemento geométrico girando ao lado da foto (inspirado no selo da Debora, outra geometria), efeito na foto,
  rastro binário.
- 1.1.0: alternância claro/escuro (toggle), como na Vexoo; processo em ciclos.
