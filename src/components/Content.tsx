import { useContentFetcher } from "../hooks/contentFetcher";
import { usePagination } from "../hooks/usePagination";
import type { Package } from "../models/Package";
import { List } from "./List";
import { Pagination } from "./Pagination";
import { LoaderAnimation } from "./ui/LoaderAnimation";
import configJson from "config";
import * as React from "react";

const ItemsPerPage = configJson.searchItemsPageMaxSize;

export interface ContentProps {
  query: string;
}

export const Content: React.FC<ContentProps> = ({ query }: ContentProps) => {
  const [fetchState, setQuery] = useContentFetcher("");
  const [paginationState, navigateToPage] = usePagination(fetchState.data);
  const [page, setPage] = React.useState<Package[]>([]);

  React.useEffect(() => {
    setQuery(query);
    setPage([]);
  }, [query, setQuery]);

  React.useEffect(() => {
    if (fetchState.data.length === 0) setPage([]);
    else {
      const pageStart = (paginationState.currentPage - 1) * ItemsPerPage;

      setPage(fetchState.data.slice(pageStart, pageStart + ItemsPerPage));
    }
  }, [fetchState.data, paginationState]);

  if (fetchState.isLoading) return <LoaderAnimation />;
  if (fetchState.isError) return <div>Some error occurred, try again later!</div>;
  return (
    <div>
      <List data={page} />
      <Pagination
        currentPage={paginationState.currentPage}
        totalPages={paginationState.totalPages}
        navigateToPage={navigateToPage}
      />
    </div>
  );
};
