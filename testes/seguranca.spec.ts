import { expect, test } from "@playwright/test";

for (const pagina of ["/", "/laboratorio"]) {
	test(`${pagina} tem a política de segurança de conteúdo do Astro`, async ({ page }) => {
		await page.goto(pagina);
		const politica = await page
			.locator('meta[http-equiv="content-security-policy"]')
			.getAttribute("content");

		expect(politica).toContain("default-src 'self'");
		expect(politica).toContain("script-src 'self'");
		expect(politica).toContain("style-src 'self'");
		expect(politica).not.toContain("unsafe-inline");
	});
}

test("o security.txt está publicado", async ({ request }) => {
	const resposta = await request.get("/.well-known/security.txt");
	expect(resposta.ok()).toBe(true);
	const texto = await resposta.text();
	expect(texto).toMatch(/^Contact: https:\/\//m);
	expect(texto).toMatch(/^Expires: /m);
});
