/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        dark: {
          500: '#2C2C2E'
        },
        gray: {
          light: '#F2F2F7',
          500: '#666668'
        }
      },
      maxWidth: {
        max: '41rem'
      },
      boxShadow: {
        header: '0 1px 0 0 #E5E5EA',
        footer: '0 -1px 0 0 #E5E5EA',
      }
    },
  },
  plugins: [],
}

