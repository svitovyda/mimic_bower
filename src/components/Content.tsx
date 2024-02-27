import { useContentFetcher } from "../hooks/contentFetcher";
import { List } from "./List";
import { LoaderAnimation } from "./ui/LoaderAnimation";
import * as React from "react";

export interface ContentProps {
  query: string;
}

export const Content: React.FC<ContentProps> = ({ query }: ContentProps) => {
  const [state, setQuery] = useContentFetcher("");

  React.useEffect(() => {
    setQuery(query);
  }, [query, setQuery]);

  if (state.isLoading) return <LoaderAnimation />;
  if (state.isError) return <div>Some error occurred, try again later!</div>;
  return <List data={state.data} />;
};
