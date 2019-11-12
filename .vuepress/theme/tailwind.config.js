module.exports = {
  theme: {
    colors: {
      black: '#11101e',
      gray: '#888888',
      yellow: '#fbD043',
      pink: '#ff0074',
      mint: '#3fffb8',
      'mint-dark': '#33CC94',
      salmon: '#FF8480',

      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },

    fontFamily: {
      heading: [
        'poynter-oldstyle-text',
        'serif',
      ],

      body: [
        'poynter-oldstyle-text',
        'serif',
      ],

      script: [
        'jakob',
        'sans-serif',
      ],

      mono: [
        'google-ligconsolata',
        'monospace',
      ]
    },

    fontSize: {
      xs: '0.79em',
      sm: '0.889em',
      base: '1em',
      lg: '1.125em',
      xl: '1.266em',
      '2xl': '1.424em',
      '3xl': '1.602em',
      '4xl': '1.802em',
      '5xl': '2.027em',
      '6xl': '2.281em',
      '7xl': '2.566em',
    },

    extend: {
      lineHeight: {
        normal: '1.58',
      },

      letterSpacing: {
        normal: '-0.016em',
      },
    },
  },
  variants: {},
}
