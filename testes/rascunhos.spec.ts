import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

/*
 * Conteúdo de exemplo fica marcado com data-rascunho e listado em docs/rascunhos.md.
 * 1. Nenhum marcador entre colchetes pode aparecer na tela.
 * 2. Desde a rodada 1d, as páginas públicas (inicial e case de Funis) têm ZERO rascunhos:
 *    o teste falha se algum voltar.
 * O Laboratório fica de fora: ele mostra o pior caso de propósito.
 */
const publicas = paginas.filter((p) => !p.startsWith("/laboratorio"));

for (const pagina of publicas) {
	test(`${pagina} não mostra marcadores entre colchetes`, async ({ page }) => {
		await page.goto(pagina);
		const texto = await page.locator("body").innerText();
		expect(texto.match(/\[[^\]\n]{2,}\]/g) ?? []).toEqual([]);
	});

	test(`${pagina} não tem rascunhos`, async ({ page }) => {
		await page.goto(pagina);
		await expect(page.locator("[data-rascunho]")).toHaveCount(0);
	});
}
