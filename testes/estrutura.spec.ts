import { expect, test, type Page } from "@playwright/test";
import { paginas } from "./paginas";

/** No celular, os links do cabeçalho ficam no painel do botão Menu: abre o painel se ele existir. */
async function abrirMenuSePreciso(page: Page) {
	const menu = page.getByRole("button", { name: "Menu" });
	if (await menu.isVisible()) await menu.click();
}

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
	await expect(projetos.getByText("Novo", { exact: true })).toHaveCount(1);
	await projetos.getByRole("link", { name: "Funis interativos" }).click();
	await expect(page).toHaveURL(/\/cases\/funis-interativos$/);
	await expect(page.getByRole("heading", { level: 1 })).toHaveText("Funis interativos");
});

test("os textos externos avisam a nova aba, e o texto em construção não tem link", async ({
	page,
}) => {
	await page.goto("/");
	const textos = page.getByRole("region", { name: "Textos" });
	await expect(textos.getByRole("listitem")).toHaveCount(4);
	const links = textos.getByRole("link");
	await expect(links).toHaveCount(3);
	for (const link of await links.all()) {
		await expect(link).toHaveAttribute("target", "_blank");
		await expect(link).toHaveAccessibleName(/abre em nova aba$/);
	}
	await expect(textos.getByText("Em construção")).toHaveCount(1);
});

test("o cabeçalho leva às seções da página inicial e de volta ao início", async ({ page }) => {
	await page.goto("/");
	await abrirMenuSePreciso(page);
	const navegacao = page.getByRole("navigation", { name: "Principal" });
	await expect(navegacao.getByRole("link")).toHaveText(["Projetos", "Textos", "Sobre"]);
	await navegacao.getByRole("link", { name: "Sobre" }).click();
	await expect(page).toHaveURL(/\/#sobre$/);
	// O painel do celular fecha depois da escolha.
	await expect(page.locator("#menu-painel")).toBeHidden();
	await page.goto("/cases/funis-interativos");
	await page.getByRole("banner").getByRole("link", { name: "Taiane Cris Campos" }).click();
	await expect(page).toHaveURL(/\/$/);
});

test("no case, o cabeçalho leva a cada seção do texto", async ({ page }) => {
	await page.goto("/cases/funis-interativos");
	await abrirMenuSePreciso(page);
	const links = page.getByRole("navigation", { name: "Neste case" }).getByRole("link");
	await expect(links).toHaveCount(6);
	for (const link of await links.all()) {
		const alvo = (await link.getAttribute("href")) ?? "";
		await expect(page.locator(alvo)).toHaveCount(1);
	}
});

test("o case mostra ano, cliente, tempo de leitura e os três cartões de resumo", async ({
	page,
}) => {
	await page.goto("/cases/funis-interativos");
	const topo = page.locator("main header");
	await expect(topo.getByText("2025", { exact: true })).toHaveCount(1);
	await expect(topo.getByText("Inlead", { exact: true })).toHaveCount(1);
	await expect(topo.getByText(/^\d+ minutos? de leitura$/)).toHaveCount(1);
	for (const rotulo of ["Minha atuação", "Desafio", "Solução"]) {
		await expect(topo.getByText(rotulo, { exact: true })).toHaveCount(1);
	}
});

test("só o case confidencial avisa que está sob sigilo", async ({ page }) => {
	await page.goto("/cases/azul-gpt");
	await expect(page.getByText("Case sob sigilo", { exact: true })).toHaveCount(1);
	await page.goto("/cases/funis-interativos");
	await expect(page.getByText("Case sob sigilo", { exact: true })).toHaveCount(0);
	await expect(page.getByText("Sigilo", { exact: true })).toHaveCount(0);
});
