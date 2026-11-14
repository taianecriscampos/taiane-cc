import { expect, test, type Page } from "@playwright/test";

/**
 * O vidro escuro da ilha precisa aparecer em todo navegador, inclusive no WebKit do iPhone
 * (Safari e navegador interno do Instagram), fechada e aberta. Mede a cor dos pixels na tela:
 * o fundo da página é quase branco; o vidro é escuro.
 */
async function brilhoMedio(page: Page, seletor: string) {
	const caixa = await page.locator(seletor).first().boundingBox();
	if (!caixa) throw new Error(`sem caixa para ${seletor}`);
	// Uma faixa no meio da altura, longe do texto das pontas: só o vidro.
	const recorte = {
		x: caixa.x + caixa.width * 0.1,
		y: caixa.y + 2,
		width: Math.max(4, caixa.width * 0.8),
		height: 4,
	};
	const png = await page.screenshot({ clip: recorte });
	return page.evaluate(async (b64) => {
		const img = new Image();
		img.src = `data:image/png;base64,${b64}`;
		await img.decode();
		const c = document.createElement("canvas");
		c.width = img.width;
		c.height = img.height;
		const ctx = c.getContext("2d")!;
		ctx.drawImage(img, 0, 0);
		const d = ctx.getImageData(0, 0, c.width, c.height).data;
		let soma = 0;
		for (let i = 0; i < d.length; i += 4) soma += (d[i] + d[i + 1] + d[i + 2]) / 3;
		return soma / (d.length / 4);
	}, png.toString("base64"));
}

test("o vidro escuro da ilha aparece fechada e aberta", async ({ page }) => {
	await page.goto("/");
	await page.locator(".ilha[data-pronta]").waitFor();
	await page.evaluate(() => document.fonts.ready);

	expect(await brilhoMedio(page, ".ilha__botao")).toBeLessThan(140);

	await page.locator(".ilha__botao").click();
	await expect(page.locator(".ilha")).toHaveAttribute("data-nivel", "1");
	await page.waitForTimeout(800);
	expect(await brilhoMedio(page, ".ilha__vista--lista")).toBeLessThan(140);
});

test("no WebKit, o vidro da ilha é sólido e sem desfoque; nos outros, translúcido com desfoque", async ({
	page,
	browserName,
}) => {
	// No WebKit com placa de vídeo (iPhone), desfoque + clip-path num cabeçalho sticky some.
	// O WebKit sem tela dos testes não mostra o defeito, então a trava é no estilo.
	await page.goto("/");
	await page.locator(".ilha[data-pronta]").waitFor();
	const fundo = page.locator("[data-fundo]");
	if (browserName === "webkit") {
		await expect(fundo).toHaveCSS("background-color", "rgb(26, 32, 37)");
		await expect(fundo).toHaveCSS("backdrop-filter", "none");
	} else {
		await expect(fundo).toHaveCSS("background-color", "rgba(0, 0, 0, 0.7)");
		await expect(fundo).toHaveCSS("backdrop-filter", "blur(20px)");
	}
});
