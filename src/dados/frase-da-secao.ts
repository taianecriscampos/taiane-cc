/**
 * Frase curta de uma seção, para o detalhe da ilha (nível 3).
 * Pega a primeira frase do texto e, se ela passar de 80 caracteres, encurta para caber em no
 * máximo 2 linhas: corta numa vírgula, dois-pontos ou travessão (se sobrar ao menos metade) ou,
 * se não houver, no último espaço, e termina com reticências.
 */
const LIMITE = 80;

const entidades: Record<string, string> = {
	"&amp;": "&",
	"&quot;": '"',
	"&#39;": "'",
	"&#x27;": "'",
	"&lt;": "<",
	"&gt;": ">",
	"&nbsp;": " ",
};

/** Texto puro a partir do HTML da seção (sem comentários, marcas nem títulos internos). */
function textoPuro(html: string): string {
	return html
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(/<h[1-6][\s\S]*?<\/h[1-6]>/g, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&[#\w]+;/g, (e) => entidades[e] ?? " ")
		.replace(/\s+/g, " ")
		.trim();
}

export function encurtar(frase: string, limite = LIMITE): string {
	if (frase.length <= limite) return frase;
	const trecho = frase.slice(0, limite);
	const pausa = Math.max(trecho.lastIndexOf(", "), trecho.lastIndexOf(": "), trecho.lastIndexOf(" — "));
	const corte = pausa >= limite / 2 ? pausa : trecho.lastIndexOf(" ");
	return `${trecho.slice(0, corte).replace(/[\s,;:.—–-]+$/, "")}…`;
}

export function fraseDaSecao(html: string): string {
	const texto = textoPuro(html);
	const primeira = texto.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? texto;
	return encurtar(primeira);
}
