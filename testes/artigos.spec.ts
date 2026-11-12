import { expect, test } from "@playwright/test";

/*
 * Regra dos Artigos: a partir de 768 px, o título aparece inteiro, em no máximo 2 linhas,
 * todos com o mesmo tamanho. No celular, o título usa o tamanho de entrada e quebra à vontade.
 * Conta as linhas pela altura do título dividida pela altura de uma linha.
 */
for (const largura of [768, 1440]) {
	test(`em ${largura} px, nenhum título de artigo passa de 2 linhas`, async ({ page }) => {
		await page.setViewportSize({ width: largura, height: 900 });
		await page.goto("/");
		await page.evaluate(() => document.fonts.ready);
		const titulos = page.locator("#artigos .entrada__titulo");
		await expect(titulos).toHaveCount(3);
		const medidas = await titulos.evaluateAll((lista) =>
			lista.map((t) => {
				const estilo = getComputedStyle(t);
				const linhas = t.getBoundingClientRect().height / parseFloat(estilo.lineHeight);
				return {
					titulo: t.textContent?.trim(),
					linhas: Math.round(linhas),
					tamanho: estilo.fontSize,
				};
			}),
		);
		for (const m of medidas) expect(m.linhas, `${m.titulo} (${m.tamanho})`).toBeLessThanOrEqual(2);
		// Todos com o mesmo tamanho.
		expect(new Set(medidas.map((m) => m.tamanho)).size).toBe(1);
	});
}

test("em 375 px, os títulos de artigo usam o tamanho de entrada do site", async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 900 });
	await page.goto("/");
	const tamanhos = await page
		.locator("#artigos .entrada__titulo")
		.evaluateAll((lista) => lista.map((t) => getComputedStyle(t).fontSize));
	// 40 px: o mesmo título de entrada dos Projetos e do "Me chama?" no celular.
	for (const t of tamanhos) expect(t).toBe("40px");
});
