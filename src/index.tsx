import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'src/App'

import { AppHeader } from './components/AppHeader'
import { AppLoadingSpinner } from './components/AppLoadingSpinner'
import { store } from './store'

import './theme'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppHeader />
        <Suspense fallback={<AppLoadingSpinner fullHeight />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
