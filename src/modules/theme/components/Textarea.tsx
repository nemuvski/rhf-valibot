import { styled } from '@phntms/css-components'
import s from './Textarea.module.scss'

const Textarea = styled('textarea', {
  css: s.textarea,
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

export { Textarea }
