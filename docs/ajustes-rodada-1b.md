# Ajustes da Rodada 1 (1b) — revisão da Taiane, 11/11/2026

Base: a versão atual em localhost (aprovada como direção: "ficou melhor").
Projetos: bento escolhido (ver mensagem anterior). Efeitos de movimento continuam na Rodada 2.
Skills: frontend-design, /emil-design-eng, mobile-native e break-ui. Antes de codar, dizer quais regras se aplicam.
Rodar a qualidade ANTES de cada commit.

## 1. Menu ilha — idêntico à referência visual

Referências: referencias/menu-ilha-fechado.png e referencias/menu-ilha-aberto.png (prints da Taiane).
Implementação própria (não copiar código do annnimate).

Fechado (cápsula):

- Forma de pílula, fundo escuro translúcido (preto com ~60–70% de opacidade) com desfoque do que está atrás
  (backdrop-filter blur ~20px), sem borda visível, sem sombra pesada.
- Conteúdo em linha: número da seção em cinza claro e menor ("02"), nome da seção em branco ("Projetos"),
  e um ponto branco pequeno à direita.
- Altura ~48px, padding lateral generoso, texto ~16px, peso médio.
- O número e o nome mudam conforme a seção visível.

Aberto (painel):

- O mesmo material translúcido escuro com desfoque, cantos bem arredondados (~24px).
- Cabeçalho do painel: "Seções" à esquerda e "Fechar" à direita, ambos em cinza claro, menores.
- Lista: cada linha com número em cinza ("01") e nome em branco maior ("Início", "Projetos", "Artigos", "Sobre");
  ponto branco à direita da linha da seção atual.
- Espaço vertical confortável entre as linhas (~48–56px por linha).
- Transição: a cápsula cresce até o painel (morph) com leve mola; ao fechar, encolhe sem mola.
  Conteúdo antigo some com leve desfoque enquanto o novo entra (até 300 ms, ease-out forte).
- Acessibilidade: botão com aria-expanded e aria-controls; Esc e "Fechar" fecham e devolvem o foco;
  setas e Tab navegam; contraste AA do texto sobre o fundo translúcido em qualquer parte da página.

## 2. Cabeçalho e primeira dobra

- A primeira dobra inteira (cabeçalho, título, foto e faixa de baixo) cabe na altura da tela em TODAS as larguras,
  usando 100svh. A faixa de baixo nunca pode ficar depois da primeira dobra.
- Título "Design de produto com pensamento sistêmico, IA e código.": MESMA fonte do site (Google Sans Flex),
  largura normal (sem condensar), em caixa normal (sem caixa alta), com espaço entre letras levemente
  diferente do resto (−0.035em, ajustável).
- Faixa de baixo em 2 colunas: esquerda "Senior Product Designer | Design Engineering" + seta ↓ (vai a Projetos);
  direita "Me encontre no LinkedIn" + seta ↗.
- Celular (até 767px):
  - Cabeçalho: "Tai" no lugar do nome inteiro (com aria-label "Taiane Cris Campos, início"); a ilha continua no centro.
  - "Remoto ou híbrido" com o ponto verde fica ACIMA da foto, não depois.
  - Faixa de baixo em 2 colunas, textos resumidos para caber: esquerda "Design Engineer ↓", direita "LinkedIn ↗".

## 3. Projetos (bento)

- Nos cartões sem chamada (Azul GPT e Operação logística), colocar texto-modelo marcando o lugar do conteúdo:
  "[Chamada do case: uma frase sobre o problema e o resultado.]" no estilo de marcador de rascunho.

## 4. Artigos

- Abandonar as reticências e a revelação no hover. O título aparece INTEIRO, sempre.
- Regra: no máximo 2 linhas. Todos os títulos de artigo usam o MESMO tamanho, calculado para que o título mais
  longo caiba em 2 linhas em cada largura (clamp com unidades de container query; sem JavaScript se possível).
- Teste automatizado que falha se algum título de artigo passar de 2 linhas em 375, 768 e 1440.

## 5. Sobre

- Três colunas com títulos no mesmo estilo: "Resumo", "Experiência profissional", "Formação acadêmica".
- Na coluna Resumo: o texto e, ABAIXO dele, a foto.
- Abaixo das três colunas, uma linha: à esquerda "Currículo em PDF" + seta ↗ (abre em nova aba);
  no canto oposto "Mais informações no LinkedIn" + seta ↗.
- O PDF já está em public/curriculo.pdf (metadados removidos). O link fica ativo e abre em nova aba.
  Decisão da Taiane: o telefone fica no PDF por enquanto e sai quando ela se recolocar.
  Registrar essa exceção no ADR 0003, com a data e o motivo.

## 6. Skills (nova seção, antes do rodapé)

- Título "Skills", duas colunas: "Hard skills" e "Soft skills".
- Hard skills:
  - Competências: Product Discovery; UX Strategy e UX Research; Arquitetura da Informação; Design de Interação;
    Design Systems e Design Tokens; Service Design e Service Blueprint; Testes de Usabilidade;
    Design Engineering (design-to-code); Desenvolvimento orientado por IA (agentes, MCP, skills).
  - Ferramentas e tecnologias, com ícone monocromático + nome: Figma, Claude Code, Astro, TypeScript, JavaScript,
    HTML, CSS, React, Next.js, GSAP, Git, GitHub, Vercel, Playwright, Sanity.
    Ícones do pacote Simple Icons (licença CC0), embutidos como SVG no próprio site, em cinza, sem cores de marca.
    Claude Code: usar o ícone oficial da Anthropic se existir no pacote; senão, só o nome.
- Soft skills: Pensamento sistêmico; Pensamento estratégico; Resolução de problemas complexos;
  Colaboração multifuncional; Gestão de stakeholders; Comunicação; Liderança; Aprendizado contínuo.
- Visual discreto. A nuvem magnética fica para a Rodada 2.

## 7. Rodapé (fundo preto, mantém o formato atual)

- Trocar o título "Vamos conversar?" por "Me chama" (escolha da Taiane).
- Contato, nesta ordem: LinkedIn ↗; designdivergente.blog ↗; e-mail com botão de copiar
  (ícone de copiar; ao clicar, copia e mostra "Copiado" por 2 s, anunciado ao leitor de tela com aria-live).
- Todos os links externos com a seta ↗: LinkedIn, Substack, GitHub, designDivergente.
- Localização: "Ribeirão Preto / São Paulo, Brasil", com um ícone de relógio no meio, animado de forma contínua e sutil
  (como o ponto verde), e a hora local. Com redução de movimento, o ícone fica parado.
