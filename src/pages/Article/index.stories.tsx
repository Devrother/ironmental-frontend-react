import React from 'react'
import DefaultLayout from 'src/layouts/DefaultLayout'
import Article from '.'
import Doc from './instruction.md'

export default {
  title: 'Pages / Article Page',
  component: Article,
  parameters: {
    notes: Doc,
  },
}

// A super-simple mock of a redux store

export const Default: React.FC = () => <DefaultLayout component={Article} />
