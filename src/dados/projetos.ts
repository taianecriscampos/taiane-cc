/**
 * Cartões de Projetos a partir da coleção de cases, na ordem de `ordem`.
 * Case com página: o cartão leva a ela, com a capa. Sem página (pagina: false): o cartão vira e
 * mostra o verso, sem imagem (rodada 1e).
 * Usado na página inicial e no Laboratório (comparação dos ícones de "Ver resumo").
 */
import { getCollection } from "astro:content";
import type { Projeto } from "../components/blocos/Projetos.astro";

export async function projetosDosCases(): Promise<Projeto[]> {
	const cases = (await getCollection("cases")).sort((a, b) => a.data.ordem - b.data.ordem);
	return cases.map(({ id, data }) => ({
		titulo: data.titulo,
		ano: data.ano,
		onde: data.cliente,
		descricao: data.chamada,
		rascunho: data.rascunhos.includes("chamada"),
		href: data.pagina ? `/cases/${id}` : undefined,
		imagem: data.pagina ? data.capa : undefined,
		protegido: data.sigilo === "confidencial",
		verso: data.pagina ? undefined : data.verso,
	}));
}
