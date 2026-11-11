---
name: versionar
description: Fecha uma versão do portfólio com Versionamento Semântico, CHANGELOG e etiqueta no Git. Use quando a Taiane aprovar uma etapa ou pedir para versionar, salvar a versão ou publicar.
---
# Versionar

1. Leia o histórico desde a última etiqueta (`git log`).
2. Defina o número:
   - Antes da 1.0.0: cada etapa aprovada sobe o número do meio (0.1.0 → 0.2.0); ajustes sobem o último.
   - Depois: MAIOR = redesenho ou mudança de posicionamento; MENOR = case, seção ou idioma novo;
     CORREÇÃO = texto, bug, detalhe visual.
3. Atualize `version` no package.json, o CHANGELOG.md (formato Keep a Changelog, em português)
   e o docs/status.md.
4. Commit `chore: versão X.Y.Z` e etiqueta `vX.Y.Z`.
5. Explique à Taiane o que entrou na versão e qual é a próxima etapa. Peça confirmação antes de enviar ao GitHub.
