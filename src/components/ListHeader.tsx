/* eslint-disable jsx-a11y/anchor-is-valid */
import type { SortType } from '../services/ApiServise';
import { ListHeaderContainer, NameLink, OwnerLink, StarsLink } from '../styles/ListHeader';
import * as React from 'react';

export interface ListHeaderProps {
  onSort: (sortBy?: SortType) => void;
}

export const ListHeader: React.FC<ListHeaderProps> = React.memo(({ onSort }: ListHeaderProps) => {
  return (
    <ListHeaderContainer>
      <NameLink onClick={() => onSort()}>Name</NameLink>
      <OwnerLink>Owner</OwnerLink>
      <StarsLink onClick={() => onSort('stars')}>Stars</StarsLink>
    </ListHeaderContainer>
  );
});

ListHeader.displayName = 'ListHeader';
