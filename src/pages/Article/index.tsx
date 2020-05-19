import React from 'react'
import styled from 'styled-components'
import { DateUtils } from '../../utils/index'
import TagList from '../../components/TagList'
import { Article } from '../../types'

// TODO: presentional 컴포넌트가 아닌 store에서 바로 가져오는 컴포넌트로 제작하기
const ArticlePage: React.FC = () => {
  // Mock
  const article = {
    id: '5cf1423357cd510271cd9289',
    title: `Show HN: Zoom-CLI, an automated tool to change your Zoom virtual background`,
    tags: ['web'],
    text:
      'CORS(Cross Origin Resource Sharing)현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우 ex) SPA(Single Page Application) 보안 상의 이유로 브라우저는 CORS를 제한same origin policy',
    articleLink: 'http://ant.design',
    created: '2019-05-31T15:05:28.527Z',
    updated: '2019-05-31T15:05:28.527Z',
  }

  const { id, title, tags, text, articleLink, created, updated } = article

  return (
    <Section>
      <Head>
        <H1>
          <a href={articleLink}>{title}</a>
        </H1>
        <Date>{DateUtils.convertDate(created)}</Date>
        <TagList tags={tags} />
      </Head>
      <main>이건 개 좋은 뉴스야</main>
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
