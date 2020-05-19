import * as React from 'react'
import ArticleList from './ArticleList'
import SearchInput from './SearchInput'
import styled from 'styled-components'
const Articles: React.FC = () => {
  return (
    <Section>
      <SearchContainer>
        <SearchInput />
      </SearchContainer>
      <ArticleList />
    </Section>
  )
}

const Section = styled.section``

const SearchContainer = styled.div`
  margin: 30px 0;
  text-align: right;
`

export default Articles
