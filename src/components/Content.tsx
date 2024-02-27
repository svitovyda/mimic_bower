import { useContentFetcher } from "../hooks/contentFetcher";
import { ModuleItem } from "./ModuleItem";
import { LoaderAnimation } from "./ui/LoaderAnimation";
import * as React from "react";

export const Content: React.FC = () => {
  const [state, setQuery] = useContentFetcher("");

  React.useEffect(() => {
    setQuery("jquery");
  }, [setQuery]);

  if (state.isLoading) return <LoaderAnimation />;
  if (state.isError) return <div>Some error occurred, try again later!</div>;
  return (
    <div>
      {state.data.map((p) => (
        <ModuleItem key={p.name} packageElement={p} />
      ))}
    </div>
  );
};
