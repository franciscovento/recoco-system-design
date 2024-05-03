import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './index';
import type { InputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<InputProps>;

export const Playground: Story = {
  args: {
    placeholder: 'Placeholder',
    value: '',
  },
};
