# Software Quality Knowledge Base

Base de conhecimento prática sobre qualidade de software, testes, automação e práticas de engenharia. O conteúdo usa a ISTQB CTFL como referência conceitual, sem reproduzir nem se limitar ao material oficial.

## Objetivo

Oferecer consulta rápida para profissionais de QA, Quality Engineering e desenvolvimento. Cada página prioriza definição, aplicação, exemplos, cuidados e conceitos relacionados.

## Conteúdo

- Fundamentos de qualidade e teste de software
- Ciclo de vida e níveis de teste
- Técnicas e tipos de teste
- Gerenciamento de testes e defeitos
- Automação, APIs, qualidade de código e CI/CD
- Ferramentas e glossário

## Tecnologias

- [Docusaurus 3](https://docusaurus.io/)
- React e TypeScript
- Markdown e MDX

## Como executar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run start
```

O servidor de desenvolvimento será iniciado e exibirá a URL local no terminal.

## Comandos úteis

| Comando | Finalidade |
| --- | --- |
| `npm run start` | Inicia o site em modo de desenvolvimento. |
| `npm run build` | Gera a versão estática de produção em `build/`. |
| `npm run serve` | Serve localmente o conteúdo gerado em `build/`. |
| `npm run typecheck` | Executa a validação de tipos TypeScript. |

## Estrutura

```text
docs/                 Conteúdo da Knowledge Base
src/components/       Componentes React reutilizáveis
src/theme/            Personalizações do tema Docusaurus
src/css/              Estilos globais e de componentes
static/               Arquivos públicos estáticos
sidebars.ts           Navegação lateral da documentação
```

## Como contribuir

1. Crie uma branch a partir de `main`.
2. Mantenha as páginas em português do Brasil e com foco em consulta prática.
3. Use links internos entre conceitos relacionados.
4. Execute `npm run typecheck` e `npm run build` antes de abrir um Pull Request.

## Referências e atribuições

Alguns componentes e estilos foram adaptados do projeto Cypress Documentation, licenciado sob MIT. Consulte [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) para créditos e texto da licença.
