import { type Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgMainGradient: 'conic-gradient(from 90deg at 50.00% -1040.91%, #D6D6FF 47deg, #F2F2F7 269deg)',
        mainColor: '#FFFFFF',
        textColor: '#171717',
        bgColorUIElement: '#202C40',
      },

      boxShadow: {
        'outline-red': '0 0 0 2px rgba(255, 0, 0, 0.5)',
      },

      borderRadius: {
        '30': '30px',
      },
    },
  },
  plugins: [],
};

export default config;
