import { combineReducers } from 'redux'
import { articlesReducer } from 'src/services/articles/reducer'
import { articleReducer } from 'src/services/article/reducer'
import { subscribeReducer } from 'src/services/subscribe/reducer'
import { authReducer } from 'src/services/auth/reducer'

export const rootReducer = combineReducers({
  subscribe: subscribeReducer,
  articles: articlesReducer,
  article: articleReducer,
  auth: authReducer,
})
