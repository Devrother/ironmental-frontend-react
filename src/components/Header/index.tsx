import React from 'react'
import { Layout } from 'antd'
import { colors } from '../../styles/palette'
import styled from 'styled-components'
import Navigation from './Navigation'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  )
}

const StyledHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${colors.white.primary};
  border-bottom: 1px solid ${colors.grey.primary};
`

export default Header
