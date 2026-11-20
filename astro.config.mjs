// @ts-check
import { defineConfig } from "astro/config";

/**
 * É produção na Vercel (VERCEL_ENV "production") ou no Cloudflare Pages
 * (CF_PAGES "1" na ramificação main). Prévias de outras ramificações não são produção.
 */
const ehProducao =
	process.env.VERCEL_ENV === "production" ||
	(process.env.CF_PAGES === "1" && process.env.CF_PAGES_BRANCH === "main");

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
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: "https://taiane.cc",
	integrations: [laboratorio()],
	// Imagens responsivas também no Markdown dos cases: várias larguras (srcset), e o navegador
	// baixa só a que precisa. Sem os estilos automáticos: cada componente cuida do próprio CSS.
	image: { layout: "constrained", responsiveStyles: false },
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
