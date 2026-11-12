/**
 * Dados do site inteiro: endereço, produção e imagem de compartilhamento (ADR 0002).
 * A indexação só vale em produção: a Vercel define VERCEL_ENV como "production" apenas
 * na compilação do taiane.cc. Prévias, ramificação design e máquina local ficam com noindex.
 */
export const urlDoSite = "https://taiane.cc";

export const producao = process.env.VERCEL_ENV === "production";

/** Imagem 1200x630 com nome e cargo, para páginas sem imagem própria. */
export const imagemPadrao = {
	caminho: "/og/padrao.png",
	alt: "Taiane Cris Campos, Design Engineer",
	largura: 1200,
	altura: 630,
};

/** Une o endereço do site a um caminho: "/cases/x" vira "https://taiane.cc/cases/x". */
export const urlAbsoluta = (caminho: string) => new URL(caminho, urlDoSite).href;
