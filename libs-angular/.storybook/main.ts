/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { StorybookConfig } from '@storybook/angular';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    // Force Angular builder to use your root postcss.config.js
    const postcssLoader = (config!.module!.rules as any[])
      .find((rule) => rule.test?.toString().includes('css'))
      ?.use?.find((u: any) => u.loader?.includes('postcss-loader'));

    if (postcssLoader) {
      postcssLoader.options = {
        postcssOptions: {
          config: path.resolve(__dirname, '../../../postcss.config.js'),
        },
      };
    }

    return config;
  },
};

export default config;
