const slugify = require('@vuepress/shared-utils/lib/slugify')
const path = require('path')

module.exports = {
  postcss: {
    plugins: [
      require('postcss-import'),
      require('tailwindcss')(
        path.join(__dirname, 'theme', 'tailwind.config.js')
      ),
      require('postcss-nested'),
    ]
  },

  markdown: {
    // slugify: (string) => slugify(string).trimRight('-').trim('"'),
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