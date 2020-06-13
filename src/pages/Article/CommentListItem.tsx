import React, { useState } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import { LikeOutlined, LikeFilled, MessageOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import ThreadList from './ThreadList'
const CommentListItem: React.FC = () => {
  // FIXME: API 완성되면 리덕스 상태로 빼기
  const [likes, setLikes] = useState(false)

  const onClickLikes = () => {
    setLikes(!likes)
  }

  return (
    <Comment
      actions={[
        <ActionItem key="like-status" onClick={onClickLikes}>
          {likes ? <LikeFilled /> : <LikeOutlined />}
          214
        </ActionItem>,
        <ActionItem key="comments">
          <MessageOutlined />
          214
        </ActionItem>,
        <ActionItem key="reply-to" style={{ color: '#1890ff' }}>
          쓰레드 보기..
        </ActionItem>,
      ]}
      author={<a>송중기</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="송중기"
        />
      }
      content={
        <p>
          연예계 실증나서 개발공부 시작했는데 너무 좋은거 같애요.연예계 실증나서
          개발공부 시작했는데 너무 좋은거 같애요연예계 실증나서 개발공부
          시작했는데 너무 좋은거 같애요연예계 실증나서 개발공부 시작했는데 너무
          좋은거 같애요연예계 실증나서 개발공부 시작했는데 너무 좋은거
          같애요연예계 실증나서 개발공부 시작했는데 너무 좋은거 같애요연예계
          실증나서 개발공부 시작했는데 너무 좋은거 같애요연예계 실증나서
          개발공부 시작했는데 너무 좋은거 같애요
        </p>
      }
      datetime={
        <Tooltip title={'시간'}>
          <span>4분전</span>
        </Tooltip>
      }
    />
  )
}

const ActionItem = styled.div`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`

export default CommentListItem
