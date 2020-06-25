import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInfiniteScroll } from 'src/hooks'
import { apiUtils } from 'src/utils'
import { actions } from 'src/services/articles/actions'
import { articlesSelector } from 'src/services/articles/selectors'
import ArticleList from 'src/components/Articles/ArticleList'
import ArticlesLoading from 'src/components/Articles/ArticlesLoading'

const Articles: React.FC = () => {
  const dispatch = useDispatch()
  const target = useRef<HTMLDivElement>(null)
  const { loading, articles, nextLink } = useSelector(articlesSelector)

  useEffect(() => {
    if (!articles.length) {
      dispatch(actions.getArticles(0, 15))
      return
    }
  }, [dispatch, articles.length])

  useInfiniteScroll({
    target,
    onIntersect: entries => {
      if (!loading && !!nextLink && entries[0].isIntersecting) {
        const { offset, limit } = apiUtils.querystringToObj(nextLink)

        dispatch(actions.getArticles(offset, limit))
      }
    },
  })

  return (
    <section>
      <ArticleList articles={articles} />
      <ArticlesLoading ref={target} isEnd={!loading} />
    </section>
  )
}

export default Articles
