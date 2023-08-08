import { styled } from '@phntms/css-components'
import s from './Group.module.scss'

const Group = styled('div', {
  css: s.group,
  variants: {
    nowrap: {
      true: s.nowrap,
    },
    gap: {
      xs: s['gap--xs'],
      sm: s['gap--sm'],
      md: s['gap--md'],
      lg: s['gap--lg'],
      xl: s['gap--xl'],
    },
  },
  defaultVariants: {
    nowrap: false,
    gap: 'md',
  },
})

export { Group }
