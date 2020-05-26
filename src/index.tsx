import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { configureStore } from 'src/config/store'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
