import { Textarea } from './Textarea.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Textarea

const meta: Meta<_ComponentType> = {
  title: 'Theme/Textarea',
  component: Textarea,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    inline: false,
    fullWidth: false,
  },
}
