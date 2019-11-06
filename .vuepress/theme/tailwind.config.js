module.exports = {
  theme: {
    colors: {
      black: '#4b4f56',
      gray: '#888888',
      yellow: '#ffde00',
      pink: '#ff0074',

      primary: 'var(--color-primary)',
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
        'marydale',
        'sans-serif',
      ],

      sans: [
        // 'neue-haas-unica',
        'freight-text-pro',
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
      xs: '0.694em',
      sm: '0.833em',
      base: '1em',
      lg: '1.2em',
      xl: '1.44em',
      '2xl': '1.728em',
      '3xl': '2.074em',
      '4xl': '2.488em',
    },

    extend: {
    }
  },
  variants: {},
}
