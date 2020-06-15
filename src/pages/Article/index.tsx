import React, { useEffect, useState } from 'react'
import { Skeleton, Divider } from 'antd'
import { MessageOutlined, LikeOutlined, LikeTwoTone } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { dateUtils } from 'src/utils'
import { getArticleById } from 'src/services/article/actions'
import { selectArticle } from 'src/services/article/selectors'
import TagList from 'src/components/TagList'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const ArticlePage: React.FC = () => {
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
    dispatch(getArticleById(articleId))
  }, [dispatch, articleId])

  return (
    <Section>
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

          <Divider orientation="left">Comments</Divider>
          <CommentForm />
          <CommentList />
        </>
      )}
    </Section>
  )
}

const Section = styled.section`
  margin: 0 auto;
  padding: 76px 16px;
  max-width: 690px;
`
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

export default ArticlePage
