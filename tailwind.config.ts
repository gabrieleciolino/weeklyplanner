import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'purple': '#614BC3',
      'teal': '#33BBC5',
      'mint': '#85E6C5',
      'lightMint': '#C8FFE0',
      'white': '#FFFFFF',
      'black': '#000000',
      'transparent': 'transparent'
    },
    fontFamily: {
      roboto: 'var(--font-roboto)',
      openSans: 'var(--font-open-sans)',
    }
  },
  plugins: [],
}
export default config
