import { styled } from '@phntms/css-components'
import s from './Input.module.scss'

const Input = styled('input', {
  css: s.input,
  variants: {
    fullWidth: {
      true: s.fullwidth,
    },
    inline: {
      true: s.inline,
    },
  },
  defaultVariants: {
    fullWidth: false,
    inline: false,
  },
})

export { Input }
