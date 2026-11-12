/**
 * Artigos publicados fora do site, na ordem da direção de arte v3.
 * A lista mostra só o título, sempre inteiro, e "ano, plataforma". Todos os títulos usam o
 * mesmo tamanho, calculado para o mais longo caber em 2 linhas (ver ListaDeEntradas).
 * "Como construí meu portfólio com Claude Code" sai por enquanto e volta quando for publicado.
 */
import type { Entrada } from "../components/ui/Entrada.astro";

export const artigos: Entrada[] = [
	{
		titulo: "UX e Dev: Reconectando o Elo Perdido Entre Design e Tecnologia",
		ano: 2026,
		onde: "Substack",
		href: "https://taianecriscampos.substack.com/p/ux-e-dev-reconectando-o-elo-perdido",
		externo: true,
	},
	{
		titulo:
			"Design Engineering começa antes do código: o que aprendi construindo o designDivergente",
		ano: 2026,
		onde: "designDivergente",
		href: "https://designdivergente.blog/design-engineering-comeca-antes-do-codigo-o-que-aprendi-construindo-o-design-divergente",
		externo: true,
	},
	{
		titulo: "designDivergente: do planejamento ao roadmap de evolução",
		ano: 2026,
		onde: "designDivergente",
		href: "https://designdivergente.blog/designdivergente-do-planejamento-ao-roadmap-de-evolucao",
		externo: true,
	},
];
