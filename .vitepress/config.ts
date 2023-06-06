import { defineConfig } from 'vitepress';

// add search https://github.com/emersonbottero/vitepress-plugin-search
export default defineConfig({
  titleTemplate: 'M.Shrief :: :title',
  description:
    'Junior Web Developer, using Vuejs for the frontend, and Nodejs & Express.js on the backend. Worked with MongoDB and Postgress',
  lang: 'en-US',
  appearance: 'dark',
  base: '/site/', // base url for deployment
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Home',
    // nav: [
    //   { text: 'Projects', link: '/projects' },
    //   { text: 'Learning Journey', link: '/learning' },
    // ],
    sidebar: [
      {
        text: 'Projects',
        link: '/projects',
      },
      { text: 'Learning Journey', link: '/learning' },
    ],
    // sidebar: {
    //   '/': [
    //     {
    //       text: 'Personal Skills',
    //       // collapsed: true,
    //       link: '/',
    //       items: [
    //       ],
    //     },
    //   ],
    // },
    // search: {
    //   provider: 'local',
    // },

    socialLinks: [{ icon: 'github', link: 'https://github.com/m-shrief' }],
    footer: {
      copyright: 'Copyright © 2023-present Mohamed Shrief',
    },
  },
});
