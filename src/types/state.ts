import { rootReducer } from 'src/services/rootReducer'
import { PropsTypes } from 'src/types'

export type RootState = ReturnType<typeof rootReducer>

export type ArticlesState = {
  error: Error | null
  loading: boolean
  articles: PropsTypes.Article[]
  nextLink: string
}

export type ArticleState = {
  error: Error | null
  loading: boolean
  article: PropsTypes.Article
}

export type LoadingState = {
  isLoading: boolean
}

export type SubscribeState = {
  error: Error | null
  loading: boolean
  result: {
    message: string
    status: '미구독' | '구독중' | ''
  }
}

export type AuthState = {
  error: Error | null
  loading: boolean
  result: {
    message: string
  }
}

export type UserState = {
  error: Error | null
  loading: boolean
  user: PropsTypes.User | null
  prevUrl: string
}
