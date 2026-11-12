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

test("com movimento reduzido, o cartão troca por esmaecimento, sem girar", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("button", { name: "Ver resumo de Azul GPT" }).click();
	const giro = page.locator("#projetos [data-virado] .projeto__giro");
	await expect(giro).toHaveCSS("transform", "none");
	const verso = page.getByRole("group", { name: "Resumo de Azul GPT" });
	await expect(verso).toHaveCSS("transition-duration", "0.15s");
	await expect(verso).toHaveCSS("opacity", "1");
});
