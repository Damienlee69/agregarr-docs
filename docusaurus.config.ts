import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Agregarr',
  tagline: 'Effortless Plex Collection Management',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://agregarr.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'agregarr',
  projectName: 'agregarr',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/agregarr/agregarr-docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Agregarr',
        src: 'img/os_icon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'setupSidebar',
          position: 'left',
          label: 'Setup',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'faqSidebar',
          position: 'left',
          label: 'F.A.Q',
        },
        {
          href: 'https://github.com/agregarr/agregarr',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/RfEPPRQJQ2',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Setup',
          items: [
            {
              label: 'Installation',
              to: '/docs/installation',
            },
            {
              label: 'Initial Setup',
              to: '/docs/setup',
            },
            {
              label: 'First Collection',
              to: '/docs/creating-a-collection',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Collection Sources',
              to: '/docs/sources/overview',
            },
            {
              label: 'Downloads & Integration',
              to: '/docs/downloads/overview',
            },
          ],
        },
        {
          title: 'Help & Support',
          items: [
            {
              label: 'F.A.Q',
              to: '/docs/faq',
            },
            {
              label: 'Discord Community',
              href: 'https://discord.gg/RfEPPRQJQ2',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/agregarr/agregarr',
            },
            {
              label: 'Docker Hub',
              href: 'https://hub.docker.com/r/agregarr/agregarr',
            },
            {
              label: 'Report Issues',
              href: 'https://github.com/agregarr/agregarr/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agregarr. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
