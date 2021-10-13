import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:visited, &:active, &:focus {
      color: initial;
    }
  }
}
`

export default GlobalStyle
