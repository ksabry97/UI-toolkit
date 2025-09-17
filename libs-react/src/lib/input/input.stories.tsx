import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input, { InputProps } from './Input';

const meta: Meta<InputProps> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    validator: {
      control: 'object',
    },
    onError: { action: 'errorTriggered' },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

// 👇 A helper wrapper since Input is controlled
function InputWrapper(props: InputProps) {
  const [value, setValue] = useState<string | number>(props.value ?? '');
  return <Input {...props} value={value} setValue={setValue} />;
}

// --- Stories ---

export const Default: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    type: 'text',
    value: '',
    validator: {},
  },
};

export const Required: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    type: 'text',
    value: '',
    validator: { required: true },
  },
};

export const WithMinLength: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    type: 'text',
    value: '',
    validator: { minlength: 5 },
  },
};

export const WithMaxLength: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    type: 'text',
    value: '',
    validator: { maxlength: 10 },
  },
};

export const Password: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    type: 'password',
    value: '',
    validator: { required: true, minlength: 6 },
  },
};
