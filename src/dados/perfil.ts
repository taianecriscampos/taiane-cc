/**
 * Dados de identidade e contato. Fonte única: troque aqui e o site inteiro muda.
 * Nome e cargo precisam ser idênticos em todos os perfis (ADR 0002).
 */
export interface Perfil {
	nome: string;
	cargo: string;
	frase: string;
	status: string;
	cidade: string;
	modalidade: string;
	/** Fuso no formato IANA, usado pela hora local. */
	fuso: string;
	/** Texto que aparece antes do script carregar, ou sem JavaScript. */
	nomeDoFuso: string;
	email: string;
	linkedin: string;
	substack: string;
	github: string;
	curriculo: {
		href: string;
		/** false até o PDF público entrar, na etapa 0.4.0. */
		disponivel: boolean;
	};
}

export const perfil: Perfil = {
	nome: "Taiane Cris Campos",
	cargo: "Senior Product Designer · Design Engineer",
	frase: "Design de produto com pensamento sistêmico, IA e código.",
	status: "Disponível para trabalho",
	cidade: "Ribeirão Preto, SP",
	modalidade: "Remoto ou híbrido",
	fuso: "America/Sao_Paulo",
	nomeDoFuso: "Horário de Brasília",
	email: "taianecriscampos@gmail.com",
	linkedin: "https://www.linkedin.com/in/taianecriscampos/",
	substack: "https://taianecriscampos.substack.com/",
	github: "https://github.com/taianecriscampos",
	curriculo: { href: "/curriculo.pdf", disponivel: false },
};
