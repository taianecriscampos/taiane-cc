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
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	integrations: [laboratorio()],
});
