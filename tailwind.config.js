// tailwind.config.js
module.exports = {
  theme: {
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
        'button-purple': '#a880f4',
        'horizontal-bar': '#707070'
      },
      borderRadius: {
        'button-radius': '15px'
      },
      width: {
        '49': '49%',
      },
      padding: {
        'button-padding': '20px 30px'
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