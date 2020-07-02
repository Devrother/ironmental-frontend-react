import React from 'react'
// import Profile from '.'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { Divider } from 'antd'
import Doc from './instruction.md'
import UserInfo from './UserInfo'
import ActivityInfo from './ActivityInfo'
import LikesList from './LikesList'
import CommentList from './CommentList'
import styled from 'styled-components'

const Profile: React.FC = () => {
  return (
    <Section>
      <UserInfo />
      <Divider />
      <ActivityInfo />
      <Divider />
      <LikesList />
      <CommentList />
    </Section>
  )
}

const Section = styled.section`
  padding: 80px 20px;
`

export default {
  title: 'pages / Profile Page',
  component: Profile,
  parameters: {
    notes: Doc,
  },
}

export const Default: React.FC = () => <DefaultLayout component={Profile} />

// export const Default: React.FC = () => <DefaultLayout component={Profile} />
