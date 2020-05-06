import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const FormSection: React.FC = () => {
  return (
    <Section>
      <H1>
        매주 개발 상식 메일링 서비스
        <br /> 아이언멘탈
      </H1>
      <Article>
        아이언 멘탈은 다양한 개발상식을 가볍게 접하고 싶은 이용자에게 매주
        개발상식 관련 키워드를 이메일로 보내주는 구독 서비스입니다.
      </Article>
      <ButtonContainer>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="large"
        >
          구독하기
        </Button>
      </ButtonContainer>
    </Section>
  )
}

const Section = styled.section`
  padding: 30px;
`
const Article = styled.article`
  text-align: center;
`

const H1 = styled.h1`
  font-weight: 600;
  word-break: keep-all;
  text-align: center;
  font-size: 1.8rem;
`

const ButtonContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  /* align-items: center;
  align-content: center; */
`

export default FormSection
