import { StateTypes } from 'src/types'

export const articlesSelector = (
  state: StateTypes.RootState
): StateTypes.ArticlesState => state.articles
