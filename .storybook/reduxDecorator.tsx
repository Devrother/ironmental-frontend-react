import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '../src/config/store'

const store = configureStore()

export default story => <Provider store={store}>{story()}</Provider>
