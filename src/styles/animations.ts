import { css } from 'styled-components'

export const fadeInUp = (delay: number = 0) => css`
  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: ${delay}s;
`
