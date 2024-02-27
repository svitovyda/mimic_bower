import { Header } from "./components/Header";
import { LoaderAnimation } from "./components/ui/LoaderAnimation";
import { GlobalStyle } from "./components/ui/styles";
import * as React from "react";

export const App: React.FC<{}> = () => {
  return (
    <div>
      <LoaderAnimation />
      <Header />
      <GlobalStyle />
    </div>
  );
};
