import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

import 'animate.css';
import './styles/reset.css'
import './styles/main.css'
import './styles/works.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/home.css'
import './styles/goback.css'
import './styles/projectview.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
