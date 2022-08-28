import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    font-size: 62.5%;

    color-scheme: ${({ theme }) => theme.colorScheme};
    background-color: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.primary};
    
    transition-property: color-scheme, background-color, color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
  }

  body {
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
