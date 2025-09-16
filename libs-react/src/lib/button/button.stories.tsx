import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'React UI/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    content: 'Click me',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    content: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    content: 'Secondary',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    content: 'Tertiary',
    variant: 'tertiary',
  },
};


