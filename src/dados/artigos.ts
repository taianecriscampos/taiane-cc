/**
 * Artigos publicados fora do site: o fixo do Substack e a lista de reserva.
 * A lista que vai para o ar vem de artigos-do-blog.ts (os 2 posts mais recentes do blog e o
 * fixo). A reserva só entra se a busca no blog falhar durante o build.
 * A lista mostra só o título, sempre inteiro, e "ano, plataforma". Todos os títulos usam o
 * mesmo tamanho, calculado para o mais longo caber em 2 linhas (ver ListaDeEntradas).
 * "Como construí meu portfólio com Claude Code" sai por enquanto e volta quando for publicado.
 */
import type { Entrada } from "../components/ui/Entrada.astro";

/** Sempre o último da lista. */
export const artigoFixo: Entrada = {
	titulo: "UX e Dev: Reconectando o Elo Perdido Entre Design e Tecnologia",
	ano: 2026,
	onde: "Substack",
	href: "https://taianecriscampos.substack.com/p/ux-e-dev-reconectando-o-elo-perdido",
	externo: true,
};

export const artigosReserva: Entrada[] = [
	{
		titulo: "Fluência em IA: Um Guia da Estrutura e Fundamentos da Colaboração Humano-IA",
		ano: 2026,
		onde: "designDivergente",
		href: "https://designdivergente.blog/fluencia-em-ia-um-guia-da-estrutura-e-fundamentos-da-colaboracao-humano-ia",
		externo: true,
	},
	{
		titulo: "O problema não está na IA, está no que vem antes dela",
		ano: 2026,
		onde: "designDivergente",
		href: "https://designdivergente.blog/o-problema-nao-esta-na-ia-esta-no-que-vem-antes-dela",
		externo: true,
	},
	artigoFixo,
];
