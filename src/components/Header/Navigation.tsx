import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routePath } from '../../constants'
import { colors } from '../../styles/palette'
const Navigation: React.FC = () => {
  return (
    <Nav>
      <Logo className="logo">
        <StyledLink to={routePath.HOME}>IronMental</StyledLink>
      </Logo>
      <Menu>
        <MenuItem>
          <StyledLink to={routePath.HOME}>홈</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to={routePath.ARCHIVE}>아카이브</StyledLink>
        </MenuItem>
      </Menu>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.grey.primary};
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
