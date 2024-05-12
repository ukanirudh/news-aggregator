import TextField from '@mui/material/TextField';
import { ReactElement } from 'react';
import { useNewsFilters } from 'src/context/NewsFiltersContext';

const SearchBox = (): ReactElement => {
  const { setSearchQuery } = useNewsFilters();

  return (
    <TextField
      label="Search"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
      }}
    />
  );
}

export default SearchBox;