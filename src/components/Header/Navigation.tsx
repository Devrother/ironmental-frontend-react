import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routePath } from 'src/constants'
import Responsive from 'src/layouts/Responsive'

const Navigation: React.FC = () => {
  return (
    <Responsive>
      <Nav>
        <Logo className="logo">
          <StyledLink to={routePath.HOME}>IronMental</StyledLink>
        </Logo>
        <Menu>
          <MenuItem>
            <StyledLink to={routePath.HOME}>홈</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={routePath.ARTICLES}>아티클</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={routePath.LOGIN}>로그인</StyledLink>
          </MenuItem>
          {/* <MenuItem>
            <StyledLink to={routePath.PROFILE}>
              <Avatar size="large" icon={<UserOutlined />} />
            </StyledLink>
          </MenuItem> */}
        </Menu>
      </Nav>
    </Responsive>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
const Logo = styled.div`
  color: #000;
  font-size: 1.2rem;
`

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`
const MenuItem = styled.li`
  margin: 0 10px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

export default Navigation
