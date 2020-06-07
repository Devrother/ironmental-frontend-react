import * as React from 'react'
import { Result, Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import { PropsTypes } from 'src/types'
import { errorMessage } from 'src/constants'

interface Props extends RouteComponentProps {
  errorCode: 404 | 500 | '404' | '500'
}

// TODO: 구독 결과 페이지의 오류랑은 별개, 구독 결과 페이지 메세지는 승욱이랑 의논
const Error: React.FC<Props> = ({ errorCode = 404, history }) => {
  const errorResults: {
    [key in Props['errorCode']]: PropsTypes.ErrorInfo
  } = {
    404: { status: '404', title: '404', subTitle: errorMessage.notFound },
    500: { status: '500', title: '500', subTitle: errorMessage.server },
  }

  const handleClick = () => {
    history.push('/')
  }

  return (
    <Result
      status={errorCode}
      title={errorResults[errorCode].title}
      subTitle={errorResults[errorCode].subTitle}
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  )
}

export default Error
