import { Button } from './Button.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Button

const meta: Meta<_ComponentType> = {
  title: 'Theme/Button',
  component: Button,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    disabled: false,
    children: 'Button',
    colorSchema: 'primary',
  },
}
