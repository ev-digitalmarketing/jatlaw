module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#133A66', deep: '#0B2545', royal: '#1F5AA6', gold: '#C9A903', cream: '#F7F3E8' },
      fontFamily: { heading: ['var(--font-mont)', 'sans-serif'], body: ['var(--font-open)', 'sans-serif'] },
    },
  },
  plugins: [],
};
