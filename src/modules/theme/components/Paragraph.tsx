import { styled } from '@phntms/css-components'
import s from './Paragraph.module.scss'

const Paragraph = styled('p', {
  css: s.paragraph,
  variants: {
    fontSize: {
      xs: s['font-size--xs'],
      sm: s['font-size--sm'],
      md: s['font-size--md'],
      lg: s['font-size--lg'],
      xl: s['font-size--xl'],
    },
  },
  defaultVariants: {
    fontSize: 'md',
  },
})

export { Paragraph }
