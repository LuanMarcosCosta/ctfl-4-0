# CTFL 4.0 — Guia Prático de Estudos

Guia independente de estudos para a certificação ISTQB Certified Tester Foundation Level (CTFL) 4.0. Este repositório contém a estrutura técnica inicial do projeto (Docusaurus + React + TypeScript) preparada para receber conteúdo de estudo, exercícios e exemplos práticos.

**Este material é independente e NÃO é uma documentação oficial da ISTQB.**

## Tecnologias

- Docusaurus
- React
- TypeScript
- MDX / Markdown
- Node.js + npm

## Estrutura do projeto (inicial)

ctfl-4-0/
├── docs/                     # Conteúdo da documentação (placeholders)
├── src/                      # Componentes e páginas React
├── static/                   # Imagens e ativos estáticos
├── docusaurus.config.ts      # Configuração do site
├── sidebars.ts               # Sidebar personalizada
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore

## Como instalar

```bash
npm install
```

## Como executar localmente

```bash
npm run start
```

## Como gerar o build

```bash
npm run build
```

## Como contribuir

- Abra issues para sugestões e melhorias.
- Envie pull requests com pequenas alterações.
- Mantenha as mudanças em TypeScript e siga a estrutura estabelecida.

## Preparando para versionamento

O repositório já está pronto para uso com Git. Para iniciar localmente:

```bash
git init
git add .
git commit -m "chore: initial project structure"
```

## Próximos passos recomendados

- Preencher os tópicos em `docs/` seguindo o padrão de páginas.
- Criar componentes reutilizáveis em `src/components/` (ex.: `ConceptCard`, `TipBox`).
- Adicionar exemplos práticos e exercícios em `docs/exercicios`.

