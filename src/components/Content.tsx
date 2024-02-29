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
  const [pageData, setPageData] = React.useState<Package[]>([]);

  React.useEffect(() => {
    setQuery(query);
    setPageData([]);
  }, [query, setQuery]);

  React.useEffect(() => {
    if (fetchState.data.length === 0) setPageData([]);
    else {
      const pageStart = (paginationState.currentPage - 1) * ItemsPerPage;

      setPageData(fetchState.data.slice(pageStart, pageStart + ItemsPerPage));
    }
  }, [fetchState.data, paginationState]);

  if (fetchState.isLoading) return <LoaderAnimation />;
  if (fetchState.isError) return <div>Sorry, there was an error while fetching repositories</div>;
  return (
    <div>
      <List data={pageData} />
      <Pagination
        currentPage={paginationState.currentPage}
        totalPages={paginationState.totalPages}
        navigateToPage={navigateToPage}
      />
    </div>
  );
};
