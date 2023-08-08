import s from './App.module.scss'
import Container from '~/modules/theme/components/Container.tsx'
import Input from '~/modules/theme/components/Input'
import Stack from '~/modules/theme/components/Stack.tsx'
import Textarea from '~/modules/theme/components/Textarea.tsx'

const App = () => {
  return (
    <div className={s.app}>
      <Container center>
        <Stack>
          <Input fullWidth />
          <Textarea fullWidth />
        </Stack>
      </Container>
    </div>
  )
}

export default App
