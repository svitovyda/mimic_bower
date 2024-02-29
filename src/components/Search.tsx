import { Input, InputContainer } from '../styles/Search';
import configJson from 'config';
import debounce from 'debounce';
import * as React from 'react';

export interface SearchProps {
  onQueryChanged: (newQuery: string) => void;
}

const MinAcceptable = configJson.minimumSearchQueryLength || 3;
const DebounseInterval = configJson.searchInputDebounse || 1000;

export const Search: React.FC<SearchProps> = React.memo(({ onQueryChanged }: SearchProps) => {
  const [query, setQuery] = React.useState<string>('');

  const updateSearchQuery = debounce((value) => {
    if (value.length > MinAcceptable) {
      onQueryChanged(value);
    }
  }, DebounseInterval);

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
    updateSearchQuery(newValue);
  };

  return (
    <InputContainer>
      <Input
        value={query}
        maxLength={100}
        onChange={onQueryChange}
        autoComplete="off"
        type="search"
        placeholder="Search..."
      />
    </InputContainer>
  );
});

Search.displayName = 'Search';
