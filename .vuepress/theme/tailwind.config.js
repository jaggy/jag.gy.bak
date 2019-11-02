module.exports = {
  theme: {
    colors: {
      black: '#4b4f56',
      gray: '#888888',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },

    fontFamily: {
      script: [
        'Sedgwick Ave',
        'cursive',
      ],

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
      lg: '1.25em',
      xl: '1.6em',
      '2xl': '2em',
      '3xl': '2.5em',
    },

    extend: {
      letterSpacing: {
        normal: '-0.02em'
      },
    }
  },
  variants: {},
}
