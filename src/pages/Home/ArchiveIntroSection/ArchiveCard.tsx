import * as React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import TagList from 'src/components/TagList'

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
