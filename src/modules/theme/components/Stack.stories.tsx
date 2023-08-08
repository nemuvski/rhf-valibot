import { Stack } from './Stack.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Stack

const meta: Meta<_ComponentType> = {
  title: 'Theme/Stack',
  component: Stack,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    gap: 'md',
    children: (
      <>
        {[...Array(20)].map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </>
    ),
  },
}
