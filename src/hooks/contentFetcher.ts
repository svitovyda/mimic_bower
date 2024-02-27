import type { Package } from "../models/Package";
import { ApiService } from "../services/ApiServise";
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

export const useContentFetcher = (initialQuery: string): [FetchState, React.Dispatch<React.SetStateAction<string>>] => {
  const [query, setQuery] = React.useState<string>(initialQuery);

  const [state, dispatch] = React.useReducer(dataFetchReducer, { isLoading: true, isError: false, data: [] });

  React.useEffect(() => {
    var didUnmount = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      if (query.length > 0) {
        try {
          const result = await ApiService.searchBowerModules(query);
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
  }, [query]);

  return [state, setQuery];
};
