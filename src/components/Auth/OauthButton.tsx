import React from 'react'
import { Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

interface Props {
  type: 'login' | 'join'
  service: 'github'
}

const serviceMap = {
  github: '깃허브',
}

const colorMap = {
  github: '#000',
}

const typeMap = {
  login: '로그인하기',
  join: '가입하기',
}

const IconMap = {
  github: <GithubOutlined />,
}

const OauthButton: React.FC<Props> = ({
  type = 'login',
  service = 'github',
}) => {
  return (
    <Button
      block={true}
      type="primary"
      icon={IconMap[service]}
      size={'large'}
      style={{ backgroundColor: `${colorMap[service]}`, border: 'transparent' }}
    >
      {`${serviceMap[service]}로 ${typeMap[type]}`}
    </Button>
  )
}

export default OauthButton
