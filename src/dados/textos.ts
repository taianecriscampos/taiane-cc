/**
 * Textos publicados fora do site, na ordem da especificação base.
 * Sem href: texto em construção, aparece sem link.
 */
import type { Entrada } from "../components/ui/Entrada.astro";

export const textos: Entrada[] = [
	{
		titulo: "Como construí meu portfólio com Claude Code",
		ano: 2026,
		onde: "Substack",
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
	{
		titulo: "UX e Dev: Reconectando o Elo Perdido Entre Design e Tecnologia",
		ano: 2026,
		onde: "Substack",
		href: "https://taianecriscampos.substack.com/p/ux-e-dev-reconectando-o-elo-perdido",
		externo: true,
	},
];
