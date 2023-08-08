import s from './App.module.scss'
import { ContactForm } from '~/modules/contact'
import { Container } from '~/modules/theme'

const App = () => {
  return (
    <div className={s.app}>
      <Container center maxWidth='sm'>
        <ContactForm />
      </Container>
    </div>
  )
}

export default App
