import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {},

  typography: {},
  media: {
    superLarge: `(min-width: 1400px)`,
    extraLarge: `(min-width: 1200px)`,
    large: '(max-width: 992px)',
    medium: '(max-width: 768px)',
    small: '(max-width: 576px)',
  },
  transition: {
    all: 'all 0.3s ease-in-out',
    height: 'height 0.3s ease-in-out',
    width: 'width 0.3s ease-in-out',
    transform: 'transform 0.3s ease-in-out',
    background: 'background 0.3s ease-in-out',
    color: 'color 0.3s ease-in-out',
    opacity: 'opacity 0.3s ease-in-out',
    border: 'border 0.3s ease-in-out',
  },
};
