import { styled } from '@phntms/css-components'
import s from './Textarea.module.scss'

const Textarea = styled('textarea', {
  css: s.textarea,
  variants: {
    fullWidth: {
      true: s.fullwidth,
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
})

export default Textarea
