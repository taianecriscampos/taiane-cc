/**
 * Dados de identidade e contato. Fonte única: troque aqui e o site inteiro muda.
 * Nome e cargo precisam ser idênticos em todos os perfis (ADR 0002).
 */
export interface Perfil {
	nome: string;
	/** Nome curto do cabeçalho no celular. */
	apelido: string;
	cargo: string;
	frase: string;
	/** Linha da faixa de baixo da abertura. */
	especialidade: string;
	/** Versão curta da especialidade, para o celular. */
	especialidadeCurta: string;
	/** Modelo de trabalho, ao lado do ponto verde de status. */
	modalidade: string;
	cidade: string;
	estado: string;
	email: string;
	linkedin: string;
	substack: string;
	github: string;
	designDivergente: string;
	curriculo: {
		href: string;
		/** false esconde o link e mostra "em breve". */
		disponivel: boolean;
	};
}

export const perfil: Perfil = {
	nome: "Taiane Cris Campos",
	apelido: "Tai",
	cargo: "Senior Product Designer · Design Engineer",
	frase: "Design de produto com pensamento sistêmico, IA e código.",
	especialidade: "Senior Product Designer | Design Engineering",
	especialidadeCurta: "Design Engineer",
	modalidade: "Remoto ou híbrido",
	cidade: "Ribeirão Preto",
	estado: "SP",
	email: "taianecriscampos@gmail.com",
	linkedin: "https://www.linkedin.com/in/taianecriscampos/",
	substack: "https://taianecriscampos.substack.com/",
	github: "https://github.com/taianecriscampos",
	designDivergente: "https://designdivergente.blog/",
	curriculo: { href: "/curriculo.pdf", disponivel: true },
};
