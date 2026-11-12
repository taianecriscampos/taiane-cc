/**
 * robots.txt (ADR 0002). Em produção libera buscadores e assistentes de IA; em prévias e na
 * ramificação design, bloqueia tudo para nada ser indexado antes da hora.
 */
import type { APIRoute } from "astro";
import { producao, urlAbsoluta } from "../dados/site";

const robos = [
	"Googlebot",
	"Bingbot",
	"GPTBot",
	"OAI-SearchBot",
	"ClaudeBot",
	"PerplexityBot",
	"Google-Extended",
];

export const GET: APIRoute = () => {
	const texto = producao
		? [
				...robos.map((robo) => `User-agent: ${robo}\nAllow: /\n`),
				"User-agent: *\nAllow: /\n",
				`Sitemap: ${urlAbsoluta("/sitemap.xml")}`,
			].join("\n")
		: "User-agent: *\nDisallow: /\n";
	return new Response(`${texto}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
