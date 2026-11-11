import { defineConfig, devices } from "@playwright/test";

/**
 * Testes de navegador. Só Chromium, em dois perfis: celular e desktop.
 * Testa a versão compilada (dist/), a mesma que vai para o ar.
 * Rode `npm run build` antes, ou use `npm run qualidade`.
 * Porta própria (4322) para não confundir com o `npm run dev`, que usa a 4321.
 */
const porta = 4322;

export default defineConfig({
	testDir: "./testes",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: [["list"], ["html", { open: "never" }]],
	use: {
		baseURL: `http://localhost:${porta}`,
		trace: "on-first-retry",
	},
	projects: [
		{ name: "celular", use: { ...devices["Pixel 7"] } },
		{ name: "desktop", use: { ...devices["Desktop Chrome"] } },
	],
	webServer: {
		command: `npx astro preview --port ${porta}`,
		url: `http://localhost:${porta}`,
		// Sempre um servidor novo, com a compilação mais recente.
		reuseExistingServer: false,
	},
});
