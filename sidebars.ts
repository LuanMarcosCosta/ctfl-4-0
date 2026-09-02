import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  ctflSidebar: [
    {type: 'doc', id: 'introducao/intro', label: '📚 Introdução'},
    {
      type: 'category',
      label: '🧪 1. Fundamentos de Teste',
      items: [{type: 'doc', id: 'fundamentos/intro'}],
    },
    {
      type: 'category',
      label: '🔄 2. Testes ao Longo do SDLC',
      items: [{type: 'doc', id: 'sdlc/intro'}],
    },
    {
      type: 'category',
      label: '🔎 3. Teste Estático',
      items: [{type: 'doc', id: 'teste-estatico/intro'}],
    },
    {
      type: 'category',
      label: '🎯 4. Técnicas de Teste',
      items: [{type: 'doc', id: 'tecnicas-de-teste/intro'}],
    },
    {
      type: 'category',
      label: '📋 5. Gerenciamento de Testes',
      items: [{type: 'doc', id: 'gerenciamento-de-testes/intro'}],
    },
    {
      type: 'category',
      label: '🐞 6. Defeitos',
      items: [{type: 'doc', id: 'defeitos/intro'}],
    },
    {
      type: 'category',
      label: '🛠️ 7. Ferramentas',
      items: [{type: 'doc', id: 'ferramentas/intro'}],
    },
    {type: 'doc', id: 'exercicios/intro', label: '🧠 Exercícios'},
    {type: 'doc', id: 'glossario/intro', label: '📖 Glossário'},
  ],
};

export default sidebars;
