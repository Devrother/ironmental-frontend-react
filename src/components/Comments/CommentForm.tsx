import React from 'react'
import { Input, Button } from 'antd'
import styled from 'styled-components'

const { TextArea } = Input
const CommentForm: React.FC = () => {
  return (
    <Form>
      <StyledTextarea rows={4} />
      <StyledButton type="primary" htmlType="submit">
        등록
      </StyledButton>
    </Form>
  )
}

const Form = styled.form`
  padding: 20px;
`

const StyledTextarea = styled(TextArea)`
  margin-bottom: 10px;
`

const StyledButton = styled(Button)`
  display: block;
  margin-left: auto;
`

export default CommentForm
