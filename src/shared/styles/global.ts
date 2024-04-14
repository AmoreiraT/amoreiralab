import { createGlobalStyle, css } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      color: ${theme.color.text.primary};
      font-display: swap;
      src: local('Roboto Regular'), local('Roboto-Regular');
    }

    :root {
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    html {
      font-size: 62.5%;

      & body {
        height: 100vh;
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      html {
        scroll-behavior: smooth;
      }
    }

    body {
      font-size: 1.6rem;
      line-height: 1.5;

      overflow: hidden;

      > div#root {
      }
    }

    ::-webkit-scrollbar {
      height: 1.2rem;
      width: 1.2rem;
    }

    ::-webkit-scrollbar-track {
    }

    ::-webkit-scrollbar-thumb {
    }

    ::-webkit-scrollbar-thumb:hover {
    }

    * {
      list-style: none;
      text-decoration: none;

      margin: 0;
      padding: 0;
      font: inherit;
      color: inherit;
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    img,
    picture,
    svg,
    video {
      display: block;
    }

    button {
      cursor: pointer;
      border: none;
      background: transparent;
      line-height: initial;
      letter-spacing: initial;
      word-spacing: initial;
    }

    div.MuiPickersPopper-root {
      & .MuiPaper-root {
        max-height: 100%;
      }
    }

    div.MuiTabs-scroller {
      position: fixed !important;
      z-index: 1000;
    }

    div.MuiPaper-root {
      max-height: 24rem;
      padding: 0rem;
      border-radius: 0rem;
      margin-top: 0.1rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

      ul {
        padding: 0rem;
      }

      @media (max-width: 1050px) {
        ul {
          height: 75px;
          font-size: 9px;
        }
      }

      & .MuiPickersCalendarHeader-labelContainer {
      }

      & .MuiDayCalendar-weekDayLabel {
      }

      & .MuiPickersDay-root {
        line-height: initial;
        letter-spacing: initial;
        word-spacing: initial;
      }
    }

    div.MuiDateCalendar-root {
      width: 36rem;
    }

    button.MuiPickersArrowSwitcher-button {
      tabindex: 0;

      svg {
        font-size: 2rem;
      }
    }

    button.MuiPickersCalendarHeader-switchViewButton {
      svg {
        font-size: 2rem;
      }
    }

    button.Mui-selected {
    }

    div.MuiAccordion-root {
      box-shadow: none;
      border-bottom: 1px solid;
    }

    button.MuiStepButton-root {
      margin: 0rem;
      padding: 0rem;
    }

    div.MuiStepConnector-root {
      padding: 0.8rem;
    }

    div.MuiStep-root {
      padding: 0rem;
    }

    div.MuiSelect-select {
    }

    li.MuiButtonBase-root {
      line-height: initial;
      letter-spacing: initial;
      word-spacing: initial;

      :hover {
        border-radius: 0rem;
      }
    }

    button.MuiButtonBase-root {
      line-height: initial;
      letter-spacing: initial;
      word-spacing: initial;
    }

    .MuiPaper-root {
    }

    .MuiMenuItem-root {
    }
  `}
`;
