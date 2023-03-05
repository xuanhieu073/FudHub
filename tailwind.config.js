module.exports = {
  content: ['./src/**/*'],
  theme: {
    extend: {
      fontFamily: {
        'c-extrabold': ['Poppins-ExtraBold'],
        'c-bold': ['Poppins-Bold'],
        'c-semibold': ['Poppins-SemiBold'],
        'c-medium': ['Poppins-Medium'],
        'c-normal': ['Poppins-Regular'],
        'c-light': ['Poppins-Light'],
        'c-extralight': ['Poppins-ExtraLight'],
        'c-thin': ['Poppins-Thin'],
      },
      colors: {
        primary: {
          100: '#FED2C7',
          200: '#FEA58D',
          300: '#FE8160',
          400: '#FE724C',
        },
        dark: {
          100: '#6E7489',
          200: '#4D5364',
          300: '#2A2F3D',
          400: '#1A1D26',
          500: '#111719',
        },
        gray: {
          100: '#EBEBEB',
          200: '#C4C7D0',
          300: '#A8ACB9',
          400: '#9A9FAE',
        },
      },
    },
    fontSize: {
      xs: [12, 19],
      sm: [15, 24],
      base: [16, 26],
      lg: [18, 29],
      xl: [24, 30],
      '2xl': [30, 38],
      '3xl': [36, 44],
    },
  },
  plugins: [],
};
