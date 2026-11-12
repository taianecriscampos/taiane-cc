/**
 * Experiência, formação e ferramentas. Fonte: docs/curriculo.md.
 * Clientes da WeFit aparecem em texto, na linha da experiência (briefing de design).
 */
export interface Experiencia {
	inicio: number;
	fim: number;
	cargo: string;
	empresa?: string;
	/** Uma linha só: o que foi feito ou para quem. */
	linha: string;
}

export interface Formacao {
	curso: string;
	instituicao: string;
	periodo: string;
	situacao?: string;
}

export const experiencias: Experiencia[] = [
	{
		inicio: 2025,
		fim: 2026,
		cargo: "Senior Product Designer | Design Engineering",
		empresa: "Inlead",
		linha: "Plataforma SaaS de funis de marketing e vendas: 40% menos ajustes manuais.",
	},
	{
		inicio: 2023,
		fim: 2025,
		cargo: "Senior Product Designer | UX Strategy, Service Design e IA",
		empresa: "WeFit",
		linha:
			"Clientes atendidos: Azul Linhas Aéreas, Luft Logistics, Hapvida e emDia, do Grupo Santander.",
	},
	{
		inicio: 2021,
		fim: 2023,
		cargo: "UX/UI Designer | Design System Lead",
		empresa: "Grupo Sifra",
		linha: "Redesenho de produto financeiro e primeiro design system da empresa.",
	},
	{
		inicio: 2020,
		fim: 2021,
		cargo: "UX/UI Designer | Sistemas regulatórios e compliance",
		empresa: "Gedanken (GCertifica)",
		linha: "Interfaces para um sistema de alta complexidade regulatória.",
	},
	{
		inicio: 2018,
		fim: 2020,
		cargo: "UX/UI Designer | Produtos de ponta a ponta",
		empresa: "8P dev studio",
		linha: "Aplicativos e web do zero, da pesquisa ao design visual.",
	},
	{
		inicio: 2011,
		fim: 2018,
		cargo: "Comunicação, marketing e direção de arte",
		linha: "Liderança criativa, branding e campanhas multicanal.",
	},
];

export const formacao: Formacao[] = [
	{
		curso: "Pós-graduação User Experience Design and Beyond",
		instituicao: "PUCRS",
		periodo: "2021–2022",
	},
	{
		curso: "Pós-graduação em Ciências Cognitivas e Design de Interação",
		instituicao: "IDI",
		periodo: "2020–2021",
	},
	{
		curso: "Pós-graduação em Desenvolvimento Full Stack",
		instituicao: "PUCRS",
		periodo: "2023",
		situacao: "Não concluída",
	},
	{
		curso: "Bacharelado em Comunicação Social: Publicidade e Propaganda",
		instituicao: "UNIRP",
		periodo: "2010–2014",
	},
];

export const cursosLivres =
	"COD3R, 2026: Ferramentas Agênticas; Projeto #0, usando MCP, Skills e Spec; Introdução ao Desenvolvimento com IA.";

export const ferramentas = [
	"Figma",
	"Claude Code",
	"Git e GitHub",
	"React",
	"HTML",
	"CSS",
	"JavaScript",
];

/**
 * O que a seção Sobre mostra, na ordem e com os nomes da direção de arte v3.
 * O histórico completo fica no currículo em PDF.
 */
export const experienciasDoSobre = [
	{ empresa: "Inlead", cargo: "Senior Product Designer", periodo: "2025–2026" },
	{ empresa: "WeFit", cargo: "Senior Product Designer", periodo: "2023–2025" },
	{ empresa: "Grupo Sifra", cargo: "Design System Lead", periodo: "2021–2023" },
];

export const formacaoDoSobre = [
	{
		instituicao: "IDI",
		curso: "Pós-graduação em Ciências Cognitivas e Design de Interação",
		periodo: "2020",
		concluida: true,
	},
	{
		instituicao: "PUCRS",
		curso: "Pós-graduação User Experience Design and Beyond",
		periodo: "2021–2022",
		concluida: true,
	},
	{
		instituicao: "PUCRS",
		curso: "Pós-graduação em Desenvolvimento Full Stack",
		periodo: "2023",
		concluida: false,
	},
];
