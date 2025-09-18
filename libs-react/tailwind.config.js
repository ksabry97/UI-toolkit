/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './libs-react/src/**/*.{js,jsx,ts,tsx}',
    './libs-react/src/**/*.stories.{js,jsx,ts,tsx,mdx}',
    './libs-angular/src/**/*.{html,ts}',
    './libs-angular/src/**/*.stories.{ts,js,mdx}',
    './libs-shared/src/lib/**/*.css', // <-- include Tailwind CSS library
    './apps/**/*.{html,ts,tsx,js,jsx}',
  ],
  theme: { extend: {} },
  plugins: [],
};
