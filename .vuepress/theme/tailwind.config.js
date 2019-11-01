module.exports = {
  theme: {
    colors: {
      black: '#4b4f56',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
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
      ],
      mono: [
        'Inconsolata',
        'monospace',
      ]
    },

    fontSize: {
      sm: '0.85em',
      base: '1em',
      lg: '1.2em',
      xl: '1.45em',
      '2xl': '1.75em',
      '3xl': '2.25em',
    },

    extend: {
      letterSpacing: {
        normal: '-0.02em'
      },
    }
  },
  variants: {},
}
