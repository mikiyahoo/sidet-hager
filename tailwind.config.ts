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
        primary: '#0d152c',
        primaryLight: '#1e4380',
        secondary: '#f7b219',
        optional: '#3a506b',
        backgroundLight: '#f5f5f5',
        white: '#ffffff',
      },
      fontFamily: {
        heading: ['Branding SF W05', 'Inter', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        black: '900',
      },
      boxShadow: {
        glow: '0 10px 40px rgba(247,178,25,0.25)',
      },
      backgroundImage: {
        heroGradient:
          'radial-gradient(circle at top left, rgba(30,67,128,0.4), transparent 40%)',
      },
    },
  },
  plugins: [],
}

export default config