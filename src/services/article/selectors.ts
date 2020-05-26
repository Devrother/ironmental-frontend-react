import { StateTypes } from 'src/types'

export const selectArticle = (
  state: StateTypes.RootState
): StateTypes.ArticleState => state.article
