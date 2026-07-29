// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',

    // {
    //   type: 'category',
    //   label: 'OpenMetadata',
    //   items: [
    //     'openmetadata/index',
    //   ],
    // },

    {
      type: 'category',
      label: 'Catálogo de Dados',
      items: [
        {
          type: 'category',
          label: 'Pré-Natal',
          items: [
            'pec/prenatal/antecedentes',
            'pec/prenatal/subjetivo',
            'pec/prenatal/objetivo',
            'pec/prenatal/avaliacao',
            'pec/prenatal/plano',
            'pec/prenatal/finalizacao',
          ],
        },
        {
          type: 'category',
          label: 'Câncer de Colo de Útero',
          items: [
            'pec/cancer-colo-utero/cadastro',
            'pec/cancer-colo-utero/objetivo',
            'pec/cancer-colo-utero/plano',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
