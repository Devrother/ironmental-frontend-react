import { PropsTypes } from 'src/types'

export const START_ARTICLES_LOADING = 'articles/START_ARTICLES_LOADING' as const
export const END_ARTICLES_LOADING = 'articles/END_ARTICLES_LOADING' as const
export const GET_ARTICLES = 'articles/GET_ARTICLES' as const
export const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS' as const
export const GET_ARTICLES_FAILURE = 'articles/GET_ARTICLES_FAILURE' as const
export const GET_MORE_ARTICLES = 'articles/GET_MORE_ARTICLES' as const
export const GET_MORE_ARTICLES_SUCCESS = 'articles/GET_MORE_ARTICLES_SUCCESS' as const
export const GET_MORE_ARTICLES_FAILURE = 'articles/GET_MORE_ARTICLES_FAILURE' as const

export const actions = {
  startArticlesLoading: () => ({ type: START_ARTICLES_LOADING }),
  endArticlesLoading: () => ({ type: END_ARTICLES_LOADING }),
  getArticles: (offset: number | string, limit: number | string) => ({
    type: GET_ARTICLES,
    payload: { offset, limit },
  }),
  getArticlesSuccess: (articles: PropsTypes.Article[], nextLink: string) => ({
    type: GET_ARTICLES_SUCCESS,
    payload: { articles, nextLink },
  }),
  getArticlesFailure: (error: Error) => ({
    type: GET_ARTICLES_FAILURE,
    payload: { error },
  }),
  getMoreArticles: (offset: number | string, limit: number | string) => ({
    type: GET_MORE_ARTICLES,
    payload: { offset, limit },
  }),
  getMoreArticlesSuccess: (
    articles: PropsTypes.Article[],
    nextLink: string
  ) => ({
    type: GET_MORE_ARTICLES_SUCCESS,
    payload: { articles, nextLink },
  }),
  getMoreArticlesFailure: (error: Error) => ({
    type: GET_MORE_ARTICLES_FAILURE,
    payload: { error },
  }),
}
