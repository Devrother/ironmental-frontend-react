import React from 'react'
import OauthButton from 'src/components/Auth/OauthButton'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { routePath } from 'src/constants'

const typeMap: { [key: string]: 'login' | 'join' } = {
  [routePath.LOGIN]: 'login',
  [routePath.JOIN]: 'join',
}

const titleMap: { [key: string]: string } = {
  login: '로그인',
  join: '회원가입',
}

const bottomMap: { [key: string]: () => React.ReactElement } = {
  [routePath.LOGIN]: () => (
    <span>
      처음이신가요? <Link to={routePath.JOIN}>가입하기</Link>
    </span>
  ),
  [routePath.JOIN]: () => (
    <span>
      이미 가입하셨나요? <Link to={routePath.LOGIN}>로그인</Link>
    </span>
  ),
}

const Auth: React.FC = () => {
  const params = useLocation()
  const authType = typeMap[params.pathname]

  return (
    <Section>
      <h2>{titleMap[authType]}</h2>
      <ButtonContainer>
        <OauthButton type={authType} service={'github'} />
      </ButtonContainer>
      <Bottom>{bottomMap[params.pathname]()}</Bottom>
    </Section>
  )
}

const Section = styled.section`
  margin: 100px 0;
  text-align: center;
`
const ButtonContainer = styled.div`
  width: 310px;
  margin: 0 auto;
  margin-bottom: 30px;
`

const Bottom = styled.div``
export default Auth
