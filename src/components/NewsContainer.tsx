import React, { ReactElement } from 'react';
import NewsList from 'src/components/NewsList';
import Filters from 'src/components/Filters';
import NewsFiltersProvider from 'src/context/NewsFiltersContext';
import ResultsSummary from 'src/components/ResultsSummary';

const NewsContainer = (): ReactElement => {
  return (
    <NewsFiltersProvider>
      <Filters />
      <ResultsSummary />
      <NewsList />
    </NewsFiltersProvider>
  )
}

export default NewsContainer;