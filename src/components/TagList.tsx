import * as React from 'react'
import styled from 'styled-components'
import { Tag } from 'antd'
import { colors } from '../styles/palette'

interface Props {
  tags: string[]
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <Ul>
      {tags.map((tag, index) => (
        <Li key={index}>
          <StyledTag>{tag}</StyledTag>
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

  /* &:hover {
    cursor: pointer;
  } */
`

const StyledTag = styled(Tag)`
  /* &:hover {
    cursor: pointer;
    background-color: ${colors.grey.primary};
  } */
`

export default TagList
