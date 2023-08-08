import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/components/App'
import '~/modules/theme/global-style'

const container = document.getElementById('app')

if (!container) throw new Error('Oops, root element is missing.')

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
