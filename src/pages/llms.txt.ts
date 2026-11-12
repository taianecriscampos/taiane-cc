/**
 * llms.txt (ADR 0002): resumo em Markdown de quem é a Taiane e dos cases, para assistentes de IA.
 * Gerado dos mesmos dados do site, então nome, cargo e links nunca divergem.
 */
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { perfil } from "../dados/perfil";
import { competencias } from "../dados/skills";
import { experiencias } from "../dados/trajetoria";
import { urlAbsoluta, urlDoSite } from "../dados/site";

export const GET: APIRoute = async () => {
	const cases = (await getCollection("cases")).sort((a, b) => a.data.ordem - b.data.ordem);
	const comPagina = cases.filter((c) => c.data.pagina);
	const semPagina = cases.filter((c) => !c.data.pagina);

	const texto = [
		`# ${perfil.nome}`,
		"",
		`> ${perfil.cargo}. ${perfil.frase} Baseada em ${perfil.localizacao}. ${perfil.modalidadeCompleta}.`,
		"",
		`${perfil.nome} desenha produtos digitais e também os constrói em código. Atuou em ` +
			`${[...new Set(experiencias.flatMap((e) => (e.empresa ? [e.empresa] : [])))].join(", ")}.`,
		"",
		"## Cases",
		"",
		...comPagina.map(
			(c) => `- [${c.data.titulo}](${urlAbsoluta(`/cases/${c.id}/`)}): ${c.data.resumo}`,
		),
		...semPagina.map(
			(c) =>
				`- ${c.data.titulo} (${c.data.cliente}, ${c.data.ano}), case sob sigilo, sem página pública: ${c.data.chamada}`,
		),
		"",
		"## Competências",
		"",
		competencias.join(", "),
		"",
		"## Links",
		"",
		`- [Site](${urlDoSite})`,
		`- [LinkedIn](${perfil.linkedin})`,
		`- [Substack](${perfil.substack})`,
		`- [GitHub](${perfil.github})`,
		`- [designDivergente](${perfil.designDivergente})`,
		"",
	].join("\n");
	return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
