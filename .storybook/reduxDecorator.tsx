import React from 'react'
import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'
import { article, articles } from './mockStoreData'

// const store = configureStore()
const store = {
  getState: () => ({
    article,
    articles,
  }),
  subscribe: () => 0,
  dispatch: action('dispatch'),
}
export default story => <Provider store={store}>{story()}</Provider>
