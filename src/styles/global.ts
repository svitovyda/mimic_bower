import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family:sans-serif;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
  }
  body {
    font: 16px "Helvetica Neue",Helvetica,Arial,sans-serif;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    color: #543729
  }
  header {
    display: block;
    background: #ffcc2f;
    color: #543729;
    display: block;
    margin-bottom: 20px;
    min-height: 168px;
    @media only screen and (max-width:680px) {
      min-height: auto;
    }
  }
  a {
    background-color: transparent;
  }
  a:active,
  a:hover {
    outline: 0;
  }

  main {
    margin-top: 195px;
  }
  p {
    font-size: smaller;
    text-align: justify;
    text-justify: inter-word;
  }
  footer {
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
}
`;
