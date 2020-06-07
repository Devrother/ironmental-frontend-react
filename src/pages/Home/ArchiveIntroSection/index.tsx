import React from 'react'
import styled from 'styled-components'
import ArchiveCard from './ArchiveCard'

const ArchiveIntroSection: React.FC = props => {
  return (
    <Section>
      <CardList>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
      </CardList>
      <CardList>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
        <li>
          <ArchiveCard />
        </li>
      </CardList>
      <Description>
        <h2>
          메일을 기다리고 있지 않아도 됩니다.
          <br />
          아카이브 탭을 이용해보세요.
        </h2>
        <p>
          아카이브탭에서 모든 콘텐츠를 직접 보실 수 있습니다.
          3490387052374850923758가지의 다양한 개발상식을 만나보세요. 저승에서
          1000년 넘게 더 봐야 다 볼 수 있을 정도로 양이 많습니다.
        </p>
      </Description>
    </Section>
  )
}

const Section = styled.section`
  overflow: hidden;
  padding: 30px 0;
`

const CardList = styled.ul`
  list-style: none;
  display: flex;
  animation: moveList 100s linear infinite;

  @keyframes moveList {
    from {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`

const Description = styled.div`
  margin: 0 auto;
  padding: 20px 40px;
  text-align: left;
`
export default ArchiveIntroSection
