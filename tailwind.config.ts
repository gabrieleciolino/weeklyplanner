import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   purple: '#614BC3',
    //   teal: '#33BBC5',
    //   mint: '#85E6C5',
    //   lightMint: '#C8FFE0',
    //   white: '#FFFFFF',
    //   black: '#000000',
    //   transparent: 'transparent',
    // },
    fontFamily: {
      roboto: 'var(--font-roboto)',
      openSans: 'var(--font-open-sans)',
    },
    extend: {
      colors: {
        'fuchsia-blue': {
          '50': '#eff1fe',
          '100': '#e2e5fd',
          '200': '#cbcffa',
          '300': '#abb0f6',
          '400': '#8a89f0',
          '500': '#786de7',
          '600': '#6851da',
          '700': '#614bc3',
          '800': '#49389b',
          '900': '#3e347b',
          '950': '#261e48',
        },
        teal: '#33BBC5',
        riptide: {
          '50': '#edfcf6',
          '100': '#d3f8e7',
          '200': '#aaf0d4',
          '300': '#85e6c5',
          '400': '#3acd9f',
          '500': '#17b288',
          '600': '#0b906f',
          '700': '#09735b',
          '800': '#095c49',
          '900': '#094b3e',
          '950': '#042a23',
        },
      },
    },
  },
  plugins: [],
};
export default config;
