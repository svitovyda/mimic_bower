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
    border-top: 1px solid #ddd;
    margin-top: 40px;
    font-size: .9em;
  }
  a {
    cursor: pointer;
    background-color: transparent;
    color: #008ec4;
    outline-style: none;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  li a {
    color: #00acee;
    font-size: 17px;
    font-weight: bold;
    line-height: 1.5;
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
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }
  li {
    margin: 6px 0;
  }
}
`;
