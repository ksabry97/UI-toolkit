/* eslint-disable @nx/enforce-module-boundaries */
import type { Preview } from '@storybook/react';

// Import your Tailwind entry file
import '@ui-kit-workspace/libs-shared';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
