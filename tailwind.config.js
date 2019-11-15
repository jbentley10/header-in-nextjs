// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          display: ['Volte', 'Inter-Loom', 'Roboto', 'NanumBarunGothic', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        },
        colors: {
          'dark-background': '#1b242c'
        },
        width: {
          '49': '49%',
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
    variants: {},
    plugins: [],
  }