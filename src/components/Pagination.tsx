import { PaginationButton } from "../styles/Pagination";
import * as React from "react";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  navigateToPage: (page: number) => void;
}
export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, navigateToPage }: PaginationProps) => {
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
    <div>
      <PaginationButton disabled={currentPage === 1} onClick={handlePrev}>
        ← Previous
      </PaginationButton>
      <PaginationButton disabled={currentPage === totalPages || totalPages === 0} onClick={handleNext}>
        Next →
      </PaginationButton>
    </div>
  );
};
