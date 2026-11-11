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
		/** Até 60 caracteres: acima disso, o título ocupa linhas demais no celular (break-ui). */
		titulo: z.string().min(1).max(60),
		/** Uma linha para a lista de projetos da página inicial. */
		chamada: z.string().min(1).max(120),
		/** Até 3 frases: quem, o quê, resultado (ADR 0002). */
		resumo: z.string().min(1).max(400),
		empresa: z.string().min(1),
		/** Nome curto para as listas e os metadados: "Inlead", "Azul · WeFit". */
		cliente: z.string().min(1).max(24),
		ano: z.number().int().min(2000).max(2100),
		papel: z.string().min(1),
		/** "publico" mostra tudo; "confidencial" esconde números e telas sensíveis. */
		sigilo: z.enum(["publico", "confidencial"]),
		/** Posição na lista de cases, começando em 1. */
		ordem: z.number().int().positive(),
		/** Os três cartões do topo do case. `rascunho: true` mostra o marcador [RASCUNHO] acima deles. */
		cartoes: z.object({
			atuacao: z.string().min(1).max(160),
			desafio: z.string().min(1).max(160),
			solucao: z.string().min(1).max(160),
			rascunho: z.boolean().default(false),
		}),
		resultados: z
			.array(
				z.object({
					/** Até 16 caracteres, para caber na faixa de resultados sem quebrar. */
					valor: z.string().min(1).max(16),
					descricao: z.string().min(1),
				}),
			)
			.min(1)
			.max(3),
	}),
});

export const collections = { cases };
