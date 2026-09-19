import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introdução',
      items: ['introducao/visao-geral', 'introducao/como-contribuir'],
    },
    {
      type: 'category',
      label: 'Fundamentos',
      items: [
        'fundamentos/introducao',
        'fundamentos/qualidade-de-software',
        'fundamentos/teste-de-software',
        'fundamentos/erro-defeito-falha',
        'fundamentos/principios-de-teste',
      ],
    },
    {
      type: 'category',
      label: 'Ciclo de Vida',
      items: ['ciclo-de-vida/introducao', 'ciclo-de-vida/modelos-de-desenvolvimento', 'ciclo-de-vida/teste-no-ciclo-de-desenvolvimento', 'ciclo-de-vida/niveis-de-teste'],
    },
    {
      type: 'category',
      label: 'Técnicas de Teste',
      items: ['tecnicas-de-teste/introducao', 'tecnicas-de-teste/particionamento-de-equivalencia', 'tecnicas-de-teste/analise-de-valor-limite', 'tecnicas-de-teste/tabela-de-decisao', 'tecnicas-de-teste/teste-de-transicao-de-estado', 'tecnicas-de-teste/teste-de-caso-de-uso'],
    },
    {
      type: 'category',
      label: 'Tipos de Teste',
      items: ['tipos-de-teste/introducao', 'tipos-de-teste/teste-funcional', 'tipos-de-teste/teste-nao-funcional', 'tipos-de-teste/teste-de-regressao', 'tipos-de-teste/teste-de-confirmacao', 'tipos-de-teste/teste-exploratorio'],
    },
    {
      type: 'category',
      label: 'Gerenciamento',
      items: ['gerenciamento/introducao', 'gerenciamento/estrategia-de-teste', 'gerenciamento/plano-de-teste', 'gerenciamento/criterios-de-entrada-e-saida', 'gerenciamento/gerenciamento-de-defeitos', 'gerenciamento/metricas-de-teste'],
    },
    {
      type: 'category',
      label: 'Automação',
      items: ['automacao/introducao', 'automacao/quando-automatizar', 'automacao/piramide-de-testes', 'automacao/boas-praticas', 'automacao/cypress', 'automacao/playwright'],
    },
    {
      type: 'category',
      label: 'API Testing',
      items: ['api/introducao', 'api/conceitos', 'api/testes-de-api', 'api/boas-praticas'],
    },
    {
      type: 'category',
      label: 'Qualidade de Código',
      items: ['qualidade-de-codigo/introducao', 'qualidade-de-codigo/code-review', 'qualidade-de-codigo/static-analysis', 'qualidade-de-codigo/quality-gates', 'qualidade-de-codigo/sonarqube'],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: ['ci-cd/introducao', 'ci-cd/testes-no-ci', 'ci-cd/quality-gates'],
    },
    {
      type: 'category',
      label: 'Ferramentas',
      items: ['ferramentas/introducao', 'ferramentas/test-management', 'ferramentas/bug-tracking', 'ferramentas/automacao'],
    },
    'glossario',
  ],
};

export default sidebars;
