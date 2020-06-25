import * as React from 'react'
import { Result, Button } from 'antd'
import { PropsTypes } from 'src/types'
import { errorMessage, routePath } from 'src/constants'
import { routeUtils } from 'src/utils'
import { useLocation } from 'react-router-dom'

interface LocationState {
  errorCode: 404 | 500 | '404' | '500' | 'unknown'
}

const errorResults: {
  [key in LocationState['errorCode']]: PropsTypes.ErrorInfo
} = {
  unknown: {
    status: 'unknown',
    title: '예기치 못한 오류',
    subTitle: errorMessage.unknown,
  },
  404: { status: '404', title: '404', subTitle: errorMessage.notFound },
  500: { status: '500', title: '500', subTitle: errorMessage.server },
}

// TODO: 구독 결과 페이지의 오류랑은 별개, 구독 결과 페이지 메세지는 승욱이랑 의논
const Error: React.FC = () => {
  const locationState = useLocation().state as LocationState
  const errorCode = locationState ? locationState.errorCode : '404'

  const errorType = errorResults[errorCode] ? errorCode : 'unknown'

  const handleClick = () => {
    routeUtils.push(routePath.HOME)
  }

  return (
    <Result
      status={errorType === 'unknown' ? undefined : errorType}
      title={errorResults[errorType].title}
      subTitle={errorResults[errorType].subTitle}
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  )
}

export default Error
