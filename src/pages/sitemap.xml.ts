/**
 * sitemap.xml (ADR 0002): a página inicial e cada case que tem página. O Laboratório fica de fora.
 */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { urlAbsoluta } from "../dados/site";

export const GET: APIRoute = async () => {
	const cases = await getCollection("cases", ({ data }) => data.pagina);
	const caminhos = ["/", ...cases.map((c) => `/cases/${c.id}/`)];
	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...caminhos.map((c) => `\t<url><loc>${urlAbsoluta(c)}</loc></url>`),
		"</urlset>",
		"",
	].join("\n");
	return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
