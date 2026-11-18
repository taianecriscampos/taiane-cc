# ADR 0003 — Segurança enxuta para um site estático

**Data:** 11/11/2026 · **Status:** Aceita

## Contexto

Portfólio estático, sem formulário, sem banco de dados, sem login e sem back-end (ADR 0001).
A superfície de ataque é pequena; os riscos reais são: contas (GitHub, Vercel, Hostinger),
sequestro do domínio, dependências comprometidas, scripts de terceiros e exposição de dados pessoais.

## Decisão

Camada do site (fase 0.1.e, em vercel.json; nota A+ no Mozilla Observatory na 0.9.0):

- Content-Security-Policy restritiva: só recursos do próprio domínio, sem scripts inline
  (usar o suporte a CSP do Astro, conferido na documentação), frame-ancestors 'none'.
- Strict-Transport-Security, X-Content-Type-Options: nosniff, Referrer-Policy:
  strict-origin-when-cross-origin, Permissions-Policy desligando câmera, microfone e localização.
- Fontes e scripts servidos pelo próprio site. Nenhum script de terceiros.
- Análise de visitas com Vercel Web Analytics, sem cookies: dispensa banner de cookies (LGPD).
- /.well-known/security.txt com contato.

Camada do código (fases 0.1.d e 0.1.e):

- Poucas dependências, versões travadas no package-lock.json.
- Audit no script de qualidade (`audit-ci --config audit-ci.jsonc`): bloqueia qualquer vulnerabilidade alta ou crítica, menos a exceção abaixo; Dependabot no GitHub.
- Nenhum segredo no repositório; `.env*` no .gitignore.
- Proteção da ramificação main: mudanças só por pull request com a qualidade aprovada.

Camada das contas (tarefa manual da Taiane, antes do lançamento):

- Verificação em duas etapas no GitHub, na Vercel e na Hostinger.
- Bloqueio de transferência do domínio ativado na Hostinger.

Camada dos dados pessoais (fase 0.4.0):

- Sem telefone no site; contato por LinkedIn e e-mail. No PDF público do currículo, ver a exceção abaixo.
- Remover metadados do PDF e das imagens.

## Exceção encerrada: telefone no PDF do currículo (11/11/2026, encerrada em 13/11/2026)

- Encerrada na v1.1.0: o `public/curriculo.pdf` saiu do site e o "Currículo em PDF" ficou desativado.
  O telefone não está mais publicado. O histórico abaixo fica como registro.

- O que: o PDF público em `public/curriculo.pdf` traz o telefone da Taiane. O site continua sem telefone.
- Por quê: decisão da Taiane; o telefone fica no PDF por enquanto e sai quando ela se recolocar.
- Até quando: até a recolocação; ao sair, trocar o PDF e apagar esta exceção.
- Confirmada pela Taiane na rodada 1d (12/11/2026): exceção temporária, até ela conseguir trabalho.
- Metadados: o PDF não tem autor, programa de criação nem datas. Ele ainda guarda um anexo de
  credenciais de conteúdo (C2PA) com o nome da ferramenta que o gerou e a data; remover ou manter
  é decisão pendente da Taiane.

## Exceção do audit: picomatch (GHSA-fc5q-39xc-vjpf, 18/11/2026)

- Aviso: "picomatch vulnerable to ReDoS through single-branch repeated extglobs" (gravidade alta),
  em todas as versões até a 4.0.7 (a mais recente) e também na linha 2.x.
- Por que é aceito: o picomatch vem com o Astro, o Vite e ferramentas de build; ele roda só na
  compilação, não vai para o ar (o site é estático) e não recebe texto de visitantes. Não existe
  versão corrigida, e o único remédio do npm (`audit fix --force`) trocaria o Astro por uma versão
  major muito antiga.
- Como: `audit-ci` (mantido, usa o próprio npm audit) com lista de exceções em `audit-ci.jsonc`,
  só com esse código. Qualquer outra vulnerabilidade alta continua bloqueando a qualidade.
- Até quando: a exceção sai quando o picomatch tiver correção. Remover o código do
  `audit-ci.jsonc` e rodar `npm audit fix`.
- Descartado: `--omit=dev` (o Astro está em `dependencies`, então o aviso continuaria) e
  sobrescrita (`overrides`) do picomatch (não há versão corrigida).

## Fora do escopo

Banco de dados, autenticação e proteção de formulário: não existem na versão 1.
Se um formulário for criado no futuro, exige nova ADR (validação, anti-spam, LGPD).
