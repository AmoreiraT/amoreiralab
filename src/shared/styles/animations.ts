import { keyframes } from 'styled-components';

export const pulse = keyframes`

  0% {
    transform: scale(1);
    filter: brightness(0.8);
  }
  50% {
    transform: scale(1.2);
    filter: brightness(1);
  }
  100% {
    transform: scale(1);
    filter: brightness(0.8);
  }
`;
