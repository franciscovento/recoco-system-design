import type { Meta, StoryObj } from '@storybook/react'

import { CourseCard } from './index'
import type { CourseCardProps } from './CourseCard.types'

const meta: Meta<typeof CourseCard> = {
  title: 'Molecules/CourseCard',
  component: CourseCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {

  }
}

export default meta
type Story = StoryObj<CourseCardProps>

export const Playground: Story = {}