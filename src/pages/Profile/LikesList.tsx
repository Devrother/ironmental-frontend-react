import React from 'react'
import ArticleListItem from 'src/components/Articles/ArticleListItem'
import styled from 'styled-components'

// TODO: API 데이터에서 Likes 아이템이 article인지 comment인지 구분 할 수 있는 타입이 필요함.
const LikesList: React.FC = () => {
  return (
    <LikesListContainer>
      <h2>Likes</h2>
      <ul>
        <li />
      </ul>
    </LikesListContainer>
  )
}

const LikesListContainer = styled.div`
  h2 {
    font-size: 1.5rem;
  }
`

export default LikesList
