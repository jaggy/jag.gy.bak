module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'itc-american-typewriter',
          'serif'
        ]
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-modularscale')({
      sizes: [
        { size: 'sm', value: -1 },
        { size: 'base', value: 0 },
        { size: 'lg', value: 1 },
        { size: 'xl', value: 2 },
        { size: '2xl', value: 3 },
        { size: '3xl', value: 4 },
        { size: '4xl', value: 5 }
      ],
      base:  18,
      ratio: 1.333, // Perfect Fourth
      unit: 'px',
    })
  ]
}
