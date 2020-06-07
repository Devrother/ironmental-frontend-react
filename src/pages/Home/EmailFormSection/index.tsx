import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { fadeInUp } from 'src/styles/animations'
import EmilFormModal from './EmilFormModal'
import ResultModal from './ResultModal'
const FormSection: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleResult, setVisibleResult] = useState(false)

  const showModal = () => {
    setVisibleModal(true)
  }

  const closeModal = () => {
    setVisibleModal(false)
  }

  const showResult = () => {
    setVisibleResult(true)
  }

  const closeResult = () => {
    setVisibleResult(false)
  }

  return (
    <Section>
      <H1>
        <span>개발 토픽 메일링 서비스</span>
        <br />
        <span>아이언멘탈</span>
      </H1>
      <Article>
        아이언 멘탈은 다양한 개발토픽을 가볍게 접하고 싶은 이용자에게 매주
        개발토픽을 이메일로 보내주는 구독 서비스입니다.
      </Article>
      <ButtonContainer>
        <Button
          type="primary"
          shape="round"
          icon={<MailOutlined />}
          size="large"
          onClick={showModal}
        >
          구독하기
        </Button>
      </ButtonContainer>
      {visibleModal && (
        <EmilFormModal closeModal={closeModal} showResult={showResult} />
      )}
      {visibleResult && <ResultModal closeResult={closeResult} />}
    </Section>
  )
}

const Section = styled.section`
  padding: 30px;
`
const Article = styled.article`
  text-align: center;
  ${fadeInUp(0.5)}
`

const H1 = styled.h1`
  word-break: keep-all;
  text-align: center;

  /* 개발 상식 메일링 서비스 문구*/
  span:nth-child(1) {
    font-size: 1.5rem;
  }

  /* 아이언멘탈 문구*/
  span:nth-child(3) {
    font-size: 3.5rem;
    line-height: 3rem;
  }
  ${fadeInUp(0)}
`

const ButtonContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`

export default FormSection
