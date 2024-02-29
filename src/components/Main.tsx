import { MainContainer, RightContainer } from "../styles/Main";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Search } from "./Search";
import { Sidebar } from "./Sidebar";
import * as React from "react";

export const Main: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");

  const onNewQuery = React.useCallback(
    (newQuery: string) => {
      setQuery(newQuery);
    },
    [setQuery]
  );

  return (
    <MainContainer>
      <Sidebar />
      <RightContainer>
        <Search onQueryChanged={onNewQuery} />
        <Content query={query} />
        <Footer />
      </RightContainer>
    </MainContainer>
  );
};
