import { expect, test } from "@playwright/test";
import { artigoFixo, artigosReserva } from "../src/dados/artigos";
import { buscarArtigos } from "../src/dados/artigos-do-blog";

/*
 * Busca dos artigos no build. Aqui a internet é simulada: nenhum teste chama o Sanity.
 * Não usa navegador, então roda só em um perfil.
 */
test.beforeEach(({}, info) => {
	test.skip(info.project.name !== "desktop", "Não depende do navegador.");
});

const post = (n: number) => ({
	title: `Post ${n}`,
	slug: `post-${n}`,
	publishedAt: "2027-01-01T01:00:00Z",
});

const responder =
	(corpo: unknown, status = 200): typeof fetch =>
	async () =>
		new Response(JSON.stringify(corpo), { status });

test("com a busca certa: 2 posts do blog e o artigo fixo por último", async () => {
	const artigos = await buscarArtigos(responder({ result: [post(1), post(2)] }));
	expect(artigos).toHaveLength(3);
	expect(artigos[0]).toEqual({
		titulo: "Post 1",
		// 1h da manhã em UTC ainda é o ano anterior em São Paulo.
		ano: 2026,
		onde: "designDivergente",
		href: "https://designdivergente.blog/post-1",
		externo: true,
	});
	expect(artigos[1].titulo).toBe("Post 2");
	expect(artigos[2]).toEqual(artigoFixo);
});

const falhas: [string, typeof fetch][] = [
	[
		"sem rede ou tempo esgotado",
		async () => {
			throw new Error("sem rede");
		},
	],
	["erro do servidor", responder({}, 500)],
	["resposta que não é JSON", async () => new Response("<html>")],
	["só 1 post", responder({ result: [post(1)] })],
	["post sem título", responder({ result: [post(1), { ...post(2), title: null }] })],
	["data inválida", responder({ result: [post(1), { ...post(2), publishedAt: "ontem" }] })],
];

for (const [nome, buscar] of falhas) {
	test(`falha (${nome}): usa a lista de reserva`, async () => {
		expect(await buscarArtigos(buscar)).toEqual(artigosReserva);
	});
}
