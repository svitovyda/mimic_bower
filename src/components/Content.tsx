import { useContentFetcher } from '../hooks/contentFetcher';
import { usePagination } from '../hooks/usePagination';
import type { Package } from '../models/Package';
import type { SortType } from '../services/ApiServise';
import { ContentContainer, ContentErrorContainer } from '../styles/Content';
import { List } from './List';
import { ListHeader } from './ListHeader';
import { Pagination } from './Pagination';
import { LoaderAnimation } from './ui/LoaderAnimation';
import configJson from 'config';
import * as React from 'react';

const ItemsPerPage = configJson.searchItemsPageMaxSize;

export interface ContentProps {
  query: string;
}

export const Content: React.FC<ContentProps> = ({ query }: ContentProps) => {
  const [fetchState, setQuery, setSort] = useContentFetcher('');
  const [paginationState, navigateToPage] = usePagination(fetchState.data);
  const [pageData, setPageData] = React.useState<Package[]>([]);

  React.useEffect(() => {
    setQuery(query);
    setSort(undefined);
    setPageData([]);
  }, [query, setQuery, setSort]);

  React.useEffect(() => {
    if (fetchState.data.length === 0) setPageData([]);
    else {
      const pageStart = (paginationState.currentPage - 1) * ItemsPerPage;

      setPageData(fetchState.data.slice(pageStart, pageStart + ItemsPerPage));
    }
  }, [fetchState.data, paginationState]);

  const onSort = React.useCallback((sortBy?: SortType) => {
    setSort(sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchState.isLoading) return <LoaderAnimation />;
  if (fetchState.isError)
    return <ContentErrorContainer>Sorry, there was an error while fetching repositories</ContentErrorContainer>;
  return (
    <ContentContainer>
      {pageData.length > 0 && <ListHeader onSort={onSort} />}
      <List data={pageData} />
      {pageData.length > 0 && (
        <Pagination
          currentPage={paginationState.currentPage}
          totalPages={paginationState.totalPages}
          navigateToPage={navigateToPage}
        />
      )}
    </ContentContainer>
  );
};
