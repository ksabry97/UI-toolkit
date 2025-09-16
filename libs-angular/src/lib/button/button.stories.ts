import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'UI/Button',
  component: Button,
  // This tells Storybook to auto-generate controls/docs
  argTypes: {
    content: { control: 'text' }, // @Input()
    class: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'], // @Input()
    },
    isClicked: { action: 'clicked' }, // @Output()
  },
};
export default meta;

type Story = StoryObj<Button>;

// Default playground story (users can change args from controls panel)
export const Playground: Story = {
  args: {
    content: 'Submit',
    class: 'primary',
  },
};
