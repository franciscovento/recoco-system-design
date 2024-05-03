import { PromptCardProps } from './PromptCard.types';
import { PromptCard } from './index';
import { Meta, StoryObj } from '@storybook/react';

declare const meta: Meta<typeof PromptCard>;
export default meta;
type Story = StoryObj<PromptCardProps>;
export declare const Playground: Story;
