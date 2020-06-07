import React, { forwardRef } from 'react'
import Spinner from 'src/components/Spinner'

interface Props {
  isEnd: boolean
}

const ArticlesLoading: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { isEnd },
  ref
) => {
  return (
    <div style={{ textAlign: 'center' }} ref={ref}>
      {isEnd ? '더 이상 아티클이 없습니다.' : <Spinner />}
    </div>
  )
}

export default forwardRef(ArticlesLoading)
