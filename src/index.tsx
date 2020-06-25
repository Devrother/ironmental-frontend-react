import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { configureStore } from 'src/config/store'
import { localStorageUtils } from 'src/utils'
import { actions } from 'src/services/user/actions'

const store = configureStore()

const loadUser = () => {
  const user = localStorageUtils.getUser()
  if (!user) {
    return
  }

  if (user) {
    store.dispatch(actions.checkLoggedIn())
  }
}

loadUser()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
serviceWorker.unregister()
