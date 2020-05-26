import * as React from 'react'
import styled from 'styled-components'
import { Tag } from 'antd'
import { colors } from 'src/styles/palette'

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
  //FIXME: 태그 검색 필터링 기능때 사용하던 css 파일, 불필요시 삭제하기
  /* &:hover {
    cursor: pointer;
  } */
`

const StyledTag = styled(Tag)`
//FIXME: 태그 검색 필터링 기능때 사용하던 css 파일, 불필요시 삭제하기
  /* &:hover {
    cursor: pointer;
    background-color: ${colors.grey.primary};
  } */
`

export default TagList
