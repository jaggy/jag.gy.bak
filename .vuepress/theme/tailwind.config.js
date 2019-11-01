module.exports = {
  theme: {
    colors: {
      black: '#4b4f56',
    },

    extend: {
      letterSpacing: {
        normal: '-0.02em'
      },

      fontFamily: {
        sans: [
          // 'neue-haas-unica',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-modularscale')({
      sizes: [
        { size: 'xs', value: -2 },
        { size: 'sm', value: -1 },
        { size: 'base', value: 0 },
        { size: 'lg', value: 1 },
        { size: 'xl', value: 2 },
        { size: '2xl', value: 3 },
        { size: '3xl', value: 4 },
        { size: '4xl', value: 5 },
        { size: '5xl', value: 6 },
        { size: '6xl', value: 7 },
        { size: '7xl', value: 8 },
      ],
      base:  18,
      ratio: 1.2,
      unit: 'px',
    })
  ]
}
