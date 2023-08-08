import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import { ContactSchema } from '../schema'
import type { ContactSchemaType } from '../schema'
import { Group, Input, Label, Paragraph, Stack, Textarea } from '~/modules/theme'

const ContactForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, isDirty, errors, isSubmitting },
  } = useForm<ContactSchemaType>({
    mode: 'onBlur',
    resolver: valibotResolver(ContactSchema),
    shouldUseNativeValidation: false,
  })

  return (
    <form
      onReset={() => {
        reset()
      }}
      onSubmit={handleSubmit((fieldValues) => {
        console.log(fieldValues)
      })}
    >
      <Stack>
        <div>
          <Label>
            名前
            <Input type='text' fullWidth {...register('name')} />
          </Label>
          {errors.name && <Paragraph fontSize='sm'>{errors.name.message}</Paragraph>}
        </div>

        <div>
          <Label>
            メールアドレス
            <Input type='email' fullWidth {...register('email')} />
          </Label>
          {errors.email && <Paragraph fontSize='sm'>{errors.email.message}</Paragraph>}
        </div>

        <div>
          <Label>
            メッセージ
            <Textarea fullWidth {...register('message')} />
          </Label>
          {errors.message && <Paragraph fontSize='sm'>{errors.message.message}</Paragraph>}
        </div>

        <Group gap='sm'>
          <button type='reset' disabled={!isDirty || isSubmitting}>
            リセット
          </button>
          <button type='submit' disabled={!isValid || isSubmitting}>
            送信
          </button>
        </Group>
      </Stack>
    </form>
  )
}

export { ContactForm }
