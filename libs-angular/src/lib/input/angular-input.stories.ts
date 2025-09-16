import type { Meta, StoryObj } from '@storybook/angular';
import { AngularInput } from './angular-input';
import { expect } from 'storybook/test';

const meta: Meta<AngularInput> = {
  component: AngularInput,
  title: 'AngularInput',
};
export default meta;

type Story = StoryObj<AngularInput>;

export const Primary: Story = {
  args: {
    type: 'text',
    placeholder: '',
    parentForm: null,
    fieldName: '',
    disabled: false,
    readonly: false,
  },
};

export const Heading: Story = {
  args: {
    type: 'text',
    placeholder: '',
    parentForm: null,
    fieldName: '',
    disabled: false,
    readonly: false,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/angular-input/gi)).toBeTruthy();
  },
};
