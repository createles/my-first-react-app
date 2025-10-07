import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { DogPic } from './Dog-pic.jsx'
import { TestTitle } from './new-component-syntax.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <DogPic />
    <TestTitle />
  </StrictMode>,
)
