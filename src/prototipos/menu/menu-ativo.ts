/**
 * Marca no menu o item da seção que está no meio da tela (aria-current="location").
 * Sem JavaScript, o menu funciona igual; só não marca o item atual.
 */
let observador: IntersectionObserver | undefined;

export function iniciarMenuAtivo(): void {
	observador?.disconnect();
	const links = [...document.querySelectorAll<HTMLAnchorElement>("[data-menu] li > a[href^='#']")];
	if (links.length === 0) return;

	const marcar = (id: string) => {
		for (const link of links) {
			if (link.hash === `#${id}`) link.setAttribute("aria-current", "location");
			else link.removeAttribute("aria-current");
		}
	};

	observador = new IntersectionObserver(
		(entradas) => {
			for (const entrada of entradas) {
				if (entrada.isIntersecting) marcar(entrada.target.id);
			}
		},
		// Só a faixa do meio da tela conta, para trocar o item na hora certa.
		{ rootMargin: "-45% 0px -50% 0px" },
	);

	for (const link of links) {
		const secao = document.getElementById(link.hash.slice(1));
		if (secao) observador.observe(secao);
	}
	marcar(links[0]?.hash.slice(1) ?? "");
}
