import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import TagList from 'src/components/TagList'
import { dateUtils } from 'src/utils/index'
import { getArticleById } from 'src/services/article/reducer'
import { articleSelector } from 'src/services/article/selectors'
import { useParams } from 'react-router-dom'
const ArticlePage: React.FC = () => {
  // Mock
  /* const article = {
    id: '5cf1423357cd510271cd9289',
    title: `Show HN: Zoom-CLI, an automated tool to change your Zoom virtual background`,
    tags: ['web'],
    text:
      'CORS(Cross Origin Resource Sharing)현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우 ex) SPA(Single Page Application) 보안 상의 이유로 브라우저는 CORS를 제한same origin policy',
    articleLink: 'http://ant.design',
    created: '2019-05-31T15:05:28.527Z',
    updated: '2019-05-31T15:05:28.527Z',
  } */

  const dispatch = useDispatch()
  const { articleId } = useParams()

  const { article } = useSelector(articleSelector)
  const { title, tags, text, articleLink, created } = article

  useEffect(() => {
    dispatch(getArticleById(articleId))
  }, [dispatch, articleId])

  return (
    <Section>
      <Head>
        <H1>
          <a href={articleLink}>{title}</a>
        </H1>
        <Date>{dateUtils.convertDate(created)}</Date>
        <TagList tags={tags} />
      </Head>
      <main>{text}</main>
    </Section>
  )
}

const Section = styled.section`
  margin: 0 auto;
  padding: 16px;
  max-width: 690px;
`
const Head = styled.div`
  margin: 60px 0;
`

const H1 = styled.h1`
  margin-bottom: 32px;

  & a {
    color: black;
  }

  & a:hover {
    text-decoration: underline;
  }
`

const Date = styled.div`
  margin: 10px 0;
  font-size: 1rem;
`

export default ArticlePage
