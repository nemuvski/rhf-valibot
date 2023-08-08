import { Group } from './Group.tsx'
import type { Meta, StoryObj } from '@storybook/react'

type _ComponentType = typeof Group

const meta: Meta<_ComponentType> = {
  title: 'Theme/Group',
  component: Group,
}

export default meta

type Story = StoryObj<_ComponentType>

export const Default: Story = {
  args: {
    nowrap: false,
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
