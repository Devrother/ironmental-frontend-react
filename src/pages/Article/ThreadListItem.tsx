import React, { useState } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import { LikeOutlined, LikeFilled } from '@ant-design/icons'
import styled from 'styled-components'

const ThreadListItem: React.FC = () => {
  // FIXME: API 완성되면 리덕스 상태로 빼기
  const [likes, setLikes] = useState(false)

  const onClickLikes = () => {
    setLikes(!likes)
  }

  return (
    <StyledComment
      actions={[
        <ActionItem key="like-status" onClick={onClickLikes}>
          {likes ? <LikeFilled /> : <LikeOutlined />}
          214
        </ActionItem>,
      ]}
      author={<a href="http://google.com">리누스 토발즈</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="송중기"
        />
      }
      content={<p>가만히 있으세요</p>}
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

const StyledComment = styled(Comment)`
  margin-top: -1px;
  background-color: #fafbfd;
  border-top: 1px solid #e6ecf5;
  border-bottom: 1px solid #e6ecf5;
  padding: 30px;
`

export default ThreadListItem
