import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './index';
import type { TypographyProps } from './Typography.types';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['small', 'paragraph', 'subtitle', 'title'],
      },
    },
    color: {
      control: 'color',
    },
    fontSize: {
      control: 'text',
      type: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const Playground: Story = {
  args: {
    children: 'Hello, World!',
    variant: 'small',
    as: 'span',
  },
};
