/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue}'
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          500: '#2C2C2E'
        },
        gray: {
          500: '#666668'
        }
      },
      maxWidth: {
        max: '41rem'
      },
      boxShadow: {
        header: '0 1px 0 0 #E5E5EA'
      }
    },
  },
  plugins: [],
}

