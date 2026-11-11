/**
 * Dados de pior caso (skill break-ui). Só o /laboratorio usa este arquivo,
 * e o Laboratório fica fora da produção. Valores realistas, no limite do schema quando há limite.
 */
import type { Entrada } from "../components/ui/Entrada.astro";
import type { Perfil } from "./perfil";

export const perfilPiorCaso: Perfil = {
	nome: "Maria Aparecida dos Santos Wiśniewska-Kowalczyk",
	cargo: "Designer de Produto Sênior · Engenheira de Design · Pesquisadora de UX",
	frase:
		"Design de produto com pensamento sistêmico, inteligência artificial generativa, pesquisa contínua e código de produção.",
	cidade: "São José do Rio Preto",
	estado: "SP",
	email: "bartholomew.fitzgerald@northwind-industries-holdings.example.com",
	linkedin: "https://www.linkedin.com/in/exemplo/",
	substack: "https://exemplo.example.com/",
	github: "https://github.com/exemplo",
	curriculo: { href: "/curriculo.pdf", disponivel: true },
};

/** Exatamente 60 caracteres, o limite de `titulo`. */
const tituloLongo = "Redesenho do fluxo de contestação das cobranças na logística";

/** Exatamente 120 caracteres, o limite de `chamada`. */
const chamadaNoLimite =
	"Contestação de cobranças em três etapas, com rastreio do pedido, prazos legais e retornos do atendimento no mesmo lugar.";

export const entradasPiorCaso: Entrada[] = [
	{
		titulo: tituloLongo,
		onde: "emDia · Santander · WeFit",
		ano: 2026,
		descricao: chamadaNoLimite,
		href: "#",
		novo: true,
	},
	{ titulo: "IA", onde: "Jo", ano: 2000, descricao: "Ok.", href: "#" },
	{
		titulo: "Benachrichtigungseinstellungen",
		onde: "Hapvida · WeFit",
		ano: 2021,
		descricao: "Nome de projeto em alemão, sem espaços, como entraria com o site em outro idioma.",
		href: "https://exemplo.example.com/",
		externo: true,
	},
	{ titulo: "Texto ainda sem link, em construção", onde: "Substack", ano: 2026 },
];

/** Exatamente 400 caracteres, o limite de `resumo`. */
const resumoNoLimite =
	"Como Senior Product Designer pela WeFit, conduzi o redesenho do fluxo de contestação de cobranças indevidas para uma operação logística com mais de 12.840 pontos de coleta, integrando atendimento, financeiro e transporte num único serviço. O mapeamento sistêmico revelou quatro rupturas entre as áreas. Resultados: contestações resolvidas em menos tempo e menos retrabalho para as equipes envolvidas.";

/** Cada cartão no limite de 160 caracteres. */
const cartaoNoLimite =
	"Conduzi a pesquisa com atendimento, financeiro e transporte, desenhei o novo fluxo de ponta a ponta e acompanhei a entrega com o time de engenharia da operação.";

export const cabecalhoPiorCaso = {
	titulo: tituloLongo,
	resumo: resumoNoLimite,
	cliente: "Hapvida Saúde · WeFit SP", // 24 caracteres, o limite
	ano: 2026,
	minutos: 1,
	sigilo: "confidencial" as const,
	cartoes: { atuacao: cartaoNoLimite, desafio: "Ok.", solucao: cartaoNoLimite, rascunho: true },
};
