import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
`

export default GlobalStyle
