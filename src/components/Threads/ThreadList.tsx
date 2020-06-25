import * as React from 'react'
import ThreadListItem from './ThreadListItem'
import CommentForm from 'src/components/Comments/CommentForm'

const ThreadList: React.FC = () => {
  return (
    <div>
      <ThreadListItem />
      <ThreadListItem />
      <CommentForm />
    </div>
  )
}

export default ThreadList
