# Ajustes da Rodada 1 (1f) — revisão da Taiane com prints, 12/11/2026

APROVADO, não mexer: hero, Artigos, conteúdo do verso das cartas, sumário que se empilha, relógio do rodapé.
Movimentos mais ricos (molas, revelações, efeitos de foto e texto) ficam para a Rodada 2 (v1.1).

Processo: /emil-design-eng e frontend-design antes de cada item; prints em 375, 768, 1024 e 1440;
autocrítica "Antes / Depois / Por quê"; `npm run qualidade` antes de cada commit; enviar a branch design no fim.

## Projetos

1. Tablet (768 a 1199 px): o bento atual quebrou e deixou vazio enorme. Novo comportamento: os TRÊS cartões
   no mesmo formato e no mesmo tamanho, um embaixo do outro, na horizontal (visual à esquerda, texto à direita).
   Nada de cartão maior que outro, nada de buraco. Desktop continua com três lado a lado; celular, empilhados.
2. Imagem do Funis está cortando os elementos: colocar margem interna (respiro de 16 a 24 px) e usar
   `object-fit: contain` sobre um fundo neutro, para nenhum elemento da imagem encostar na borda.
3. Fundo dos três cartões: o MESMO material do menu ilha (escuro translúcido, com o mesmo desfoque).
   Textos em cores claras com contraste AA (título, chamada, metadados, "Ver resumo").
   O verso continua escuro; garantir que frente e verso se diferenciem pelo conteúdo.
4. Azul GPT e Operação logística: etiqueta "Case protegido" ao lado do título, alinhada ao topo,
   pílula pequena (14/20, peso 500) em cor de contraste sobre o fundo escuro.
5. Azul GPT e Operação logística: no espaço livre do meio, o SÍMBOLO da marca (sem o nome escrito), em cinza;
   no hover do cartão (só em telas com mouse) ganha a cor original, 200 ms ease-out. Em toque, cinza.
   Arquivos: procurar o SVG oficial do símbolo da Azul e da Luft; MOSTRAR à Taiane antes de usar.
   Se não houver SVG oficial, parar e pedir o arquivo a ela.

## Cabeçalho

6. Ao rolar, o conteúdo passa colado embaixo da ilha. A faixa com desfoque do cabeçalho deve ir de 12 a 16 px
   ABAIXO da ilha, para o conteúdo nunca parecer encostado nela.
7. Na página do case, a ilha fica travada em "01 Visão geral". Ela deve acompanhar a seção atual
   (Contexto, Problema, Processo e decisões, Solução, Resultados, Aprendizados), como na página inicial.

## Sobre

8. Espaços desproporcionais: hoje os vãos entre colunas são de 24 px e sobra um vazio enorme à direita.
   - Vãos entre colunas: iguais, entre 80 e 120 px (clamp), de forma que as três colunas ocupem a largura toda,
     da margem esquerda à direita.
   - Resumo e Formação com a mesma largura; Experiência do tamanho do conteúdo.
   - Linha do Resumo com no máximo uns 60 caracteres.
9. Etiqueta "não concluída" menor: texto 12/16, padding 2 px 8 px, peso 500, mesma cor.

## Skills e Ferramentas

10. Tirar o título "Ferramentas". A faixa de logos fica logo abaixo das Skills, como parte da mesma seção,
    a 40 a 48 px da última pílula.
11. A faixa está lenta demais: passar para 15 a 20 s por ida (continua indo e voltando, suave).
12. Esmaecimento suave nas duas pontas da faixa (mask com gradiente), para os logos não aparecerem cortados
    (hoje o "Figma" aparece cortado à esquerda).

## Página do case

13. Intro do topo: diminuir para 24/32, peso 400 (registrar na tabela como "intro de case").
14. Ficha (Empresa, Ano, Papel, Leitura): tirar a PRIMEIRA linha, a de cima de "Empresa". As outras ficam.
15. Resultados (40%, cerca de 25%, 3x): VOLTAM a ser cartões, no mesmo estilo dos cartões da página inicial.
    As linhas verticais ficam SÓ em Minha atuação / Desafio / Solução.
16. Botão "voltar ao topo": ícone ↑ em botão redondo de 44 px, discreto, no canto inferior direito; aparece
    depois de rolar uma tela; aria-label "Voltar ao topo"; leva o foco ao início da página.
    Com movimento reduzido, rolagem instantânea. Vale para o case e para a página inicial.

## Rodapé

17. Diminuir pela METADE o espaço entre os itens das colunas Navegação, Contato e Redes
    (e na mesma proporção a distância entre o título da coluna e o primeiro item).

## Conteúdo das Skills (alinhado ao LinkedIn da Taiane)

18. Regra: UMA skill por pílula. Nada de "e" juntando duas skills, nada de parênteses.
    Atualizar src/dados/skills.ts com estas listas, nesta ordem:

    Hard skills:
    Product Design · Product Discovery · UX Strategy · UX Research · Arquitetura da Informação ·
    Design de Interface · Design de Interação · Prototipagem · Testes de Usabilidade ·
    Design Systems · Design Tokens · Arquitetura de Componentes · Governança de Design Systems ·
    Service Design · Service Blueprint · Mapeamento Sistêmico · Design Engineering · Design-to-Code ·
    Front-End · AI-Driven Development · Vibe Coding · IA Generativa · Agentes de IA · MCP ·
    Foundation Models · Direção de Arte

    Soft skills (sem mudança de conteúdo):
    Pensamento sistêmico · Pensamento estratégico · Resolução de problemas complexos ·
    Colaboração multifuncional · Gestão de stakeholders · Comunicação · Liderança · Aprendizado contínuo

    A faixa de Ferramentas continua com as ferramentas de hoje (React, HTML, CSS etc. ficam só lá, sem
    repetir nas Hard skills). Conferir que as pílulas continuam lado a lado, quebrando linha, sem nenhuma
    sozinha numa linha por ser comprida demais.
