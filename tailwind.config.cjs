import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        /* couleurs de logos */
        vuejs: '#42b883',
        docker: '#0db7ed',
        python: '#4584b6',
        django: '#092E20',
        fastapi: '#009485',
        js: '#f7df1e',
        bulma: '#00d1b2',
        android: '#a4c639',
        postgresql: '#336791',
        astro: '#D83333',
        tailwind: '#0ea5e9',
        quasar: '#00b4ff',
        php: '#7a86b8',
        wordpress: '#3858e9',
        git: '#f14f32',
        malt: '#FC5757',
        linkedin: '#0a66c2',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
