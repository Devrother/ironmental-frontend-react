import React from 'react'
import styled from 'styled-components'

const Responsive: React.FC = ({ children, ...rest }) => {
  return <ResponsiveContainer {...rest}>{children}</ResponsiveContainer>
}

const ResponsiveContainer = styled.div`
  width: 1024px;
  margin: 0 auto;

  & h1 {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 3.5rem;
  }

  & h2 {
    font-size: 2.7rem;
    font-weight: 600;
    line-height: 3rem;
  }

  @media (max-width: 1024px) {
    width: 768px;

    & h1 {
      font-size: 2.8rem;
      font-weight: 600;
      line-height: 3rem;
    }

    & h2 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    & h1 {
      font-size: 2.2rem;
      font-weight: 600;
      line-height: 2.5rem;
    }

    & h2 {
      font-size: 1.7rem;
      font-weight: 600;
      line-height: 1.8rem;
    }
  }
`
export default Responsive
