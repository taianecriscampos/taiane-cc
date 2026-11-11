import { expect, test } from "@playwright/test";
import { paginas } from "./paginas";

for (const pagina of paginas) {
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

	test(`${pagina} não tem nada bloqueado pela CSP`, async ({ page }) => {
		await page.addInitScript(() => {
			const janela = window as Window & { bloqueios?: string[] };
			janela.bloqueios = [];
			document.addEventListener("securitypolicyviolation", (e) => {
				janela.bloqueios?.push(`${e.violatedDirective}: ${e.sample || e.blockedURI}`);
			});
		});
		await page.goto(pagina, { waitUntil: "load" });
		const bloqueios = await page.evaluate(
			() => (window as Window & { bloqueios?: string[] }).bloqueios,
		);
		expect(bloqueios).toEqual([]);
	});
}

test("o security.txt está publicado", async ({ request }) => {
	const resposta = await request.get("/.well-known/security.txt");
	expect(resposta.ok()).toBe(true);
	const texto = await resposta.text();
	expect(texto).toMatch(/^Contact: https:\/\//m);
	expect(texto).toMatch(/^Expires: /m);
});
