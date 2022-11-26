// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Winnie_Bot',
  tagline: 'Winnie is a Discord bot for authors. Winnie allows users to track goals, challenge each other to word wars and sprints, and get prompts to assist with their writing.',
  url: 'https://winniebot.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/aigeroni/winniebot.org/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/styles.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Winnie_Bot',
        logo: {
          alt: 'Winnie_Bot icon',
          src: 'img/winnie.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'User guide',
          },
          {
            href: '/about',
            label: 'About Winnie_Bot',
            position: 'left'
          },
          {
            href: '/contact',
            label: 'Contact us',
            position: 'left'
          },
          {
            href: 'https://discord.gg/mvZZMhK',
            label: 'Join our community Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Guide',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: '&copy; 2022'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
