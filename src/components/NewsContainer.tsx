import React, { ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import NewsList from 'src/components/NewsList';
import Filters from 'src/components/Filters';
import NewsFiltersProvider from 'src/context/NewsFiltersContext';
import ResultsSummary from 'src/components/ResultsSummary';

const NewsContainer = (): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NewsFiltersProvider>
        <Filters />
        <ResultsSummary />
        <NewsList />
      </NewsFiltersProvider>
    </LocalizationProvider>
  )
}

export default NewsContainer;