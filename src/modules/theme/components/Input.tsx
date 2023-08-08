import { styled } from '@phntms/css-components'
import s from './Input.module.scss'

const Input = styled('input', {
  css: s.input,
  variants: {
    fullWidth: {
      true: s.fullwidth,
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
})

export { Input }
