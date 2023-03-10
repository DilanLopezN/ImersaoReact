import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open sans', sans-serif;
  }

  body {
    background-color: #1E192C;
    color: white;
  }
  
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;

    color: violet;
  }

`
