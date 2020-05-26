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
  article: {
    id: string
    title: string
    tags: string[]
    text: string
    articleLink: string
    created: string
    updated: string
  }
}

export type LoadingState = {
  isLoading: boolean
}

export type SubscribeState = {
  error: Error | null
  loading: boolean
  result: {
    message: string
    status: '미구독' | '미인증' | '구독중' | ''
  }
}
