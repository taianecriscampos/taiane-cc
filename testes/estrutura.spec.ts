import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

for (const pagina of paginas) {
	test(`${pagina} fica fora dos buscadores até a 1.0.0`, async ({ page }) => {
		await page.goto(pagina);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
	});
}

test("a página inicial lista os três cases, com link para cada um", async ({ page }) => {
	await page.goto("/");
	const projetos = page.getByRole("region", { name: "Projetos" });
	await expect(projetos.getByRole("listitem")).toHaveCount(3);
	await projetos.getByRole("link", { name: "Funis interativos" }).click();
	await expect(page).toHaveURL(/\/cases\/funis-interativos$/);
	await expect(page.getByRole("heading", { level: 1 })).toHaveText("Funis interativos");
});

test("o índice do case leva a cada seção do texto", async ({ page }) => {
	await page.goto("/cases/funis-interativos");
	const links = page.getByRole("navigation", { name: "Neste case" }).getByRole("link");
	await expect(links).toHaveCount(6);
	for (const link of await links.all()) {
		const alvo = (await link.getAttribute("href")) ?? "";
		await expect(page.locator(alvo)).toHaveCount(1);
	}
});

test("a hora local aparece no formato 00:00", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("time[data-hora-fuso]")).toHaveText(/^\d{2}:\d{2}$/);
});

test("o cabeçalho leva ao início e às seções da página inicial", async ({ page }) => {
	await page.goto("/cases/funis-interativos");
	const cabecalho = page.getByRole("banner");
	const navegacao = cabecalho.getByRole("navigation", { name: "Principal" });
	await expect(navegacao.getByRole("link")).toHaveText(["Projetos", "Sobre", "Contato"]);
	await navegacao.getByRole("link", { name: "Sobre" }).click();
	await expect(page).toHaveURL(/\/#sobre$/);
	await cabecalho.getByRole("link", { name: "Taiane Cris Campos" }).click();
	await expect(page).toHaveURL(/\/$/);
});

test("só o case confidencial avisa que está sob sigilo", async ({ page }) => {
	await page.goto("/cases/azul-gpt");
	await expect(page.getByText("Case sob sigilo", { exact: true })).toHaveCount(1);
	await page.goto("/cases/funis-interativos");
	await expect(page.getByText("Case sob sigilo", { exact: true })).toHaveCount(0);
	await expect(page.getByText("Sigilo", { exact: true })).toHaveCount(0);
});
