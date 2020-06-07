import * as React from 'react'
import { Skeleton } from 'antd'

interface Props {
  loading: boolean
}

const ArticleLoading: React.FC<Props> = ({ loading }) => {
  return <>{loading && <Skeleton active={true} />}</>
}

export default ArticleLoading
