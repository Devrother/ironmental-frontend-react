import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { List } from 'antd'
import { routePath } from 'src/constants'
import { MessageOutlined, LikeOutlined, LikeTwoTone } from '@ant-design/icons'
import { PropsTypes } from 'src/types'
import TagLists from 'src/components/TagList'

type ArticleProps = {
  article: PropsTypes.Article
}

const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  const { id, title, tags, text } = article
  const linkTo = `${routePath.ARTICLES}/${id}`

  // FIXME: API 완성되면 리덕스 상태로 빼기
  const [likes, setLikes] = useState(false)

  const onClickLikes = () => {
    setLikes(!likes)
  }

  const actions = [
    <ActionItem key="like-status" onClick={onClickLikes}>
      {likes ? <LikeTwoTone /> : <LikeOutlined />}
      {234}
    </ActionItem>,
    <ActionItem key="comments">
      <MessageOutlined />
      {345}
    </ActionItem>,
  ]

  return (
    <ListItem actions={actions}>
      <TagLists tags={tags} />
      <ItemMeta
        title={
          <ItemLink to={linkTo}>
            <Title>{title}</Title>
          </ItemLink>
        }
      />
      <Description>{text}</Description>
    </ListItem>
  )
}

const ListItem = styled(List.Item)`
  margin: -1px 0;
  border-top: 1px solid #f0f0f0;
`

const ItemMeta = styled(ListItem.Meta)`
  margin: 0;
  & h4 {
    margin: 0 !important;
  }
`

const Description = styled.p`
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ItemLink = styled(Link)`
  display: block;
  text-decoration: none;

  color: #000;
  &:hover {
    color: black;
    text-decoration: underline;
    text-decoration-color: #000;
  }
`

const Title = styled.div`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
`

const ActionItem = styled.span`
  &:hover {
    cursor: pointer;
  }
`

export default ArticleListItem
