import { expect, test } from "@playwright/test";

/** Os testes rodam numa compilação fora de produção: tudo com noindex e robots fechado. */
test("a página inicial tem canonical, Open Graph e ProfilePage com Person", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://taiane.cc/");
	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
		"content",
		"https://taiane.cc/og/padrao.png",
	);
	const json = JSON.parse(
		(await page.locator('script[type="application/ld+json"]').textContent()) ?? "{}",
	);
	expect(json["@type"]).toBe("ProfilePage");
	expect(json.mainEntity["@type"]).toBe("Person");
	expect(json.mainEntity.jobTitle).toContain("Design Engineer");
	expect(json.mainEntity.sameAs).toEqual(
		expect.arrayContaining([
			expect.stringContaining("linkedin.com"),
			expect.stringContaining("substack.com"),
			expect.stringContaining("github.com"),
		]),
	);
});

test("o case de Funis tem Article, canonical e a capa como imagem", async ({ page }) => {
	await page.goto("/cases/funis-interativos");
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		"href",
		"https://taiane.cc/cases/funis-interativos/",
	);
	await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
	const json = JSON.parse(
		(await page.locator('script[type="application/ld+json"]').textContent()) ?? "{}",
	);
	expect(json["@type"]).toBe("Article");
	expect(json.author.name).toBe("Taiane Cris Campos");
	expect(json.image).toMatch(/^https:\/\/taiane\.cc\/_astro\//);
});

test("o Laboratório não entra em nenhum arquivo de busca", async ({ request }) => {
	const sitemap = await (await request.get("/sitemap.xml")).text();
	expect(sitemap).toContain("<loc>https://taiane.cc/cases/funis-interativos/</loc>");
	expect(sitemap).not.toContain("laboratorio");
	const llms = await (await request.get("/llms.txt")).text();
	expect(llms).toMatch(/^# Taiane Cris Campos/);
	expect(llms).not.toContain("laboratorio");
});

test("fora de produção o robots.txt bloqueia tudo", async ({ request }) => {
	const robots = await (await request.get("/robots.txt")).text();
	expect(robots).toContain("Disallow: /");
});
