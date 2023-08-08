import { Container } from './Container.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Container

const meta: Meta<_ComponentType> = {
  title: 'Theme/Container',
  component: Container,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    children: 'Container',
    center: false,
    maxWidth: 'md',
    style: { backgroundColor: 'gray' },
  },
}
