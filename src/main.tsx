import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

const base = import.meta.env.BASE_URL

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={base}>
    <App />
  </BrowserRouter>,
)
