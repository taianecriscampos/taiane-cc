import { expect, test, type Page } from "@playwright/test";
import { paginas } from "./paginas";

/** Os links do cabeçalho ficam na ilha: o botão "Menu, seção atual: ..." abre a lista. */
async function abrirIlha(page: Page) {
	const menu = page.getByRole("button", { name: /^Menu/ });
	await menu.click();
	await expect(menu).toHaveAttribute("aria-expanded", "true");
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
	await expect(projetos.getByText("Novo", { exact: true })).toHaveCount(0);
	await projetos.getByRole("link", { name: "Funis interativos" }).click();
	await expect(page).toHaveURL(/\/cases\/funis-interativos$/);
	await expect(page.getByRole("heading", { level: 1 })).toHaveText("Funis interativos");
});

test("os artigos abrem em nova aba e avisam o leitor de tela, com o título inteiro", async ({
	page,
}) => {
	await page.goto("/");
	const artigos = page.getByRole("region", { name: "Artigos" });
	await expect(artigos.getByRole("listitem")).toHaveCount(3);
	const links = artigos.getByRole("link");
	await expect(links).toHaveCount(3);
	for (const link of await links.all()) {
		await expect(link).toHaveAttribute("target", "_blank");
		await expect(link).toHaveAccessibleName(/abre em nova aba$/);
	}
	// O título resumido na tela continua inteiro para o leitor de tela.
	await expect(
		artigos.getByRole("link", {
			name: /^Design Engineering começa antes do código: o que aprendi construindo o designDivergente/,
		}),
	).toHaveCount(1);
});

test("o rodapé traz o convite, o e-mail e a hora local", async ({ page }) => {
	await page.goto("/");
	const rodape = page.getByRole("contentinfo");
	await expect(rodape.getByRole("heading", { name: "Vamos conversar?" })).toBeVisible();
	await expect(rodape.getByRole("link", { name: "taianecriscampos@gmail.com" })).toHaveAttribute(
		"href",
		"mailto:taianecriscampos@gmail.com",
	);
	await expect(rodape.locator("[data-hora-valor]")).toHaveText(/^\d{2}:\d{2}$/);
});

test("o cabeçalho leva às seções da página inicial e de volta ao início", async ({ page }) => {
	await page.goto("/");
	await abrirIlha(page);
	const navegacao = page.getByRole("navigation", { name: "Principal" });
	await expect(navegacao.getByRole("link")).toHaveText(["Projetos", "Artigos", "Sobre"]);
	await navegacao.getByRole("link", { name: "Sobre" }).click();
	await expect(page).toHaveURL(/\/#sobre$/);
	// A ilha fecha depois da escolha e passa a mostrar a seção escolhida.
	await expect(page.locator("#ilha-painel")).toBeHidden();
	await expect(page.getByRole("button", { name: /^Menu/ })).toHaveAccessibleName(
		"Menu, seção atual: Sobre",
	);
	await page.goto("/cases/funis-interativos");
	await page.getByRole("banner").getByRole("link", { name: "Taiane Cris Campos" }).click();
	await expect(page).toHaveURL(/\/$/);
});

test("a ilha fecha com Esc e devolve o foco ao botão", async ({ page }) => {
	await page.goto("/");
	const menu = page.getByRole("button", { name: /^Menu/ });
	await menu.focus();
	await page.keyboard.press("Enter");
	await expect(menu).toHaveAttribute("aria-expanded", "true");
	await page.keyboard.press("Tab");
	await expect(page.locator("#ilha-painel a").first()).toBeFocused();
	await page.keyboard.press("Escape");
	await expect(menu).toHaveAttribute("aria-expanded", "false");
	await expect(menu).toBeFocused();
	await expect(page.locator("#ilha-painel")).toBeHidden();
});

test("no case, o cabeçalho leva a cada seção do texto", async ({ page }) => {
	await page.goto("/cases/funis-interativos");
	await abrirIlha(page);
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
