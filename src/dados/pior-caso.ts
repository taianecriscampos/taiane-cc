/**
 * Dados de pior caso (skill break-ui). Só o /laboratorio usa este arquivo,
 * e o Laboratório fica fora da produção. Valores realistas, no limite do schema quando há limite.
 */
import type { ProjetoDaLista } from "../components/blocos/Projetos.astro";
import type { Perfil } from "./perfil";

export const perfilPiorCaso: Perfil = {
	nome: "Maria Aparecida dos Santos Wiśniewska-Kowalczyk",
	cargo: "Designer de Produto Sênior · Engenheira de Design · Pesquisadora de UX",
	frase:
		"Design de produto com pensamento sistêmico, inteligência artificial generativa, pesquisa contínua e código de produção.",
	status: "Disponível para trabalho a partir de janeiro de 2027",
	cidade: "São José do Rio Preto, SP",
	modalidade: "Remoto, híbrido ou presencial na Grande São Paulo",
	fuso: "America/Sao_Paulo",
	nomeDoFuso: "Horário de Brasília",
	email: "bartholomew.fitzgerald@northwind-industries-holdings.example.com",
	linkedin: "https://www.linkedin.com/in/exemplo/",
	substack: "https://exemplo.example.com/",
	github: "https://github.com/exemplo",
	curriculo: { href: "/curriculo.pdf", disponivel: true },
};

/** Título sem limite no schema: testa um título descritivo longo. */
const tituloLongo =
	"Redesenho do fluxo de contestação de cobranças indevidas em operações logísticas multimodais";

/** Exatamente 120 caracteres, o limite de `chamada`. */
const chamadaNoLimite =
	"Contestação de cobranças em três etapas, com rastreio do pedido, prazos legais e retornos do atendimento no mesmo lugar.";

export const projetosPiorCaso: ProjetoDaLista[] = [
	{
		titulo: tituloLongo,
		empresa: "emDia, do Grupo Santander, cliente atendido pela WeFit",
		ano: 2026,
		chamada: chamadaNoLimite,
		href: "#",
	},
	{ titulo: "IA", empresa: "Jo", ano: 2000, chamada: "Ok.", href: "#" },
	{
		titulo: "Benachrichtigungseinstellungen",
		empresa: "Hapvida, cliente atendido pela WeFit, para várias operadoras de saúde",
		ano: 2021,
		chamada: "Nome de projeto em alemão, sem espaços, como entraria com o site em outro idioma.",
		href: "#",
	},
];

/** Exatamente 400 caracteres, o limite de `resumo`. */
const resumoNoLimite =
	"Como Senior Product Designer pela WeFit, conduzi o redesenho do fluxo de contestação de cobranças indevidas para uma operação logística com mais de 12.840 pontos de coleta, integrando atendimento, financeiro e transporte num único serviço. O mapeamento sistêmico revelou quatro rupturas entre as áreas. Resultados: contestações resolvidas em menos tempo e menos retrabalho para as equipes envolvidas.";

export const cabecalhoPiorCaso = {
	titulo: tituloLongo,
	resumo: resumoNoLimite,
	empresa: "Luft Logistics, cliente atendido pela WeFit, em parceria com a operação de São Paulo",
	ano: 2026,
	papel: "Senior Product Designer | UX Strategy, Service Design e IA pela WeFit",
	sigilo: "confidencial" as const,
	resultados: [
		{ valor: "+10% a +25%", descricao: "na taxa de conclusão" },
		{ valor: "R$ 12.345.678,90", descricao: "em custo operacional evitado no primeiro ano" },
		{ valor: "3x", descricao: "mais rápido" },
		{ valor: "1", descricao: "processo" },
		{
			valor: "Superintendência",
			descricao:
				"um resultado descrito em texto, sem número, com uma descrição bem mais longa que as outras",
		},
	],
};
