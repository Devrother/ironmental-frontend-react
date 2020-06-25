import React from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
import ArticleContent from './ArticleContent'
import CommentList from 'src/components/Comments/CommentList'
import CommentForm from 'src/components/Comments//CommentForm'

const ArticlePage: React.FC = () => {
  return (
    <Section>
      <ArticleContent />
      <Divider orientation="left">Comments</Divider>
      <CommentForm />
      <CommentList />
    </Section>
  )
}

const Section = styled.section`
  margin: 0 auto;
  padding: 76px 16px;
  max-width: 690px;
`

export default ArticlePage
