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
	schema: ({ image }) =>
		z.object({
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
			/**
			 * Quanto tempo durou o projeto: "6 meses". Até 40 caracteres, para caber na ficha.
			 * Opcional: sem a informação na fonte, a ficha não mostra a linha (nada de dado inventado).
			 */
			duracao: z.string().min(1).max(40).optional(),
			/** Disciplinas em pílulas, à direita da introdução. Até 6, de até 40 caracteres. */
			disciplinas: z.array(z.string().min(1).max(40)).max(6).default([]),
			/** "publico" mostra tudo; "confidencial" esconde números e telas sensíveis. */
			sigilo: z.enum(["publico", "confidencial"]),
			/** Posição na lista de cases, começando em 1. */
			ordem: z.number().int().positive(),
			/** Os três cartões do topo do case. */
			cartoes: z.object({
				atuacao: z.string().min(1).max(160),
				desafio: z.string().min(1).max(160),
				solucao: z.string().min(1).max(160),
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
			/**
			 * Campos com conteúdo de exemplo, escrito para a Taiane ver o resultado. Cada um ganha o
			 * atributo data-rascunho na página e entra em docs/rascunhos.md, para ser trocado antes da 1.0.0.
			 * No texto do case, o exemplo fica dentro de <div data-rascunho>.
			 */
			rascunhos: z
				.array(z.enum(["chamada", "resumo", "duracao", "disciplinas", "cartoes", "resultados"]))
				.default([]),
			/**
			 * false: o case não ganha página nesta versão; na página inicial, o cartão vira e mostra
			 * o verso. O arquivo fica no repositório como rascunho para a v1.1.
			 */
			pagina: z.boolean().default(true),
			/** Verso do cartão que vira: até 4 parágrafos, cada um com um rótulo opcional em negrito. */
			verso: z
				.array(
					z.object({
						rotulo: z.string().min(1).max(30).optional(),
						texto: z.string().min(1).max(320),
					}),
				)
				.max(4)
				.default([]),
			/** Imagem do cartão na página inicial, em 16:9, com texto alternativo. */
			capa: z.object({ src: image(), alt: z.string().min(1) }).optional(),
		}),
});

export const collections = { cases };
