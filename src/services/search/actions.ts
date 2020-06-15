export const START_SEARCH_LOADING = 'search/START_SEARCH_LOADING'
export const END_SEARCH_LOADING = 'search/END_SEARCH_LOADING'
export const SEARCH_ARTICLES = 'search/SEARCH_ARTICLES' as const
export const SEARCH_ARTICLES_SUCCESS = 'search/SEARCH_ARTICLES_SUCCESS' as const
export const SEARCH_ARTICLES_FAILURE = 'search/SEARCH_ARTICLES_FAILURE' as const

export const startSearchLoading = () => ({ type: START_SEARCH_LOADING })
export const endSearchLoading = () => ({ type: END_SEARCH_LOADING })
export const searchArticle = (keyword: string) => ({
  type: SEARCH_ARTICLES,
  payload: { keyword },
})
export const searchArticleSuccess = () => ({ type: SEARCH_ARTICLES_SUCCESS })
export const searchArticleFailure = () => ({ type: SEARCH_ARTICLES_FAILURE })
