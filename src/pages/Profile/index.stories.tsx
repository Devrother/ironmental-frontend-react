import React from 'react'
// import Profile from '.'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { Divider } from 'antd'
import UserInfo from './UserInfo'
import ActivityInfo from './ActivityInfo'
import LikesList from './LikesList'
import styled from 'styled-components'

const Profile: React.FC = () => {
  return (
    <Section>
      <UserInfo />
      <Divider />
      <ActivityInfo />
      <Divider />
      {/* <LikesList /> */}
    </Section>
  )
}

const Section = styled.section`
  padding: 80px 20px;
`

export default {
  title: 'pages / Profile Page',
  component: Profile,
}

export const Default: React.FC = () => <DefaultLayout component={Profile} />

// export const Default: React.FC = () => <DefaultLayout component={Profile} />
