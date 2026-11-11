// @ts-check
import { defineConfig } from "astro/config";

/** A Vercel define VERCEL_ENV como "production" só na compilação do taiane.cc. */
const ehProducao = process.env.VERCEL_ENV === "production";

/**
 * Inclui o /laboratorio em todo ambiente, menos a produção:
 * local, prévias da Vercel, ramificação design, GitHub Actions e testes.
 * @returns {import("astro").AstroIntegration}
 */
function laboratorio() {
	return {
		name: "laboratorio",
		hooks: {
			"astro:config:setup": ({ injectRoute, logger }) => {
				if (ehProducao) {
					logger.info("Produção: /laboratorio fica de fora.");
					return;
				}
				injectRoute({ pattern: "/laboratorio", entrypoint: "./src/pages/_laboratorio.astro" });
				// Protótipos da etapa 0.3.0 (skill prototype). Saem quando a Taiane escolher.
				injectRoute({
					pattern: "/laboratorio/abertura",
					entrypoint: "./src/pages/_prototipo-abertura.astro",
				});
				injectRoute({
					pattern: "/laboratorio/menu",
					entrypoint: "./src/pages/_prototipo-menu.astro",
				});
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	integrations: [laboratorio()],
	// O Shiki colore código com atributos style, que a CSP bloqueia. Se precisar, usar "prism".
	markdown: { syntaxHighlight: false },
	security: {
		// O Astro acrescenta script-src e style-src com os hashes de cada página.
		// frame-ancestors não funciona em <meta>: está no cabeçalho, em vercel.json.
		csp: {
			directives: [
				"default-src 'self'",
				"img-src 'self' data:",
				"font-src 'self'",
				"connect-src 'self'",
				"object-src 'none'",
				"base-uri 'self'",
				"form-action 'self'",
			],
		},
	},
});
