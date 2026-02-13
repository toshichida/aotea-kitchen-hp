import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        forest: {
          DEFAULT: '#2C5F4F',
          dark: '#234A3D',
        },
        timber: '#B08968',
        sumi: '#2B2B2B',
        ocean: '#7BA7A3',
        gold: '#D4AF37',
        sakura: '#F4E5E0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'var(--font-noto-serif-jp)', 'serif'],
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'sans-serif'],
        logo: ['var(--font-cormorant)', 'serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
        '4xl': '128px',
      },
      maxWidth: {
        'container': '1280px',
        // Explicitly restore standard max-width values to prevent conflict with custom spacing
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
      },
    },
  },
  plugins: [],
}

export default config
