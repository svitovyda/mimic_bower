import type { Package } from "../models/Package";
import { ApiService, type SortType } from "../services/ApiServise";
import * as React from "react";

type FetchActionType = "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";

export interface FetchState {
  isLoading: boolean;
  isError: boolean;
  data: Package[];
}

interface FetchAction {
  type: FetchActionType;
  payload?: Package[];
}

const dataFetchReducer = (state: FetchState, action: FetchAction): FetchState => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, isError: false, data: action.payload || [] };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

export const useContentFetcher = (
  initialQuery: string
): [
  FetchState,
  React.Dispatch<React.SetStateAction<string>>,
  React.Dispatch<React.SetStateAction<SortType | undefined>>,
] => {
  const [query, setQuery] = React.useState<string>(initialQuery);
  const [sort, setSort] = React.useState<SortType | undefined>();

  const [state, dispatch] = React.useReducer(dataFetchReducer, { isLoading: false, isError: false, data: [] });

  React.useEffect(() => {
    var didUnmount = false;

    const fetchData = async () => {
      if (query.length > 0) {
        dispatch({ type: "FETCH_INIT" });

        try {
          const result = await ApiService.searchBowerModules(query, sort);
          if (!didUnmount) {
            dispatch({ type: "FETCH_SUCCESS", payload: result });
          }
        } catch (error) {
          if (!didUnmount) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      }
    };

    fetchData();

    return () => {
      didUnmount = true;
    };
  }, [query, sort]);

  return [state, setQuery, setSort];
};
