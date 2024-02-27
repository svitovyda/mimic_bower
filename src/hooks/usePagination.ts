import configJson from "config";
import * as React from "react";

type PaginationActionType = "PAGINATION_INIT" | "NAVIGATE_TO";

export interface PaginationState {
  currentPage: number;
  totalPages: number;
}

interface PaginationAction {
  type: PaginationActionType;
  dataLengthPayload?: number;
  newCurrentPagePayload?: number;
}

const ItemsPerPage = configJson.searchItemsPageMaxSize;

const paginationReducer = (state: PaginationState, action: PaginationAction): PaginationState => {
  switch (action.type) {
    case "NAVIGATE_TO":
      if (
        !action.newCurrentPagePayload ||
        action.newCurrentPagePayload < 1 ||
        action.newCurrentPagePayload > state.totalPages
      ) {
        return state;
      }
      return { ...state, currentPage: action.newCurrentPagePayload };
    case "PAGINATION_INIT":
      return { ...state, currentPage: 1, totalPages: action.dataLengthPayload || 0 };
    default:
      throw new Error();
  }
};

export const usePagination = (data: any[]): [PaginationState, (page: number) => void] => {
  const [state, dispatch] = React.useReducer(paginationReducer, { currentPage: 1, totalPages: 0 });

  const setCurrentPage = React.useCallback((newCurrentPage: number) => {
    dispatch({ type: "NAVIGATE_TO", newCurrentPagePayload: newCurrentPage });
  }, []);

  React.useEffect(() => {
    dispatch({ type: "PAGINATION_INIT", dataLengthPayload: Math.ceil(data.length / ItemsPerPage) });
  }, [data]);

  return [state, setCurrentPage];
};
