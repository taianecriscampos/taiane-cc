import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

/** Todas as regras de nível A e AA das WCAG 2.0, 2.1 e 2.2. */
const regrasWcag22AA = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const pagina of paginas) {
	test(`${pagina} passa nas regras WCAG 2.2 AA do axe`, async ({ page }) => {
		// O axe é lento na emulação de celular com a máquina ocupada (a qualidade compila e testa
		// em paralelo): mais tempo em todas as páginas, sem mudar o que é verificado.
		test.slow();
		await page.goto(pagina);
		// Exceção de contraste decidida pela Taiane (ver CLAUDE.md): só o "não concluída" da seção
		// Sobre, que é detalhe decorativo. Qualquer outro elemento continua sendo verificado.
		const resultado = await new AxeBuilder({ page })
			.withTags(regrasWcag22AA)
			.exclude(".sobre__inativo")
			.exclude(".sobre__desativado")
			.analyze();
		expect(resultado.violations).toEqual([]);
	});
}
