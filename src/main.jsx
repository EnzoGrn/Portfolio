import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log(
  '%c Hey, curious dev 👋 ',
  'background:#7ed957;color:#fff;font-size:14px;font-weight:700;padding:6px 12px;border-radius:3px;'
)
console.log(
  '%c Some secrets are hidden in this portfolio.\n Visit /easter-eggs for hints.',
  'color:#7ed957;font-family:monospace;font-size:12px;line-height:1.8;'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
