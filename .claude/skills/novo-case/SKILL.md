---
name: novo-case
description: Cria um case do portfólio na estrutura padrão a partir de um texto, link ou áudio transcrito da Taiane. Use quando ela pedir para criar, adicionar ou reescrever um case ou projeto.
---
# Novo case

Crie `src/content/cases/<slug>.md` seguindo o schema da coleção `cases` (src/content.config.ts).

Estrutura do texto:
1. Resumo (para quem tem pressa): papel, período, equipe, restrições e até 3 resultados.
2. Contexto
3. Problema
4. Processo e decisões (deixe claro o que foi decisão da Taiane e o que foi do time)
5. Solução
6. Resultados — sempre com uma linha de método: como e quando foi medido.
7. Aprendizados

Regras:
- Sem emojis; a hierarquia vem dos títulos.
- Case sob sigilo (`sigilo: "confidencial"`; o padrão é `"publico"`): sem telas, números internos ou documentos; mostre processo e papel.
- Mantenha a voz da Taiane; não invente dados. Liste as perguntas em aberto no fim da resposta.
- Imagens em `src/assets/cases/<slug>/`, com texto alternativo descritivo.
