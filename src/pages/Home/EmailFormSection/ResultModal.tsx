import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import { useLockBodyScroll } from 'src/hooks'
import { getSubscribeResult } from 'src/services/subscribe/selectors'
import confirmAnimation from 'src/assets/animations/confirm.json'
import exclamationAnimation from 'src/assets/animations/exclamation.json'
import failAnimation from 'src/assets/animations/fail.json'
import loadingAnimation from 'src/assets/animations/loading.json'

interface Props {
  closeResult: () => void
}

// INFO: sendEmail 결과 컴포넌트
const RequestResult: React.FC<Props> = ({ closeResult }) => {
  const { loading, result, error } = useSelector(getSubscribeResult)

  useLockBodyScroll()

  // TODO: 복잡도가 있어보이는데 애니메이션 컴포넌트를 따로 만들어 props로 내리는 방식 고민하기
  return (
    <RequestResultContainer>
      {loading && (
        <Lottie
          options={{
            animationData: loadingAnimation,
            loop: false,
          }}
          height={400}
          width={400}
        />
      )}

      {!loading && result.status === '미구독' && (
        <Lottie
          options={{
            animationData: confirmAnimation,
            loop: false,
          }}
          height={400}
          width={400}
        />
      )}

      {!loading && result.status === '미인증' && (
        <Lottie
          options={{ animationData: exclamationAnimation, loop: false }}
          height={350}
          width={350}
          // style={{ margin: '100px 105px' }}
        />
      )}

      {!loading && result.status === '구독중' && (
        <Lottie
          options={{ animationData: exclamationAnimation, loop: false }}
          height={350}
          width={350}
          // style={{ margin: '100px 105px' }}
        />
      )}

      {!loading && error && (
        <Lottie
          options={{ animationData: failAnimation, loop: false }}
          height={400}
          width={400}
          // style={{ margin: '100px 105px' }}
        />
      )}
      {loading && <p>인증메일을 보내는 중입니다!</p>}
      {error && <p>요청을 실패하였습니다. 잠시 후 다시 시도해주세요.</p>}
      {!loading && <p>{result.message}</p>}
      {!loading && <Button onClick={closeResult}>확인</Button>}
    </RequestResultContainer>
  )
}

const RequestResultContainer = styled.div`
  padding: auto 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
  text-align: center;
`

export default RequestResult
