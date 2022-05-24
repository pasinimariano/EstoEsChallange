import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app/'

const Root = ReactDom.createRoot(document.getElementById('root'))

Root.render(
  <Router>
    <App />
  </Router>
)
