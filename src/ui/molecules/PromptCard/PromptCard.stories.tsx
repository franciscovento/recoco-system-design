import type { Meta, StoryObj } from '@storybook/react'

import { PromptCard } from './index'
import type { PromptCardProps } from './PromptCard.types'

const meta: Meta<typeof PromptCard> = {
  title: 'Molecules/PromptCard',
  component: PromptCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  }
}

export default meta
type Story = StoryObj<PromptCardProps>

export const Playground: Story = {}