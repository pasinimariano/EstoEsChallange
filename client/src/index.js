import React from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { App } from './app/'
import { store } from './app/redux/store'

const Root = ReactDom.createRoot(document.getElementById('root'))
const persistor = persistStore(store)

Root.render(
  <Provider store={store}>
    <Router>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
)
