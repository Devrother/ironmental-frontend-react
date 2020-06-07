import * as React from 'react'
import styled from 'styled-components'
import { Tag } from 'antd'

interface Props {
  tags: string[]
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <Ul>
      {tags.map((tag, index) => (
        <Li key={index}>
          <Tag>{tag}</Tag>
        </Li>
      ))}
    </Ul>
  )
}

const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

const Li = styled.li`
  list-style: none;
`

export default TagList
