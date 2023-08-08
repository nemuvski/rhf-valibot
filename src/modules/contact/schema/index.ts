import { email, minLength, object, string } from 'valibot'
import type { Output } from 'valibot'

const ContactSchema = object({
  name: string([minLength(1, '必須項目です')]),
  email: string([email('メールアドレスの形式で入力してください')]),
  message: string([minLength(1, '必須項目です')]),
})

type ContactSchemaType = Output<typeof ContactSchema>

export { ContactSchema }
export type { ContactSchemaType }
