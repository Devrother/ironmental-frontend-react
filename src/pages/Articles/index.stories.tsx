import React from 'react'
import DefaultLayout from 'src/layouts/DefaultLayout'
import Articles from '.'
import Doc from './instruction.md'

export default {
  title: 'Articles Page',
  component: Articles,
  parameters: {
    notes: Doc,
  },
}

export const Default: React.FC = () => <DefaultLayout component={Articles} />
