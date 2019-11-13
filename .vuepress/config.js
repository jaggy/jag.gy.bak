const plugins = require('./plugins')
const head = require('./config/head')
const postcss = require('./config/postcss')
const themeConfig = require('./config/theme')
const markdown = require('./config/markdown')

module.exports = {
  plugins, head, postcss, themeConfig, markdown,

  title: 'Jaggy Gauran',
  description: "I write about design, development, and any other thing that comes to mind.",
}