import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

/** Todas as regras de nível A e AA das WCAG 2.0, 2.1 e 2.2. */
const regrasWcag22AA = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const pagina of paginas) {
	test(`${pagina} passa nas regras WCAG 2.2 AA do axe`, async ({ page }) => {
		await page.goto(pagina);
		const resultado = await new AxeBuilder({ page }).withTags(regrasWcag22AA).analyze();
		expect(resultado.violations).toEqual([]);
	});
}
