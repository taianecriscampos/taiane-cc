# taiane.cc

Portfólio de Taiane Cris Campos, Senior Product Designer · Design Engineer.
Design de produto com pensamento sistêmico, IA e código.

Site estático feito com [Astro](https://astro.build), TypeScript em modo strict e CSS puro,
sem framework de CSS e sem back-end.

## Como rodar

Precisa do Node.js 22 ou mais recente.

```sh
npm install        # instala as dependências
npm run dev        # servidor local em http://localhost:4321
npm run check      # confere tipos e erros do código
npm run build      # gera o site final na pasta dist/
npm run preview    # abre o site final localmente
```

O Laboratório, com todos os tokens do design system, fica em http://localhost:4321/laboratorio.

## Estrutura de pastas

```text
src/
├── assets/              imagens tratadas pelo astro:assets
├── components/
│   ├── ui/              átomos: botão, etiqueta, link
│   ├── blocos/          seções da página
│   └── layout/          estrutura da página (LayoutBase)
├── content/
│   └── cases/           cases em Markdown, validados pelo schema
├── content.config.ts    schema Zod das coleções de conteúdo
├── pages/               cada arquivo vira uma página do site
├── scripts/
│   └── movimento/       animações (GSAP e Lenis), um módulo por efeito
└── styles/
    ├── tokens.css       tokens em três camadas: primitivos, semânticos e componentes
    └── global.css       camadas: reset, tokens, base, componentes e utilitários
public/                  arquivos servidos como estão (favicon)
docs/                    status, decisões e referências do projeto
```

## Documentação

- [Status do projeto](docs/status.md): etapas, fases e o que vem a seguir.
- [ADR 0001, arquitetura](docs/decisoes/0001-arquitetura.md): por que Astro estático, sem back-end.
- [ADR 0002, encontrabilidade](docs/decisoes/0002-encontrabilidade.md): SEO e visibilidade em IAs.
- [Referências](docs/referencias.md): o que inspira o site e o que fica de fora.
- [CLAUDE.md](CLAUDE.md): regras do projeto para o Claude Code.
