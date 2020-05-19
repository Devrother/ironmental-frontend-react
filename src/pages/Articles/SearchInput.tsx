import React from 'react'
import { Input } from 'antd'

const { Search } = Input

// interface Props {}

const SearchInput: React.FC = () => {
  return (
    <Search
      placeholder="검색어를 입력해주세요."
      // onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
  )
}

export default SearchInput
