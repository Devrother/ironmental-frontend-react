import { PropsTypes } from 'src/types'

export const START_ARTICLE_LOADING = 'article/START_ARTICLE_LOADING' as const
export const END_ARTICLE_LOADING = 'article/END_ARTICLE_LOADING' as const
export const GET_ARTICLE = 'article/GET_ARTICLE' as const
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS' as const
export const GET_ARTICLE_FAILURE = 'article/GET_ARTICLE_FAILURE' as const

export const actions = {
  startArticleLoading: () => ({ type: START_ARTICLE_LOADING }),
  endArticleLoading: () => ({ type: END_ARTICLE_LOADING }),
  getArticleById: (id: string) => ({
    type: GET_ARTICLE,
    payload: { id },
  }),
  getArticleByIdSuccess: (article: PropsTypes.Article) => ({
    type: GET_ARTICLE_SUCCESS,
    payload: { article },
  }),
  getArticleByIdFailure: (error: Error) => ({
    type: GET_ARTICLE_FAILURE,
    payload: { error },
  }),
}
