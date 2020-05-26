import * as React from 'react'
import styled from 'styled-components'
import TagList from 'src/components/TagList'
import { Card } from 'antd'

// TODO: 사가 적용때 props로 데이터 내려받도록 만들기
// interface Props{

// }

const { Meta } = Card
const ArchiveCard: React.FC = () => {
  return (
    <StyledCard
      hoverable={true}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta title="CORS란 무엇인가요?" />
      <TagList tags={['javascript', 'web', 'fp']} />
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  min-width: 200px;
  text-align: center;
  margin: 10px;
`

export default ArchiveCard
