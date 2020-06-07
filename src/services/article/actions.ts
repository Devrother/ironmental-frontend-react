import { PropsTypes } from 'src/types'

export const START_ARTICLE_LOADING = 'article/START_ARTICLE_LOADING' as const
export const END_ARTICLE_LOADING = 'article/END_ARTICLE_LOADING' as const
export const GET_ARTICLE = 'article/GET_ARTICLE' as const
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS' as const
export const GET_ARTICLE_FAILURE = 'article/GET_ARTICLE_FAILURE' as const

export const startArticleLoading = () => ({ type: START_ARTICLE_LOADING })
export const endArticleLoading = () => ({ type: END_ARTICLE_LOADING })
export const getArticleById = (id: string) => ({
  type: GET_ARTICLE,
  payload: { id },
})
export const getArticleByIdSuccess = (article: PropsTypes.Article) => ({
  type: GET_ARTICLE_SUCCESS,
  payload: { article },
})
export const getArticleByIdFailure = (error: Error) => ({
  type: GET_ARTICLE_FAILURE,
  payload: { error },
})
