import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

test.use({ contextOptions: { reducedMotion: "reduce" } });

for (const pagina of paginas) {
	test(`${pagina} funciona com prefers-reduced-motion`, async ({ page }) => {
		const erros: string[] = [];
		page.on("pageerror", (erro) => erros.push(erro.message));
		page.on("console", (msg) => {
			if (msg.type() === "error") erros.push(msg.text());
		});

		await page.goto(pagina);

		const reduzido = await page.evaluate(
			() => matchMedia("(prefers-reduced-motion: reduce)").matches,
		);
		expect(reduzido).toBe(true);
		await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
		expect(erros).toEqual([]);
	});
}
