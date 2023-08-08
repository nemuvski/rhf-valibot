import { Input } from './Input.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Input

const meta: Meta<_ComponentType> = {
  title: 'Theme/Input',
  component: Input,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    fullWidth: false,
    inline: false,
  },
}
