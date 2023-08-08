import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm } from 'react-hook-form'
import { ContactSchema } from '../schema'
import type { ContactSchemaType } from '../schema'
import { Button, Group, Input, Label, Paragraph, Stack, Textarea } from '~/modules/theme'

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
          {errors.name && (
            <Paragraph fontColor='invalid' fontSize='xs'>
              {errors.name.message}
            </Paragraph>
          )}
        </div>

        <div>
          <Label>
            メールアドレス
            <Input type='email' fullWidth {...register('email')} />
          </Label>
          {errors.email && (
            <Paragraph fontColor='invalid' fontSize='xs'>
              {errors.email.message}
            </Paragraph>
          )}
        </div>

        <div>
          <Label>
            メッセージ
            <Textarea fullWidth {...register('message')} />
          </Label>
          {errors.message && (
            <Paragraph fontColor='invalid' fontSize='xs'>
              {errors.message.message}
            </Paragraph>
          )}
        </div>

        <Group gap='sm'>
          <Button colorSchema='secondary' type='reset' disabled={!isDirty || isSubmitting}>
            リセット
          </Button>
          <Button colorSchema='primary' type='submit' disabled={!isValid || isSubmitting}>
            送信
          </Button>
        </Group>
      </Stack>
    </form>
  )
}

export { ContactForm }
