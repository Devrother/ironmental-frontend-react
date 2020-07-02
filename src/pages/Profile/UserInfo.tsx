import React, { useState } from 'react'
import { Avatar, Button, Switch } from 'antd'
import { UserOutlined, GithubOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { getLoggedInUser } from 'src/services/user/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { routeUtils, localStorageUtils } from 'src/utils'
import { routePath } from 'src/constants'
import { actions } from 'src/services/user/actions'

const UserInfo: React.FC = () => {
  // TODO: 완성되면 action으로 빼기
  const [subscribe, setSubscribe] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector(getLoggedInUser)

  const onClickLogout = () => {
    routeUtils.push(routePath.HOME)
    localStorageUtils.removeUser()

    // FIXME: 로그아웃 디스패치 시 브라우저가 멈춰버림
    dispatch(actions.logout())
  }

  const onSubscribe = () => {
    setSubscribe(!subscribe)
  }

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
      {!!user?.userId && (
        <ButtonContainer>
          <Switch
            checkedChildren="구독 중"
            unCheckedChildren="구독 하기"
            checked={subscribe}
            onChange={onSubscribe}
          />
          <div>
            <StyledButton>탈퇴</StyledButton>
            <StyledButton onClick={onClickLogout}>로그아웃</StyledButton>
          </div>
        </ButtonContainer>
      )}
    </>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledButton = styled(Button)`
  margin-right: 10px;
`

export default UserInfo
