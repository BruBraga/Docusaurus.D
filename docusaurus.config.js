// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki DIANA na APS',
  tagline: 'Documentação do Projeto',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://brubraga.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Docusaurus.D/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BruBraga', // Usually your GitHub org/user name.
  projectName: 'Docusaurus.D', // Usually your repo name.
  deploymentBranch:"gh-pages",

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BruBraga/Docusaurus.D#',
        },
        blog: false, //nesta linha eu desativei a página blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

 themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.png',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: '',
      logo: {
        alt: 'Início',
        src: 'img/logodaps.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          to: '/equipe',
          position: 'left',
          label: 'Equipe',
        },
        {
          href: 'https://github.com/BruBraga/Docusaurus.D#',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    footer: {
      style: 'light',
    
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),

  themes: [
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    ({
      hashed: true,
    }),
  ],
],
    

 
};
    

       

export default config;
