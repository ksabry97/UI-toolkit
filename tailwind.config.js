/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // React components + stories
    './libs-react/src/**/*.{js,jsx,ts,tsx}',
    './libs-react/**/*.stories.{js,jsx,ts,tsx,mdx}',
    './libs-react/.storybook/**/*.{js,ts,jsx,tsx,mdx}',

    // Angular components + stories
    './libs-angular/src/**/*.{html,ts,scss}',
    './libs-angular/**/*.stories.{ts,js,mdx}',
    './libs-angular/.storybook/**/*.{js,ts,html,mdx}',

    // Shared library (tokens, styles, etc.)
    './libs-shared/src/**/*.{css,html,ts,js,jsx,tsx}',

    // Apps (if any)
    './apps/**/*.{html,ts,tsx,scss,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
