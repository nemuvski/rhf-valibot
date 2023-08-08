import { Paragraph } from './Paragraph.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Paragraph

const meta: Meta<_ComponentType> = {
  title: 'Theme/Paragraph',
  component: Paragraph,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    children: 'Paragraph',
    fontSize: 'md',
    fontColor: undefined,
  },
}
