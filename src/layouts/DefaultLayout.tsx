import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components'
import Header from 'src/components/Header'
import Responsive from 'src/layouts/Responsive'

type Props = {
  component: React.FC<any>
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
            <Responsive>
              <Component {...matchProps} {...rest} />
            </Responsive>
          </StyledContent>
        </Layout>
      )}
    />
  )
}

const StyledContent = styled(Layout.Content)`
  background-color: #fff;
  margin-top: 64px;
  min-height: 1000px;
`

export default DefaultLayout
