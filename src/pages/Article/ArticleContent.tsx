import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Skeleton, Divider } from 'antd'
import { MessageOutlined, LikeOutlined, LikeTwoTone } from '@ant-design/icons'
import { dateUtils } from 'src/utils'
import { actions } from 'src/services/article/actions'
import { selectArticle } from 'src/services/article/selectors'
import TagList from 'src/components/TagList'

const ArticleContent: React.FC = () => {
  const dispatch = useDispatch()
  const { articleId } = useParams()

  // FIXME: API 완성되면 redux 상태로 빼기
  const [likes, setLikes] = useState(false)
  const { loading, article } = useSelector(selectArticle)
  const { title, tags, text, articleLink, created } = article

  const onClickLikes = () => {
    setLikes(!likes)
  }

  useEffect(() => {
    dispatch(actions.getArticleById(articleId))
  }, [dispatch, articleId])

  return (
    <>
      {loading ? (
        <Skeleton active={true} />
      ) : (
        <>
          <Head>
            <H1>
              <a href={articleLink}>{title}</a>
            </H1>
            <Date>{dateUtils.convertDate(created)}</Date>
            <TagList tags={tags} />
            <IconItem onClick={onClickLikes}>
              {likes ? <LikeTwoTone /> : <LikeOutlined />}
              456
            </IconItem>
            <IconItem>
              <MessageOutlined />
              123
            </IconItem>
          </Head>
          <Main>{text}</Main>
          <Divider orientation="left">Link</Divider>
          <LinkContainer>
            <a href={articleLink}> {articleLink}</a>
          </LinkContainer>
        </>
      )}
    </>
  )
}

const Head = styled.div``

const H1 = styled.h1`
  margin-bottom: 32px;

  & a {
    color: black;
  }

  & a:hover {
    text-decoration: underline;
  }
`

const IconItem = styled.span`
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`

const Date = styled.div`
  margin: 10px 0;
  font-size: 1rem;
`

const Main = styled.main`
  padding-top: 30px;
  padding-bottom: 10px;
`

const LinkContainer = styled.div`
  font-size: 1rem;
  padding: 0 20px;
  margin-bottom: 70px;
`

export default ArticleContent
