import { ActionTypes, StateTypes } from 'src/types'
import {
  START_ARTICLES_LOADING,
  END_ARTICLES_LOADING,
  GET_ARTICLES_FAILURE,
  GET_MORE_ARTICLES_FAILURE,
  GET_MORE_ARTICLES_SUCCESS,
  GET_ARTICLES_SUCCESS,
} from './actions'

const initialState: StateTypes.ArticlesState = {
  error: null,
  loading: false,
  articles: [],
  nextLink: '',
}

export const articlesReducer = (
  state: StateTypes.ArticlesState = initialState,
  action: ActionTypes.Articles
) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
    case GET_MORE_ARTICLES_SUCCESS: {
      const { articles, nextLink } = action.payload

      return {
        ...state,
        articles: [...state.articles, ...articles],
        nextLink,
      }
    }

    case GET_ARTICLES_FAILURE:
    case GET_MORE_ARTICLES_FAILURE: {
      const { error } = action.payload

      return {
        ...state,
        error,
      }
    }

    case START_ARTICLES_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    case END_ARTICLES_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }

    default: {
      return state
    }
  }
}
