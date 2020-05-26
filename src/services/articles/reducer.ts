import { ActionTypes, StateTypes, PropsTypes } from 'src/types'

export const START_ARTICLES_LOADING = 'articles/START_ARTICLES_LOADING' as const
export const END_ARTICLES_LOADING = 'articles/END_ARTICLES_LOADING' as const
export const GET_ARTICLES = 'articles/GET_ARTICLES' as const
export const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS' as const

export const startArticlesLoading = () => ({ type: START_ARTICLES_LOADING })
export const endArticlesLoading = () => ({ type: END_ARTICLES_LOADING })
export const getArticleList = (page: number | string) => ({
  type: GET_ARTICLES,
  payload: { page },
})
export const setArticles = (
  articles: PropsTypes.Article,
  nextLink: string
) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: { articles, nextLink },
})

const initialState: StateTypes.ArticlesState = {
  isLoading: false,
  articles: [],
  nextLink: '',
}

export const articlesReducer = (
  state: StateTypes.ArticlesState = initialState,
  action: ActionTypes.Articles
) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS: {
      const { articles, nextLink } = action.payload
      // console.log('action:', action.payload)
      return {
        ...state,
        articles,
        nextLink,
      }
    }

    case START_ARTICLES_LOADING: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case END_ARTICLES_LOADING: {
      return {
        ...state,
        isLoading: false,
      }
    }

    default: {
      return state
    }
  }
}
