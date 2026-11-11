/**
 * Coleções de conteúdo. O schema valida cada case na compilação:
 * se faltar um campo ou o tipo estiver errado, o build falha com a mensagem do erro.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const cases = defineCollection({
	// Arquivos que começam com "_" são rascunhos e ficam de fora.
	loader: glob({ base: "./src/content/cases", pattern: "**/[^_]*.{md,mdx}" }),
	schema: z.object({
		titulo: z.string().min(1),
		/** Até 3 frases: quem, o quê, resultado (ADR 0002). */
		resumo: z.string().min(1).max(400),
		empresa: z.string().min(1),
		ano: z.number().int().min(2000).max(2100),
		papel: z.string().min(1),
		/** "publico" mostra tudo; "confidencial" esconde números e telas sensíveis. */
		sigilo: z.enum(["publico", "confidencial"]),
		/** Posição na lista de cases, começando em 1. */
		ordem: z.number().int().positive(),
		resultados: z
			.array(
				z.object({
					valor: z.string().min(1),
					descricao: z.string().min(1),
				}),
			)
			.min(1),
	}),
});

export const collections = { cases };
