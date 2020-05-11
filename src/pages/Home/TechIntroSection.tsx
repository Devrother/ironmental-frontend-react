import React, { useRef } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { icons } from '../../assets/icons'
import { fadeInUp } from '../../styles/animations'
import { useAnimationTrigger } from '../../hooks'
// interface Props {}

const TechIntroSection: React.FC = props => {
  const TechIcons = icons.map((icon, index) => (
    <Col span={6} key={icon.title}>
      <Img src={icon.src} alt={icon.alt} delay={0.2 * index} />
    </Col>
  ))

  const observerEl = useRef<HTMLHeadingElement>(null)
  const animationTrigger = useAnimationTrigger(observerEl)

  return (
    <Section>
      <h2 ref={observerEl}>다양한 기술 상식들이 만나보세요!</h2>
      {animationTrigger && <Row gutter={[24, 24]}>{TechIcons}</Row>}
    </Section>
  )
}

const Section = styled.section`
  min-height: 148px;
  text-align: center;
`

const Img = styled.img<{ delay: number }>`
  width: 50px;
  ${props => fadeInUp(props.delay)}
`

export default TechIntroSection
