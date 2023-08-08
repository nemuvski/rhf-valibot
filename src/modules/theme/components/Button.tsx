import { styled } from '@phntms/css-components'
import s from './Button.module.scss'

const Button = styled('button', {
  css: s.button,
  variants: {
    colorSchema: {
      primary: s['color-schema--primary'],
      secondary: s['color-schema--secondary'],
    },
  },
  defaultVariants: {
    colorSchema: 'primary',
  },
})

export { Button }
