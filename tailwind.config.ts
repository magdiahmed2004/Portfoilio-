import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#111214',
        softWhite: '#f4f3ef',
        warmGray: '#b7b0a4',
        mutedBeige: '#c4b8a6',
        subtleCyan: '#8aa6ab'
      },
      fontFamily: {
        sans: ['Inter', 'Avenir Next', 'Helvetica Neue', 'sans-serif']
      },
      gridTemplateColumns: {
        exhibition: 'repeat(12, minmax(0, 1fr))'
      }
    }
  },
  plugins: []
};

export default config;
