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
	await expect(rodape.getByRole("heading", { name: "Me chama?" })).toBeVisible();
	await expect(rodape.getByRole("link", { name: "taianecriscampos@gmail.com" })).toHaveAttribute(
		"href",
		"mailto:taianecriscampos@gmail.com",
	);
	await expect(rodape.locator("[data-hora-valor]")).toHaveText(/^\d{2}:\d{2}$/);
	await expect(rodape.getByText("Ribeirão Preto / São Paulo, Brasil")).toBeVisible();
	// Todo link externo do rodapé abre em nova aba e avisa o leitor de tela.
	for (const link of await rodape.locator('a[href^="http"]').all()) {
		await expect(link).toHaveAttribute("target", "_blank");
		await expect(link).toHaveAccessibleName(/abre em nova aba$/);
	}
});

test("o botão de copiar o e-mail avisa que copiou e o aviso some depois de 2 segundos", async ({
	page,
	context,
}) => {
	await context.grantPermissions(["clipboard-read", "clipboard-write"]);
	await page.goto("/");
	const rodape = page.getByRole("contentinfo");
	await rodape.getByRole("button", { name: "Copiar e-mail" }).click();
	const aviso = rodape.locator("[data-copiado]");
	await expect(aviso).toHaveText("Copiado");
	await expect(aviso).toHaveAttribute("aria-live", "polite");
	expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
		"taianecriscampos@gmail.com",
	);
	await expect(aviso).toHaveText("", { timeout: 4000 });
});

test("o cabeçalho leva às seções da página inicial e de volta ao início", async ({ page }) => {
	await page.goto("/");
	await abrirIlha(page);
	const navegacao = page.getByRole("navigation", { name: "Principal" });
	const nomes = ["Início", "Projetos", "Artigos", "Sobre", "Skills"];
	const links = navegacao.getByRole("link");
	await expect(links).toHaveCount(nomes.length);
	for (const [i, nome] of nomes.entries()) await expect(links.nth(i)).toHaveAccessibleName(nome);
	await navegacao.getByRole("link", { name: "Sobre" }).click();
	await expect(page).toHaveURL(/\/#sobre$/);
	// A ilha fecha depois da escolha e passa a mostrar a seção escolhida.
	const menu = page.locator(".ilha__botao");
	await expect(menu).toHaveAttribute("aria-expanded", "false");
	await expect(menu).toHaveAccessibleName("Menu, seção atual: Sobre");
	await page.goto("/cases/funis-interativos");
	await page.getByRole("banner").getByRole("link", { name: "Taiane Cris Campos" }).click();
	await expect(page).toHaveURL(/\/$/);
});

test("pelo teclado, a ilha leva o foco à seção atual, anda com as setas e fecha com Esc", async ({
	page,
}) => {
	await page.goto("/");
	const menu = page.locator(".ilha__botao");
	const links = page.locator("#ilha-painel a");
	await menu.focus();
	await page.keyboard.press("Enter");
	await expect(menu).toHaveAttribute("aria-expanded", "true");
	await expect(links.first()).toBeFocused();
	await page.keyboard.press("ArrowDown");
	await expect(links.nth(1)).toBeFocused();
	await page.keyboard.press("ArrowUp");
	await page.keyboard.press("ArrowUp");
	await expect(links.last()).toBeFocused();
	await page.keyboard.press("Escape");
	await expect(menu).toHaveAttribute("aria-expanded", "false");
	await expect(menu).toBeFocused();
	await expect(links.first()).toBeHidden();
});

test("o botão Fechar da ilha fecha o painel e devolve o foco", async ({ page }) => {
	await page.goto("/");
	const menu = page.locator(".ilha__botao");
	await menu.focus();
	await page.keyboard.press("Enter");
	await page.getByRole("button", { name: "Fechar" }).click();
	await expect(menu).toHaveAttribute("aria-expanded", "false");
	await expect(menu).toBeFocused();
});

test("no case, o cabeçalho leva a cada seção do texto", async ({ page }) => {
	await page.goto("/cases/funis-interativos");
	await abrirIlha(page);
	const links = page.getByRole("navigation", { name: "Neste case" }).getByRole("link");
	// Visão geral e as seis seções do case.
	await expect(links).toHaveCount(7);
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

test("o Sobre traz o currículo em PDF e o LinkedIn, os dois em nova aba", async ({ page }) => {
	await page.goto("/");
	const sobre = page.getByRole("region", { name: "Sobre" });
	for (const titulo of ["Resumo", "Experiência profissional", "Formação acadêmica"]) {
		await expect(sobre.getByRole("heading", { name: titulo, exact: true })).toHaveCount(1);
	}
	const curriculo = sobre.getByRole("link", { name: /^Currículo em PDF/ });
	await expect(curriculo).toHaveAttribute("href", "/curriculo.pdf");
	await expect(curriculo).toHaveAttribute("target", "_blank");
	const resposta = await page.request.get("/curriculo.pdf");
	expect(resposta.ok()).toBe(true);
	expect(resposta.headers()["content-type"]).toContain("pdf");
	await expect(sobre.getByRole("link", { name: /^Mais informações no LinkedIn/ })).toHaveAttribute(
		"target",
		"_blank",
	);
});

test("a seção Skills traz hard e soft skills, com ícones só de enfeite", async ({ page }) => {
	await page.goto("/");
	const skills = page.getByRole("region", { name: "Skills" });
	await expect(skills.getByRole("heading", { name: "Hard skills" })).toBeVisible();
	await expect(skills.getByRole("heading", { name: "Soft skills" })).toBeVisible();
	await expect(skills.getByText("Figma", { exact: true })).toBeVisible();
	// Ícones decorativos: escondidos do leitor de tela, que lê só o nome.
	for (const icone of await skills.locator("svg").all()) {
		await expect(icone).toHaveAttribute("aria-hidden", "true");
	}
});
