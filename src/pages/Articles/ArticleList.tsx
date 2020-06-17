import React, { useEffect, useMemo, useRef } from 'react'
import { List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useInfiniteScroll } from 'src/hooks'
import { PropsTypes } from 'src/types'
import { apiUtils } from 'src/utils'
import { actions } from 'src/services/articles/actions'
import { articlesSelector } from 'src/services/articles/selectors'
import ArticleListItem from './ArticleListItem'
import ArticlesLoading from 'src/pages/Articles/ArticlesLoading'

const ArticleList: React.FC = () => {
  const dispatch = useDispatch()
  const target = useRef<HTMLDivElement>(null)
  const { loading, articles, nextLink } = useSelector(articlesSelector)

  const articleList = useMemo(
    () =>
      articles.map((item: PropsTypes.Article, index: number) => (
        <ArticleListItem key={index} article={item} />
      )),
    [articles]
  )

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
    <>
      <List itemLayout="vertical" size="large" style={{ marginBottom: '30px' }}>
        {articleList}
      </List>
      <ArticlesLoading ref={target} isEnd={!loading} />
    </>
  )
}

export default ArticleList
