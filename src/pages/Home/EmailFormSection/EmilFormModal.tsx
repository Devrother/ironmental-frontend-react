import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Input, Button } from 'antd'
import styled from 'styled-components'
import { validators } from 'src/utils'
import { keyCodes } from 'src/constants'
import { actions } from 'src/services/subscribe/actions'

interface Props {
  closeModal: () => void
  showResult: () => void
}

const EmailFormModal: React.FC<Props> = ({ closeModal, showResult }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [iserror, setIserror] = useState(false)

  // TODO: iserror를 boolean으로 못받는 이슈 해결하기
  const handleSubmit = () => {
    if (!validators.validateEmail(email)) {
      setIserror(true)
      return
    }

    dispatch(actions.sendEmailSubscribe(email))
    showResult()
    closeModal()
  }

  const handleCancel = () => {
    closeModal()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (iserror) {
      setIserror(false)
    }

    setEmail(e.target.value)
  }

  const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!email.length) {
      return
    }

    if (e.keyCode !== keyCodes.ENTER_KEY) {
      return
    }

    handleSubmit()
  }

  return (
    <Modal
      visible={true}
      footer={null}
      onCancel={handleCancel}
      bodyStyle={{ paddingBottom: '50px' }}
    >
      <H2>
        아이언 멘탈 <br />
        구독 시작하기.
      </H2>
      <Description>
        이메일을 입력해주세요. <br />
        매주 월요일 개발 토픽을 보내드립니다! 😄
      </Description>
      <InputContainer>
        <StyledInput
          type="email"
          iserror={iserror ? 1 : 0}
          placeholder="E-mail"
          size="large"
          onChange={e => handleChange(e)}
          onKeyUp={e => handleKeyup(e)}
        />
        <Button type="primary" size="large" onClick={handleSubmit}>
          구독하기
        </Button>
      </InputContainer>
      {iserror && <ErrorMessage>이메일을 다시 확인해주세요</ErrorMessage>}
    </Modal>
  )
}

const H2 = styled.h2`
  margin-top: 40px;
  font-weight: 600;
  font-size: 2.3rem;
  line-height: 2.7rem;
`

const Description = styled.p`
  margin-bottom: 100px;
`

const InputContainer = styled.div`
  display: flex;
`

// FIXME:  for a non-boolean attribute. 에러때문에 임시로 iserror 타입을 number로함
const StyledInput = styled(Input)<{ iserror: number }>`
  ${props => {
    if (props.iserror) {
      return `border: 1px solid red;color: red;`
    }
  }}
`

const ErrorMessage = styled.div`
  color: red;
`

export default EmailFormModal
