import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { useSelector } from 'react-redux'
import { profileSelector } from 'src/services/profile/selectors'
import CommentListItem from 'src/components/Comments/CommentListItem'

const CommentList: React.FC = () => {
  const {
    profile: { comments },
  } = useSelector(profileSelector)
  const commentItems = comments.map((comment, index) => (
    <>
      <CommentListItem key={index} type="profile" />
      <Divider />
    </>
  ))

  return (
    <CommentsContainer>
      <h2>Comments</h2>
      <ul>{commentItems}</ul>
    </CommentsContainer>
  )
}

const CommentsContainer = styled.section`
  margin: 0 auto;
  max-width: 700px;

  h2 {
    font-size: 1.5rem;
  }
`

export default CommentList
