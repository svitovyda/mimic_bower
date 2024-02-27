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
    margin-bottom: 20px;
    min-height: 168px;
    @media only screen and (max-width:680px) {
      min-height: auto;
    }
  }
  footer {
    display: block;
    padding-top: 10px;
    border-top: 1px solid #DDD;
    margin-top: 40px;
    font-size: .9em;
  }
  a {
    background-color: transparent;
    color: #008ec4;
    outline-style: none;
    text-decoration: none;
  }
  a:active,
  a:hover {
    outline: 0;
  }

  main {
    margin-top: 195px;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  footer {
    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
}
`;
