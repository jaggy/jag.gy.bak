const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  content: [
    path.join(__dirname, '..', 'theme', 'components', '*.vue'),
    path.join(__dirname, '..', 'theme', 'layouts', '*.vue'),
    path.join(__dirname, '..', 'theme', 'templates', '*.html'),
  ],
  whitelist: [
    'html', 'body', 'sw-update-popup', 'highlight-lines', 'highlighted',
  ],
  whitelistPatternsChildren: [
    /^o-rich-text$/, /^language-/,
    /^token/, /^pre/, /^code/,
    /^sw-update-popup/
  ],
  whitelistPatterns: [
    /^o-/, /^c-/, /^js-/,
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["html", "vue"]
    }
  ]
}