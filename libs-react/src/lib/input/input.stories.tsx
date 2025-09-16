import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input, { inputProps } from './input';

const meta: Meta<inputProps> = {
  title: 'ReactUI/Input',
  component: Input,
  argTypes: {
    setValue: { action: 'value changed' }, // logs changes in Actions panel
  },
};
export default meta;

type Story = StoryObj<inputProps>;

// Interactive story
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...args}
        value={value}
        setValue={(val) => {
          setValue(val); // updates the UI
          args.setValue?.(val); // logs to Actions panel
        }}
      />
    );
  },
  args: {
    type: 'text',
    value: '',
  },
};
