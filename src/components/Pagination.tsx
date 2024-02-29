import { PaginationContainer } from '../styles/Pagination';
import { Button } from '../styles/ui/Button';
import * as React from 'react';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  navigateToPage: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = React.memo(
  ({ totalPages, currentPage, navigateToPage }: PaginationProps) => {
    const handleNext = () => {
      if (currentPage < totalPages) {
        navigateToPage(currentPage + 1);
      }
    };

    const handlePrev = () => {
      if (currentPage > 1) {
        navigateToPage(currentPage - 1);
      }
    };

    return (
      <PaginationContainer>
        <Button disabled={currentPage === 1} onClick={handlePrev}>
          ← Previous
        </Button>
        <Button disabled={currentPage === totalPages || totalPages === 0} onClick={handleNext}>
          Next →
        </Button>
      </PaginationContainer>
    );
  }
);

Pagination.displayName = 'Pagination';
