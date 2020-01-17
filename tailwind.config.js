// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    screens: {
      'sm': '0',

      'md': '768px',

      'lg': '990px',

      'xl': '1200px',
    },
    extend: {
      fontFamily: {
        display: ['Volte', 'Inter-Loom', 'Roboto', 'NanumBarunGothic', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'dark-background': '#1b242c',
        'link-purple': '#9c79e3',
        'link-purple-darker': '#5e4297',
        'button-purple': '#732aff',
        'button-purple-darker': '#4510aa',
        'horizontal-bar': '#707070',
        'navigation-hover': '#777777',
        'cool-green': '#41676E',
        'cool-green--reduced-opacity': '#2E464D',
        'cool-blue': '#402C8B',
        'cool-blue--reduced-opacity': '#2E285B',
        'cool-purple': '#812373',
        'cool-purple--reduced-opacity': '#4E234F',
      },
      borderRadius: {
        'button-radius': '15px'
      },
      width: {
        '49': '49%',
        '8': '8%',
        '3': '3%'
      },
      padding: {
        'button-padding': '20px 30px'
      },
      height: {
        '68': '17vh',
        '128': '32vh',
        '260': '65vh',
        '340': '85vh',
      },
      minHeight: {
        '1/20': '5%',
        '1/10': '10%',
        '1/8': '12.5%',
        'screen-half': '50vh',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100%',
      }
    }
  },
  variants: {
    textColor: ['hover'],
    backgroundColor: ['hover'],
    boxShadow: ['hover'],
  },
  plugins: [],
}