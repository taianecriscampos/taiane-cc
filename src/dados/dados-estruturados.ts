/**
 * Dados estruturados (JSON-LD) para buscadores e IAs, ADR 0002.
 * Tudo vem de perfil.ts, skills.ts e trajetoria.ts: uma fonte só para nome, cargo e links.
 */
import { perfil } from "./perfil";
import { competencias } from "./skills";
import { experiencias, formacao } from "./trajetoria";
import { urlAbsoluta, urlDoSite } from "./site";

const idDaPessoa = `${urlDoSite}/#taiane`;

/** Empresas e escolas da trajetória, como organizações. */
const organizacao = (tipo: string, nome: string) => ({ "@type": tipo, name: nome });

export const pessoa = {
	"@type": "Person",
	"@id": idDaPessoa,
	name: perfil.nome,
	jobTitle: perfil.cargo,
	description: perfil.frase,
	url: urlDoSite,
	image: urlAbsoluta("/og/padrao.png"),
	address: {
		"@type": "PostalAddress",
		addressLocality: perfil.cidade,
		addressRegion: perfil.estado,
		addressCountry: "BR",
	},
	knowsAbout: competencias,
	// Empresas por onde passou (as que têm nome) e escolas.
	alumniOf: [
		...[...new Set(experiencias.flatMap((e) => (e.empresa ? [e.empresa] : [])))].map((nome) =>
			organizacao("Organization", nome),
		),
		...[...new Set(formacao.map((f) => f.instituicao))].map((nome) =>
			organizacao("EducationalOrganization", nome),
		),
	],
	sameAs: [perfil.linkedin, perfil.substack, perfil.github, perfil.designDivergente],
};

/** Página inicial: ProfilePage com a pessoa como assunto principal. */
export const paginaDePerfil = {
	"@context": "https://schema.org",
	"@type": "ProfilePage",
	"@id": `${urlDoSite}/#perfil`,
	url: urlDoSite,
	name: `${perfil.nome} · ${perfil.cargo}`,
	inLanguage: "pt-BR",
	mainEntity: pessoa,
};

interface DadosDoArtigo {
	titulo: string;
	resumo: string;
	caminho: string;
	imagem: string;
	publicadoEm?: Date;
}

/** Case: Article escrito pela mesma pessoa da página inicial. */
export const artigoDoCase = (d: DadosDoArtigo) => ({
	"@context": "https://schema.org",
	"@type": "Article",
	headline: d.titulo,
	description: d.resumo,
	inLanguage: "pt-BR",
	mainEntityOfPage: urlAbsoluta(d.caminho),
	image: d.imagem,
	...(d.publicadoEm && { datePublished: d.publicadoEm.toISOString().slice(0, 10) }),
	author: { "@type": "Person", "@id": idDaPessoa, name: perfil.nome, url: urlDoSite },
	publisher: { "@type": "Person", "@id": idDaPessoa, name: perfil.nome },
});
