# Backlog — taiane.cc (não prioritário)

Demandas para fazer com calma, quando houver tempo e tokens.
Antes de qualquer efeito visual: mostrar o link da referência para a Taiane confirmar ANTES de codar.

## Ferramentas e manutenção

- [ ] Aviso "SessionStart:startup hook failed" ao abrir o Claude Code. Um hook de plugin devolve JSON
      inválido. Não afeta o site. Ver com /hooks qual plugin é o dono e decidir se desliga.
- [ ] audit-ci sem atualização desde 07/2024. Rever se continua funcionando.
- [ ] Exceção do picomatch (GHSA-fc5q-39xc-vjpf) na ADR 0003: remover quando sair versão corrigida
      (o Dependabot avisa).
- [ ] Pull requests do Dependabot com versão principal nova: TypeScript 6→7 (#3) e @types/node 22→26 (#2).
      Avaliar com testes antes de aceitar.

## Hospedagem e contas

- [ ] designdivergente.blog: pausado na Vercel até 20/12/2026 (limite de Fast Origin Transfer).
      Ver como foi construído e se dá para levar para o Cloudflare.
- [ ] Vercel no GitHub: tirar o taiane-cc do acesso do app da Vercel (Settings > Applications), se ainda não foi feito.
- [ ] www.taiane.cc: conferir se redireciona para taiane.cc (regra de redirecionamento no Cloudflare).
- [ ] E-mail oi@taiane.cc gratuito (ex.: Email Routing do Cloudflare).
- [ ] Segurança das contas: verificação em duas etapas no GitHub e na Hostinger; regenerar os códigos
      de recuperação da Vercel.

## Interface

- [ ] Celular: o botão "Voltar ao topo" cobre o rodapé dos cartões de Projetos.
- [ ] Efeito no título do hero com mudança de cor (referência provável: realfood.gov, texto que se
      preenche ao rolar). CONFIRMAR a referência com a Taiane antes.
- [ ] Efeito líquido na foto do hero (referência: foyer.framer.website). CONFIRMAR antes.
- [ ] Etiquetas de disciplina do case com cor por assunto.
- [ ] Modo escuro e versão em inglês.

## Em andamento (prioritário, fora deste backlog)

- Seção Artigos automática: 2 últimos do designDivergente + artigo do Substack fixo por último.
