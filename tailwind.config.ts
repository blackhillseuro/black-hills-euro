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
        // Zandvoort Blue accent
        gold: {
          DEFAULT: '#0066CC',
          light: '#1a7fe0',
          dark: '#0055b3',
        },
        surface: {
          DEFAULT: '#141414',
          2: '#1e1e1e',
          3: '#252525',
        },
      },
    },
  },
  plugins: [],
}
export default config
