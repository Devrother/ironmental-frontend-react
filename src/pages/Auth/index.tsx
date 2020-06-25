import React from 'react'
import OauthButton from 'src/components/Auth/OauthButton'
import styled from 'styled-components'
import * as queryString from 'query-string'
import { Link, useLocation } from 'react-router-dom'
import { routePath, apiConfig } from 'src/constants'

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
  const location = useLocation()
  const params = queryString.stringify({
    // TODO: CLIENT_ID는 Dev용이랑 local 용이랑 환경변수가 다름, netlify에서 만약 인증이 잘 안된다면, SECRET_KEY가 달라서 그런 걸 수 있음
    client_id: process.env.REACT_APP_API_GITHUB_OAUTH_CLIENT_ID,
    redirect_uri: `${window.location.origin}/auth/callback?prevUrl=${location.pathname}`,
    scope: ['read:user', 'user:email'].join(' '),
    allow_signup: true,
  })
  const githubAuthUrl = `${apiConfig.GITHUB_AUTH_BASE_URL}?${params}`
  const authType = typeMap[location.pathname]

  return (
    <Section>
      <h2>{titleMap[authType]}</h2>
      <ButtonContainer>
        <OauthButton href={githubAuthUrl} type={authType} service={'github'} />
      </ButtonContainer>
      <div>{bottomMap[location.pathname]()}</div>
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

export default Auth
