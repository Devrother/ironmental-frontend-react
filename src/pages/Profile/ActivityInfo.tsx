import * as React from 'react'
import styled from 'styled-components'

const ActivityInfo: React.FC = props => {
  return (
    <>
      <ActivityCountContainer>
        <ActivityCount>
          <h2>Likes</h2>
          2378
        </ActivityCount>
        <ActivityCount>
          <h2>Comments</h2>
          4231678
        </ActivityCount>
      </ActivityCountContainer>
    </>
  )
}

const ActivityCountContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ActivityCount = styled.div`
  margin-right: 50px;
  h2 {
    font-size: 1rem;
  }
`

export default ActivityInfo
