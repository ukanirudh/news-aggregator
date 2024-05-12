import { useContext, createContext, ReactElement, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { NewsDataSource } from 'src/contants';

interface NewsFiltersProviderData {
  setSelectedSource: Dispatch<SetStateAction<NewsDataSource>>;
  selectedSource: NewsDataSource;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  selectedQuery: string;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
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
});

export const useNewsFilters = () => useContext<NewsFiltersProviderData>(FiltersContext);

const NewsFiltersProvider = ({ children }: NewsFiltersProviderProps): ReactElement => {
  const [ selectedSource, setSelectedSource ] = useState<NewsDataSource>(NewsDataSource.GUARDIAN);
  const [ selectedQuery, setSearchQuery ] = useState<string>('');
  const [ currentPage, setCurrentPage ] = useState<number>(1);

  return (
    <FiltersContext.Provider value={{
      selectedSource,
      setSelectedSource,
      selectedQuery,
      setSearchQuery,
      currentPage,
      setCurrentPage
    }}>
      {children}
    </FiltersContext.Provider>
  )
}

export default NewsFiltersProvider;