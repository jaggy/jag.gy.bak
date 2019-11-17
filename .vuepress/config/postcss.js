const path = require('path')

const plugins = [
    require('postcss-import'),
    require('tailwindcss')(
      path.join(__dirname, '..', 'theme', 'tailwind.config.js')
    ),
    require('postcss-nested'),
    require('postcss-color-function'),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    require('@fullhuman/postcss-purgecss')(require('./purgecss.js'))
  )
}

module.exports = { plugins }