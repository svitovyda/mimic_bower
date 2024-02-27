import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import * as React from "react";

export const App: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Content />
      <GlobalStyle />
    </div>
  );
};
