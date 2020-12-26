import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.8rem;
    font-family: "Montserrat", sans-serif;
    line-height: 1.5;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

`