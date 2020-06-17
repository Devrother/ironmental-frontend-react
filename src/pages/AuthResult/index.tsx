import React /* useEffect */ from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'
import { useSelector /*  useDispatch  */ } from 'react-redux'
// import { useParams } from 'react-router-dom'
import { authSelector } from 'src/services/auth/selector'
// import { sendAuthConfirm } from 'src/services/auth/actions'
import ConfirmAnimation from 'src/assets/animations/confirm.json'
import FailAnimation from 'src/assets/animations/fail.json'

// TODO: 로그인, 회원가입 결과 페이지로 활용하기
const AuthResult: React.FC = () => {
  // const dispatch = useDispatch()
  // const { subscriberId } = useParams()
  const { error /* result, loading */ } = useSelector(authSelector)

  // useEffect(() => {
  //   dispatch(sendAuthConfirm())
  // }, [dispatch, subscriberId])
  return (
    <AuthResultContainer>
      {error ? (
        <Lottie
          options={{
            animationData: FailAnimation,
            loop: false,
          }}
          height={400}
          width={400}
        />
      ) : (
        <Lottie
          options={{
            animationData: ConfirmAnimation,
            loop: false,
          }}
          height={400}
          width={400}
        />
      )}
    </AuthResultContainer>
  )
}

const AuthResultContainer = styled.div``

// const Message = styled.p`
//   margin: 0 auto;
//   font-size: 1.2rem;
//   text-align: center;
// `

export default AuthResult
