import type { Meta, StoryObj } from '@storybook/angular';
import { AngularUi } from './angular-ui';
import { expect } from 'storybook/test';

const meta: Meta<AngularUi> = {
  component: AngularUi,
  title: 'AngularUi',
};
export default meta;

type Story = StoryObj<AngularUi>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/angular-ui/gi)).toBeTruthy();
  },
};
