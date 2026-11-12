import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

/*
 * Conteúdo de exemplo (rodada 1c): fica marcado com data-rascunho e listado em docs/rascunhos.md.
 * 1. Nenhum marcador entre colchetes pode aparecer na tela: este teste FALHA se aparecer.
 * 2. Os rascunhos ainda existentes são contados e avisados, SEM falhar, até a 1.0.0.
 * O Laboratório fica de fora: ele mostra o pior caso de propósito.
 */
const publicas = paginas.filter((p) => !p.startsWith("/laboratorio"));

for (const pagina of publicas) {
	test(`${pagina} não mostra marcadores entre colchetes`, async ({ page }) => {
		await page.goto(pagina);
		const texto = await page.locator("body").innerText();
		expect(texto.match(/\[[^\]\n]{2,}\]/g) ?? []).toEqual([]);
	});

	test(`${pagina}: aviso de rascunhos que ainda faltam trocar`, async ({ page }, info) => {
		await page.goto(pagina);
		const total = await page.locator("[data-rascunho]").count();
		if (total > 0) {
			const aviso = `${total} rascunho(s) em ${pagina}: trocar antes da 1.0.0 (docs/rascunhos.md)`;
			info.annotations.push({ type: "aviso", description: aviso });
			console.warn(`Aviso: ${aviso}`);
		}
	});
}
