// @ts-check

const Guide = [
  {
    text: '為什麼選 Slidev',
    link: '/guide/why',
  },
  {
    text: '入門指南',
    link: '/guide/',
  },
  {
    text: '安裝',
    link: '/guide/install',
  },
  {
    text: 'Markdown 語法',
    link: '/guide/syntax',
  },
  {
    text: '瀏覽',
    link: '/guide/navigation',
  },
  {
    text: '動畫',
    link: '/guide/animations',
  },
  {
    text: '匯出',
    link: '/guide/exporting',
  },
  {
    text: '靜態架站',
    link: '/guide/hosting',
  },
  {
    text: '錄製簡報',
    link: '/guide/recording',
  },
  {
    text: '簡報者模式',
    link: '/guide/presenter-mode',
  },
  {
    text: '繪製 & 註記',
    link: '/guide/drawing',
  },
  {
    text: '編輯器整合',
    link: '/guide/editors',
  },
  {
    text: '常見問題',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: '使用主題',
    link: '/themes/use',
  },
  {
    text: '主題庫',
    link: '/themes/gallery',
  },
  {
    text: '開發主題',
    link: '/themes/write-a-theme',
  },
]

const Addon = [
  {
    text: '使用附加元件',
    link: '/addons/use',
  },
  {
    text: '開發附加元件',
    link: '/addons/write-an-addon',
  },
]

const Translations = [
  {
    text: 'English',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: '自訂',
    link: '/custom/',
  },
  {
    text: '目錄結構',
    link: '/custom/directory-structure',
  },
  {
    text: '字體',
    link: '/custom/fonts',
  },
  {
    text: '螢光筆',
    link: '/custom/highlighters',
  },
  {
    text: 'Vue 設定',
    link: '/custom/config-vue',
  },
  {
    text: 'Vite 設定',
    link: '/custom/config-vite',
  },
  {
    text: 'UnoCSS 設定',
    link: '/custom/config-unocss',
  },
  {
    text: 'Windi CSS 設定',
    link: '/custom/config-windicss',
  },
  {
    text: 'Monaco 設定',
    link: '/custom/config-monaco',
  },
  {
    text: 'KaTeX 設定',
    link: '/custom/config-katex',
  },
  {
    text: 'Mermaid 設定',
    link: '/custom/config-mermaid',
  },
  {
    text: '分析器設定',
    link: '/custom/config-parser',
  },
  {
    text: '快捷鍵設定',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue 全域 Context',
    link: '/custom/vue-context',
  },
  {
    text: '全域圖層',
    link: '/custom/global-layers',
  }
]

const BuiltIn = [
  {
    text: '元件',
    link: '/builtin/components',
  },
  {
    text: '版面配置',
    link: '/builtin/layouts',
  },
]

const Resources = [
  {
    text: '展示',
    link: '/showcases',
  },
  {
    text: '學習資源',
    link: '/resources/learning',
  },
  {
    text: '精選封面',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: '指南',
    children: Guide,
  },
  {
    text: '主題',
    children: Theme,
  },
  {
    text: '附加元件',
    children: Addon,
  },
  {
    text: '自訂',
    children: Customizations,
  },
  {
    text: '內建',
    children: BuiltIn,
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: '為開發者設計的簡報投影片',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: '為開發者設計的簡報投影片' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '對此頁面提出修改建議',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:tw']
      }
    },

    nav: [
      {
        text: '指南',
        items: Guide,
      },
      {
        text: '主題',
        items: Theme,
      },
      {
        text: '附加元件',
        items: Addon,
      },
      {
        text: '自訂',
        items: Customizations,
      },
      {
        text: '內建',
        items: BuiltIn,
      },
      {
        text: '資源',
        items: Resources,
      },
      {
        text: '繁體中文',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
