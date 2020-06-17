import { actions as articlesActions } from 'src/services/articles/actions'
import { actions as articleActions } from 'src/services/article/actions'
import { actions as subscribeActions } from 'src/services/subscribe/actions'
import { actions as authActions } from 'src/services/auth/actions'
import { actions as userActions } from 'src/services/user/actions'

export type Articles = ReturnType<
  typeof articlesActions[keyof typeof articlesActions]
>

export type Article = ReturnType<
  typeof articleActions[keyof typeof articleActions]
>

export type Subscribe = ReturnType<
  typeof subscribeActions[keyof typeof subscribeActions]
>

export type Auth = ReturnType<typeof authActions[keyof typeof authActions]>

export type User = ReturnType<typeof userActions[keyof typeof userActions]>
