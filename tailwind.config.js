/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpunk: {
          bg: 'var(--cyberpunk-bg)',
          primary: 'var(--cyberpunk-primary)',
          secondary: 'var(--cyberpunk-secondary)',
          accent: 'var(--cyberpunk-accent)',
          accent2: 'var(--cyberpunk-accent2)',
          text: 'var(--cyberpunk-text)',
        },
        retrowave: {
          bg: 'var(--retrowave-bg)',
          primary: 'var(--retrowave-primary)',
          secondary: 'var(--retrowave-secondary)',
          accent: 'var(--retrowave-accent)',
          accent2: 'var(--retrowave-accent2)',
          text: 'var(--retrowave-text)',
        },
        modern: {
          bg: 'var(--modern-bg)',
          secondaryBg: 'var(--modern-secondary-bg)',
          primary: 'var(--modern-primary)',
          secondary: 'var(--modern-secondary)',
          accent: 'var(--modern-accent)',
          accent2: 'var(--modern-accent2)',
          text: 'var(--modern-text)',
        },
      },
    },
  },
  plugins: [],
}
