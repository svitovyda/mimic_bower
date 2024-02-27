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
  }, [query, setQuery]);

  React.useEffect(() => {
    setPage(
      fetchState.data.slice(
        (paginationState.currentPage - 1) * ItemsPerPage,
        paginationState.currentPage * ItemsPerPage
      )
    );
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
