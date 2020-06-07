import React, { useEffect, useMemo, useRef } from 'react'
import { List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useInfiniteScroll } from 'src/hooks'
import { PropsTypes } from 'src/types'
import { apiUtils } from 'src/utils'
import { getArticles } from 'src/services/articles/actions'
import { articlesSelector } from 'src/services/articles/selectors'
import ArticleListItem from './ArticleListItem'
import ArticlesLoading from 'src/pages/Articles/ArticlesLoading'

// TODO: useParams를 사용하여 ArchiveIntroSection일 경우 인피니티 스크롤이 먹히지 않도록 하기
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
      dispatch(getArticles(0, 15))
      return
    }

    // 이미 state가 존재하는 경우 다음 next parameter를 활용해서 dispatch하기
    // console.log('next dispatch')
  }, [dispatch, articles.length])

  useInfiniteScroll({
    target,
    onIntersect: entries => {
      if (!loading && !!nextLink && entries[0].isIntersecting) {
        const { offset, limit } = apiUtils.querystringToObj(nextLink)

        dispatch(getArticles(offset, limit))
      }
    },
  })

  return (
    <>
      <List itemLayout="vertical" size="large">
        {articleList}
      </List>
      <ArticlesLoading ref={target} isEnd={!loading} />
      {/* <ArticleLoading loading={loading} /> */}
    </>
  )
}

export default ArticleList
