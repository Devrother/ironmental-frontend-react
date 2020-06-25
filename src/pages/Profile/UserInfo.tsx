import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined, GithubOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const UserInfo: React.FC = () => {
  return (
    <>
      <ProfileContainer>
        <Meta>
          <h1>KwonYG</h1>
          <div>andamirocll@gmail.com</div>
        </Meta>
        <StyledAvatar
          src={
            'https://1kpost.com/uploads/news/posts/%ED%8E%AD%EC%88%98-03-web.jpg'
          }
          icon={<UserOutlined />}
          size="large"
        />
        <GithubOutlined />
      </ProfileContainer>
    </>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Meta = styled.div`
  margin-right: 30px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`

const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
`

export default UserInfo
