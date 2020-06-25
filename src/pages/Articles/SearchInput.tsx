import React from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const { Search } = Input

const SearchInput: React.FC = () => {
  return (
    <SearchContainer>
      <Search
        placeholder="검색어를 입력해주세요."
        // onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  margin: 30px 0;
  text-align: right;
`

export default SearchInput
