import { Label } from './Label.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Label

const meta: Meta<_ComponentType> = {
  title: 'Theme/Label',
  component: Label,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}
