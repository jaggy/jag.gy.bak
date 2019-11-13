const slugify = require('@vuepress/shared-utils/lib/slugify')
const path = require('path')

module.exports = {
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-150x150.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],

  plugins: {
    '@vuepress/pwa': {
       serviceWorker: true,
       updatePopup: true
     },
     'sitemap': {
        hostname: 'https://jag.gy'
     },

     'vuepress-plugin-rss': {
        base_url: '/',
        site_url: 'https://jag.gy',
        filter: (frontmatter) => { return frontmatter.is_published },
        count: 20
      }
  },

  postcss: {
    plugins: [
      require('postcss-import'),
      require('tailwindcss')(
        path.join(__dirname, 'theme', 'tailwind.config.js')
      ),
      require('postcss-nested'),
      require('postcss-color-function'),
    ]
  },

  markdown: {
    slugify: (string) => slugify(string).replace(`“`, '').replace(`”`, '').replace(/\-$/, ''),

    anchor: {
      permalinkClass: 'c-anchor',
    },

    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-attrs'))
      md.use(require('markdown-it-mark'))
    }
  }
}