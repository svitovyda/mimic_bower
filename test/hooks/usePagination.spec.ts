import { usePagination } from '../../src/hooks/usePagination';
import { act, renderHook, waitFor } from '@testing-library/react';

describe('usePagination', () => {
  it('initializes with correct initial state', () => {
    let data: any[] = [];
    const { result } = renderHook(() => usePagination(data));

    const [state, setPage] = result.current;

    expect(state).toEqual({ currentPage: 1, totalPages: 0 });
    expect(typeof setPage).toBe('function');
  });

  it('handles new data with 4 pages', () => {
    let data: any[] = Array(18);
    const { result } = renderHook(() => usePagination(data));
    const [state] = result.current;
    expect(state).toEqual({ currentPage: 1, totalPages: 4 });
  });

  it('handles new data with 10 pages', () => {
    let data: any[] = Array(50);
    const { result } = renderHook(() => usePagination(data));
    const [state] = result.current;
    expect(state).toEqual({ currentPage: 1, totalPages: 10 });
  });

  it('paginates to valid current page', async () => {
    let data: any[] = Array(50);
    const { result } = renderHook(() => usePagination(data));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setPage] = result.current;

    act(() => {
      setPage(5);
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual({ currentPage: 5, totalPages: 10 });
    });

    act(() => {
      setPage(10);
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual({ currentPage: 10, totalPages: 10 });
    });

    act(() => {
      setPage(1);
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual({ currentPage: 1, totalPages: 10 });
    });
  });
});
