/**
 * Dados de identidade e contato. Fonte única: troque aqui e o site inteiro muda.
 * Nome e cargo precisam ser idênticos em todos os perfis (ADR 0002).
 */
export interface Perfil {
	nome: string;
	cargo: string;
	frase: string;
	cidade: string;
	estado: string;
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
	cidade: "Ribeirão Preto",
	estado: "SP",
	email: "taianecriscampos@gmail.com",
	linkedin: "https://www.linkedin.com/in/taianecriscampos/",
	substack: "https://taianecriscampos.substack.com/",
	github: "https://github.com/taianecriscampos",
	curriculo: { href: "/curriculo.pdf", disponivel: false },
};
