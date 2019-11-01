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
  }
}