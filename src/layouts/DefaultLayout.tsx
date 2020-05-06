import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'
import styled from 'styled-components'

type Props = {
  component: React.FC
  [rest: string]: any
}
const DefaultLayout: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Header />
          <StyledContent>
            <Component {...matchProps} {...rest} />
          </StyledContent>
        </Layout>
      )}
    />
  )
}

const { Content } = Layout

const StyledContent = styled(Content)`
  margin-top: 64px;
`

export default DefaultLayout
