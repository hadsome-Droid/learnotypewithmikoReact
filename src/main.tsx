import { StrictMode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
