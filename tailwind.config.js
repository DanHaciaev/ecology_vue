/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,ysx,vue}'],
  theme: {
    fontFamily: {
      'kalnia': ['Kalnia', 'sans-serif'],
      'pixelify': ['Pixelify Sans', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        // цвет заголовка в хэдэр
        'green-dark': '#1F4A13',
        // цвет кнопки
        'red-button': '#FF0000',
        // цвет обводки
        'red-border': 'rgb(105, 0, 0)',
        // цвет текста в about
        'chartreuse': '#7FFF00',
        // цвет текста в хэдэр
        'green-header': '#1f4a13',
        // цвет для красного контейнера
        'red-bin': '#ff3131',
        'red-back': '#ff3131b7',
        // цвет для желтого контейнера
        'yellow-bin': '#f9d252',
        'yellow-back': '#f9d252b7',
        // цвет для зеленого контейнера
        'green-bin': '#7ed957',
        'green-back': '#7ed957b7',
        // цвет для синего контейнера
        'blue-bin': '#004aad',
        'blue-back': '#004aadb7',
        // цвет для черного контейнера
        'black-bin': '#424242',
        'black-back': '#424242b7',
      },
      backgroundImage: {
        'back-photo': "url('/listva-1.webp')",
        'about-photo': "url('/listva-2.webp')",
        'game-photo': "url('/listva-3.webp')",
      },
      borderWidth: {
        '6': '6px'
      },
      fontSize: {
        '32': '32px'
      },
      borderRadius: {
        '30': '30px'
      },
      spacing: {
        '20': '-7.5rem'
      }
    }
  }
}