import { Content } from "./Content";
import { Search } from "./Search";
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
    <div>
      <Search onQueryChanged={onNewQuery} />
      <Content query={query} />
    </div>
  );
};
