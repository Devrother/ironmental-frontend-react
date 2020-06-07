import React from 'react'
import styled from 'styled-components'

const Spinner = ({ width = 4, color = 'black' }) => {
  return <StyledDiv className="spinner" width={width} color={color} />
}

const StyledDiv = styled.div<{ width: number; color: string }>`
  display: inline-block;
  height: 28px;
  width: 28px;
  top: calc(50% - 14px);
  left: calc(50% - 14px);
  animation: rotate 0.8s infinite linear;
  ${props => {
    return `border: ${props.width}px solid ${props.color};`
  }}
  border-right-color: transparent;
  border-radius: 50%;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
