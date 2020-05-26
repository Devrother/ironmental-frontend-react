import {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  startArticlesLoading,
  endArticlesLoading,
} from 'src/services/articles/reducer'
import {
  getArticleById,
  getArticleByIdSuccess,
  getArticleByIdFailure,
  startArticleLoading,
  endArticleLoading,
} from 'src/services/article/reducer'
import {
  sendEmailSubscribe,
  sendEmailSubscribeSuccess,
  startSubscribeLoading,
  endSubscribeLoading,
  sendEmailSubscribeFailure,
} from 'src/services/subscribe/reducer'

export type Articles =
  | ReturnType<typeof getArticles>
  | ReturnType<typeof getArticlesSuccess>
  | ReturnType<typeof getArticlesFailure>
  | ReturnType<typeof startArticlesLoading>
  | ReturnType<typeof endArticlesLoading>

export type Article =
  | ReturnType<typeof getArticleById>
  | ReturnType<typeof getArticleByIdSuccess>
  | ReturnType<typeof getArticleByIdFailure>
  | ReturnType<typeof startArticleLoading>
  | ReturnType<typeof endArticleLoading>

export type Subscribe =
  | ReturnType<typeof sendEmailSubscribe>
  | ReturnType<typeof sendEmailSubscribeSuccess>
  | ReturnType<typeof sendEmailSubscribeFailure>
  | ReturnType<typeof startSubscribeLoading>
  | ReturnType<typeof endSubscribeLoading>
