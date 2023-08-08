import { styled } from '@phntms/css-components'
import s from './Container.module.scss'

const Container = styled('div', {
  css: s.layout,
  variants: {
    center: {
      true: s.center,
    },
    maxWidth: {
      xs: s['max-width--xs'],
      sm: s['max-width--sm'],
      md: s['max-width--md'],
      lg: s['max-width--lg'],
      xl: s['max-width--xl'],
    },
  },
  defaultVariants: {
    center: false,
    maxWidth: 'md',
  },
})

export default Container
