const slugify = require('@vuepress/shared-utils/lib/slugify')

module.exports = {
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