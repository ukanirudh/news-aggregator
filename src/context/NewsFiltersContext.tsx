import dayjs from 'dayjs';
import { useContext, createContext, ReactElement, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { NewsDataSource } from 'src/contants';
import { DATE_FORMATTER_FOR_SOURCE } from 'src/utils';

type DateFilter = {fromDate: string, toDate: string};

interface NewsFiltersProviderData {
  setSelectedSource: Dispatch<SetStateAction<NewsDataSource>>;
  selectedSource: NewsDataSource;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedQuery: string;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setFilteredDate: Dispatch<SetStateAction<DateFilter>>;
  dateFilter: DateFilter;
}

interface NewsFiltersProviderProps {
  children: ReactNode
}

const FiltersContext = createContext<NewsFiltersProviderData>({
  setSelectedSource: () => {},
  selectedSource: NewsDataSource.GUARDIAN,
  setSearchQuery: () => {},
  selectedQuery: '',
  setCurrentPage: () => {},
  currentPage: 0,
  setFilteredDate: () => {},
  dateFilter: {fromDate: '', toDate: ''}
});

export const useNewsFilters = () => useContext<NewsFiltersProviderData>(FiltersContext);

const NewsFiltersProvider = ({ children }: NewsFiltersProviderProps): ReactElement => {
  const [ selectedSource, setSelectedSource ] = useState<NewsDataSource>(NewsDataSource.GUARDIAN);
  const [ selectedQuery, setSearchQuery ] = useState<string>('');
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ dateFilter, setFilteredDate ] = useState<DateFilter>({fromDate: dayjs(new Date()).format(DATE_FORMATTER_FOR_SOURCE[NewsDataSource.GUARDIAN]), toDate: ''});

  return (
    <FiltersContext.Provider value={{
      selectedSource,
      setSelectedSource,
      selectedQuery,
      setSearchQuery,
      currentPage,
      setCurrentPage,
      dateFilter,
      setFilteredDate
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

export default NewsFiltersProvider;