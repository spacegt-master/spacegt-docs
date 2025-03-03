import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SpaceGT",
  description: "A super handy toolset",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Document', link: '/document' }
    ],

    sidebar: [
      {
        text: 'Document',
        items: [
          { text: 'Markdown Examples', link: '/document' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'Copyright © 2022-present Spacegt'
    }
  }
})
