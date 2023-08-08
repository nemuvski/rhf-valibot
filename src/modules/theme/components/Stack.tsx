import { styled } from '@phntms/css-components'
import s from './Stack.module.scss'

const Stack = styled('div', {
  css: s.stack,
  variants: {
    gap: {
      xs: s['gap--xs'],
      sm: s['gap--sm'],
      md: s['gap--md'],
      lg: s['gap--lg'],
      xl: s['gap--xl'],
    },
  },
  defaultVariants: {
    gap: 'md',
  },
})

export { Stack }
