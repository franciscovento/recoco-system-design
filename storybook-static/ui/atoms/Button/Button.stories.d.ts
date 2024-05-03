import { ButtonProps } from './Button.types';
import { Button } from './index';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<ButtonProps>;
export declare const Playground: Story;
