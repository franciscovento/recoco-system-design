import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './index';
import type { Props } from './Badge.types';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<Props>;

export const Playground: Story = {
  args: {
    children: 'SI',
  },
};
