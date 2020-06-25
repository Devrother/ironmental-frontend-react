import React, { useMemo } from 'react'
import { List } from 'antd'
import { PropsTypes } from 'src/types'
import ArticleListItem from './ArticleListItem'

type Props = {
  articles: PropsTypes.Article[]
}
const ArticleList: React.FC<Props> = ({ articles }) => {
  const articleList = useMemo(
    () =>
      articles.map((item: PropsTypes.Article, index: number) => (
        <ArticleListItem key={index} article={item} />
      )),
    [articles]
  )

  return (
    <>
      <List itemLayout="vertical" size="large" style={{ marginBottom: '30px' }}>
        {articleList}
      </List>
    </>
  )
}

export default ArticleList
