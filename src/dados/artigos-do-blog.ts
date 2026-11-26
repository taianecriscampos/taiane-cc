/**
 * Artigos da página inicial, montados no momento do build:
 * os 2 posts mais recentes do blog designDivergente e, por último, o artigo fixo do Substack.
 *
 * A busca vai direto na API pública do Sanity, o banco de conteúdo do blog (dataset público,
 * sem senha nem token). Assim ela não depende de o site do blog estar no ar.
 * Se a busca falhar, o build segue com a lista de reserva de artigos.ts.
 * O site é atualizado uma vez por dia por .github/workflows/rebuild-diario.yml.
 */
import { z } from "astro/zod";
import type { Entrada } from "../components/ui/Entrada.astro";
import { artigoFixo, artigosReserva } from "./artigos";

const API = "https://8n0erfvy.api.sanity.io/v2025-08-15/data/query/production";
const BLOG = "https://designdivergente.blog";
const QUANTIDADE = 2;
const ESPERA_MAXIMA_MS = 8000;

/* publishedAt <= now() deixa de fora posts com data no futuro. */
const CONSULTA = `*[_type == "post" && defined(slug.current) && publishedAt <= now()]
	| order(publishedAt desc) [0...${QUANTIDADE}] { title, "slug": slug.current, publishedAt }`;

const resposta = z.object({
	result: z
		.array(
			z.object({
				title: z.string().trim().min(1).max(200),
				slug: z.string().min(1),
				publishedAt: z.string().refine((data) => !Number.isNaN(Date.parse(data))),
			}),
		)
		.length(QUANTIDADE),
});

/* O ano no fuso de São Paulo, o mesmo que o blog usa para mostrar as datas. */
const anoDe = (data: string) =>
	Number(
		new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: "America/Sao_Paulo" }).format(
			new Date(data),
		),
	);

/** O parâmetro `buscar` existe para os testes simularem respostas e falhas. */
export async function buscarArtigos(buscar: typeof fetch = fetch): Promise<Entrada[]> {
	try {
		const url = `${API}?${new URLSearchParams({ query: CONSULTA, perspective: "published" })}`;
		const retorno = await buscar(url, { signal: AbortSignal.timeout(ESPERA_MAXIMA_MS) });
		if (!retorno.ok) throw new Error(`o Sanity respondeu ${retorno.status}`);

		const { result } = resposta.parse(await retorno.json());
		const recentes: Entrada[] = result.map((post) => ({
			titulo: post.title,
			ano: anoDe(post.publishedAt),
			onde: "designDivergente",
			href: `${BLOG}/${encodeURIComponent(post.slug)}`,
			externo: true,
		}));
		return [...recentes, artigoFixo];
	} catch (erro) {
		const motivo = erro instanceof Error ? erro.message : String(erro);
		console.warn(`[artigos] Busca no blog falhou; usando a lista de reserva. Motivo: ${motivo}`);
		return artigosReserva;
	}
}
