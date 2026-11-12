import { expect, test, type Page } from "@playwright/test";
import { paginas } from "./paginas";

/** Os links do cabeçalho ficam na ilha: o botão "Menu, seção atual: ..." abre a lista. */
async function abrirIlha(page: Page) {
	await page.getByRole("button", { name: /^Menu/ }).click();
	// Aberta, a ilha esconde o botão (o painel toma o lugar dele): por isso a classe, e não o papel.
	await expect(page.locator(".ilha__botao")).toHaveAttribute("aria-expanded", "true");
}

for (const pagina of paginas) {
	test(`${pagina} fica fora dos buscadores até a 1.0.0`, async ({ page }) => {
		await page.goto(pagina);
		await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
	});
}

test("a página inicial lista os três cases: Funis leva à página, os outros dois viram", async ({
	page,
}) => {
	await page.goto("/");
	const projetos = page.getByRole("region", { name: "Projetos" });
	await expect(projetos.getByRole("listitem")).toHaveCount(3);
	await expect(projetos.getByRole("button", { name: /^Ver resumo/ })).toHaveCount(2);
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
	await expect(rodape.getByRole("heading", { name: "Me chama!" })).toBeVisible();
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

test("o case mostra ano, cliente e tempo de leitura no topo, e a Visão geral no texto", async ({
	page,
}) => {
	await page.goto("/cases/funis-interativos");
	const topo = page.locator("main header");
	await expect(topo.getByText("2025", { exact: true })).toHaveCount(1);
	await expect(topo.getByText("Inlead", { exact: true })).toHaveCount(1);
	await expect(topo.getByText(/^\d+ minutos? de leitura$/)).toHaveCount(1);
	// Resultados e os três textos ficam no tópico Visão geral, dentro do texto do case.
	const visaoGeral = page.locator(".case-secao", {
		has: page.getByRole("heading", { level: 2, name: "Visão geral" }),
	});
	await expect(
		visaoGeral.getByRole("list", { name: "Resultados" }).getByRole("listitem"),
	).toHaveCount(3);
	for (const rotulo of ["Minha atuação", "Desafio", "Solução"]) {
		await expect(visaoGeral.getByText(rotulo, { exact: true })).toHaveCount(1);
	}
});

test("os cases sob sigilo ficam sem página nesta versão", async ({ page }) => {
	for (const rota of ["/cases/azul-gpt", "/cases/operacao-logistica"]) {
		const resposta = await page.request.get(rota);
		expect(resposta.status()).toBe(404);
	}
	await page.goto("/cases/funis-interativos");
	await expect(page.getByText("Case sob sigilo", { exact: true })).toHaveCount(0);
});

test("o cartão vira com clique, mostra o verso e desvira com Voltar", async ({ page }) => {
	await page.goto("/");
	const botao = page.getByRole("button", { name: "Ver resumo de Azul GPT" });
	const verso = page.getByRole("group", { name: "Resumo de Azul GPT" });
	// De costas, o verso fica inerte: fora do foco e do leitor de tela.
	await expect(verso).toHaveAttribute("inert", "");
	await botao.click();
	await expect(botao).toHaveAttribute("aria-expanded", "true");
	await expect(verso).not.toHaveAttribute("inert");
	await expect(verso).toBeFocused();
	await expect(verso.getByText(/^Assistente interno de IA generativa/)).toBeVisible();
	await expect(verso.getByText("Minha atuação", { exact: true })).toBeVisible();
	await expect(verso.getByText(/Case em construção/)).toHaveCount(0);
	const linkedin = verso.getByRole("link", { name: /^Me chama no LinkedIn/ });
	await expect(linkedin).toHaveAttribute("target", "_blank");
	await verso.getByRole("button", { name: "Voltar" }).click();
	await expect(botao).toHaveAttribute("aria-expanded", "false");
	await expect(botao).toBeFocused();
});

for (const largura of [375, 1024, 1440]) {
	test(`em ${largura} px, os cartões de Projetos não deixam buraco, não têm ilustração e marcam os confidenciais`, async ({
		page,
	}) => {
		await page.setViewportSize({ width: largura, height: 900 });
		await page.goto("/");
		const cartoes = page.locator("#projetos .projeto");
		const caixas = await cartoes.evaluateAll((lis) =>
			lis.map((li) => {
				const r = li.getBoundingClientRect();
				return {
					x: Math.round(r.left),
					y: Math.round(r.top),
					w: Math.round(r.width),
					h: Math.round(r.height),
				};
			}),
		);
		// Só o cartão de Funis tem imagem; os outros dois são tipográficos.
		await expect(page.locator("#projetos .projeto__imagem")).toHaveCount(1);
		await expect(page.locator("#projetos .ilustracao__fundo")).toHaveCount(0);
		// Etiqueta "Confidencial" nos cases sob sigilo; o emoji não é lido.
		const etiquetas = page.locator("#projetos .projeto__etiqueta");
		await expect(etiquetas).toHaveCount(2);
		for (const etiqueta of await etiquetas.all()) {
			await expect(etiqueta).toContainText("Confidencial");
			await expect(etiqueta.locator('[aria-hidden="true"]')).toHaveText("🤫");
		}
		// Símbolo da marca nos dois cartões confidenciais, só de enfeite.
		await expect(page.locator("#projetos .projeto__simbolo svg")).toHaveCount(4);
		const [funis, azul, luft] = caixas;
		if (largura >= 1200) {
			// Três lado a lado, com a mesma altura.
			expect(new Set(caixas.map((c) => c.y)).size).toBe(1);
			expect(new Set(caixas.map((c) => c.h)).size).toBe(1);
		} else if (largura >= 768) {
			// Os três iguais, um embaixo do outro: mesma posição, largura e altura.
			for (const c of [azul, luft]) {
				expect(c.x).toBe(funis.x);
				expect(c.w).toBe(funis.w);
				expect(c.h).toBe(funis.h);
			}
		} else {
			expect(new Set(caixas.map((c) => c.x)).size).toBe(1);
		}
	});
}

test("o cartão vira com o teclado e desvira com Esc", async ({ page }) => {
	await page.goto("/");
	const botao = page.getByRole("button", { name: "Ver resumo de Operação logística" });
	await botao.focus();
	await page.keyboard.press("Enter");
	const verso = page.getByRole("group", { name: "Resumo de Operação logística" });
	await expect(verso).toBeFocused();
	await page.keyboard.press("Escape");
	await expect(botao).toHaveAttribute("aria-expanded", "false");
	await expect(botao).toBeFocused();
	await page.keyboard.press("Space");
	await expect(botao).toHaveAttribute("aria-expanded", "true");
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

test("as pílulas de Skills trazem só hard e soft skills, em duas colunas", async ({ page }) => {
	await page.goto("/");
	const skills = page.getByRole("region", { name: "Skills" });
	await expect(skills.getByRole("heading", { name: "Hard skills" })).toBeVisible();
	await expect(skills.getByRole("heading", { name: "Soft skills" })).toBeVisible();
	await expect(skills.getByRole("heading", { level: 3 })).toHaveCount(2);
	// As ferramentas ficam na faixa, não nas pílulas.
	await expect(skills.locator(".skills__pilula", { hasText: "Figma" })).toHaveCount(0);
});

test("no Sobre, as três colunas vão de margem a margem, com vãos iguais de 80 a 120 px", async ({
	page,
}) => {
	for (const largura of [1200, 1440]) {
		await page.setViewportSize({ width: largura, height: 900 });
		await page.goto("/");
		const caixa = (seletor: string) =>
			page.locator(seletor).evaluate((el) => {
				const r = el.getBoundingClientRect();
				return { inicio: r.left, fim: r.right, topo: r.top };
			});
		const resumo = await caixa(".sobre__coluna:first-child");
		const experiencia = await caixa(".sobre__coluna--experiencia");
		const formacao = await caixa(".sobre__coluna--formacao");
		expect(Math.abs(resumo.fim - resumo.inicio - (formacao.fim - formacao.inicio))).toBeLessThan(1);
		const vao = experiencia.inicio - resumo.fim;
		expect(Math.abs(vao - (formacao.inicio - experiencia.fim))).toBeLessThan(1);
		expect(vao).toBeGreaterThanOrEqual(80);
		expect(vao).toBeLessThanOrEqual(120);
		// Da margem esquerda à direita: a Formação termina onde termina o rótulo da seção.
		const secao = await caixa("#sobre-titulo");
		const margemDireita = await page
			.locator("#sobre")
			.evaluate(
				(el) => el.getBoundingClientRect().right - parseFloat(getComputedStyle(el).paddingRight),
			);
		expect(Math.abs(resumo.inicio - secao.inicio)).toBeLessThan(1);
		expect(Math.abs(formacao.fim - margemDireita)).toBeLessThan(1);
		// Os dois links na mesma linha.
		const curriculo = await caixa(".sobre__link--curriculo");
		const linkedin = await caixa(".sobre__link--linkedin");
		expect(Math.abs(curriculo.topo - linkedin.topo)).toBeLessThan(1);
	}
});

test("a faixa de Ferramentas fica dentro de Skills, sem título, e para com o foco", async ({
	page,
}) => {
	await page.goto("/");
	const skills = page.getByRole("region", { name: "Skills" });
	const faixa = skills.getByRole("group", { name: "Ferramentas" });
	await expect(page.getByRole("heading", { name: "Ferramentas" })).toHaveCount(0);
	await expect(page.locator("#ferramentas")).toHaveCount(0);
	const itens = faixa.getByRole("listitem");
	await expect(itens.first()).toHaveText("Figma");
	expect(await itens.count()).toBeGreaterThan(10);
	// Logos só de enfeite: o leitor de tela lê o nome.
	for (const logo of await faixa.locator("svg").all()) {
		await expect(logo).toHaveAttribute("aria-hidden", "true");
	}
	// Ida de 15 a 20 s, só com transform, e para com o foco na faixa.
	const lista = faixa.locator(".ferramentas__lista");
	await expect(lista).toHaveCSS("animation-duration", "18s");
	await expect(lista).toHaveCSS("animation-name", "ferramentas-vai-e-volta");
	await faixa.focus();
	await expect(lista).toHaveCSS("animation-play-state", "paused");
});

test("no desktop, o sumário do case empilha as seções lidas e marca a atual", async ({ page }) => {
	await page.setViewportSize({ width: 1440, height: 900 });
	await page.goto("/cases/funis-interativos");
	const sumario = page.getByRole("navigation", { name: "Sumário do case" });
	await expect(sumario).toBeVisible();
	await expect(sumario.locator('[aria-current="location"]')).toHaveText("Visão geral");
	// No fim do texto: as seis primeiras (Visão geral e cinco tópicos) ficam pequenas.
	await page
		.locator(".case-secao")
		.last()
		.evaluate((s) => s.scrollIntoView());
	await expect(sumario.locator('[aria-current="location"]')).toHaveText("Aprendizados");
	await expect(sumario.locator('[data-estado="lida"]')).toHaveCount(6);
	// Um item pequeno leva de volta à seção.
	await sumario.getByRole("link", { name: "Problema" }).click();
	await expect(sumario.locator('[aria-current="location"]')).toHaveText("Problema");
	await expect(sumario.locator('[data-estado="proxima"]')).toHaveCount(4);
});

test("no celular, o case não tem sumário fixo e não repete o convite do rodapé", async ({
	page,
}) => {
	await page.setViewportSize({ width: 375, height: 800 });
	await page.goto("/cases/funis-interativos");
	await expect(page.getByRole("navigation", { name: "Sumário do case" })).toBeHidden();
	await expect(page.getByRole("heading", { level: 2, name: "Contexto" })).toBeVisible();
	await expect(page.getByText("Quer saber mais detalhes?")).toHaveCount(0);
});

for (const largura of [375, 1440]) {
	test(`em ${largura} px, a ilha do case acompanha a seção atual, até as curtas`, async ({
		page,
	}) => {
		await page.setViewportSize({ width: largura, height: 800 });
		await page.goto("/cases/funis-interativos");
		const botao = page.locator(".ilha__botao");
		for (const nome of ["Contexto", "Solução", "Aprendizados", "Contexto"]) {
			await page
				.locator(".case-secao", { has: page.getByRole("heading", { level: 2, name: nome }) })
				.evaluate((s) => scrollTo(0, s.getBoundingClientRect().top + scrollY - 200));
			await expect(botao).toHaveAccessibleName(`Menu, seção atual: ${nome}`);
		}
	});
}

for (const pagina of ["/", "/cases/funis-interativos"]) {
	test(`em ${pagina}, o botão Voltar ao topo aparece depois de uma tela e leva o foco ao início`, async ({
		page,
	}) => {
		await page.goto(pagina);
		const botao = page.locator("[data-topo]");
		// No topo, escondido e fora do Tab.
		await expect(botao).toHaveAttribute("inert", "");
		await page.evaluate(() => scrollTo(0, innerHeight * 1.5));
		const visivel = page.getByRole("button", { name: "Voltar ao topo" });
		await expect(visivel).toBeVisible();
		await expect(visivel).toHaveCSS("width", "44px");
		// Centralizado embaixo, longe da hora do rodapé.
		const caixa = await visivel.boundingBox();
		const largura = page.viewportSize()?.width ?? 0;
		expect(Math.abs((caixa?.x ?? 0) + 22 - largura / 2)).toBeLessThan(2);
		await visivel.click();
		await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
		await page.keyboard.press("Tab");
		await expect(page.getByRole("link", { name: "Pular para o conteúdo" })).toBeFocused();
	});
}

test("cada pílula de Skills tem uma skill só, sem 'e' e sem parênteses", async ({ page }) => {
	await page.goto("/");
	const pilulas = page.locator("#skills .skills__pilula");
	const textos = await pilulas.allTextContents();
	expect(textos.length).toBe(34);
	expect(textos[0]).toBe("Product Design");
	for (const texto of textos) {
		expect(texto).not.toMatch(/\se\s|[()]/);
	}
});
