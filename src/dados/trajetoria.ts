/**
 * Experiência, formação e ferramentas. Fonte: docs/curriculo.md.
 * Clientes da WeFit aparecem em texto, dentro da experiência (briefing de design).
 */
export interface Experiencia {
	inicio: number;
	fim: number;
	cargo: string;
	empresa?: string;
	modalidade?: string;
	descricao?: string;
	clientes?: string;
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
		modalidade: "Remoto",
		descricao:
			"Evolução de plataforma SaaS e reestruturação dos fluxos de criação e gestão de funis de marketing e vendas. Resultado: 40% menos ajustes manuais operacionais.",
	},
	{
		inicio: 2023,
		fim: 2025,
		cargo: "Senior Product Designer | UX Strategy, Service Design e IA",
		empresa: "WeFit",
		modalidade: "Híbrido, São Paulo",
		clientes:
			"Clientes atendidos pela WeFit: Azul Linhas Aéreas, com produtos internos para tripulantes e o Azul GPT, feito com a OpenAI; Luft Logistics, com mapeamento sistêmico e service blueprint da operação; Hapvida, com experiência white label para várias operadoras; e emDia, do Grupo Santander, com otimização de fluxos transacionais.",
	},
	{
		inicio: 2021,
		fim: 2023,
		cargo: "UX/UI Designer | Design System Lead",
		empresa: "Grupo Sifra",
		modalidade: "Remoto",
		descricao:
			"Redesenho de produto financeiro e primeiro design system da empresa, no Figma e no código, com governança entre produto e tecnologia.",
	},
	{
		inicio: 2020,
		fim: 2021,
		cargo: "UX/UI Designer | Sistemas regulatórios e compliance",
		empresa: "Gedanken (GCertifica)",
		modalidade: "Remoto",
		descricao:
			"Interfaces para sistema de alta complexidade regulatória, com personas, jornadas e fluxos.",
	},
	{
		inicio: 2018,
		fim: 2020,
		cargo: "UX/UI Designer | Produtos de ponta a ponta",
		empresa: "8P dev studio",
		modalidade: "Remoto",
		descricao: "Aplicativos e web do zero: pesquisa, arquitetura, wireframes e design visual.",
	},
	{
		inicio: 2011,
		fim: 2018,
		cargo: "Comunicação, marketing e direção de arte",
		descricao: "Liderança criativa, branding, inbound marketing e campanhas multicanal.",
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
