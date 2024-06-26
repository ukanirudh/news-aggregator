import { useCallback, useState } from 'react';
import { NewsDataSource } from 'src/contants';
import { DATE_QUERY_KEY } from 'src/utils';

const APIS_FOR_QUERY = {
  [NewsDataSource.NEWS_API]: 'https://newsapi.org/v2/everything?apiKey=92a422030b2d40dc8694680e2a9bd82f&pageSize=10',
  [NewsDataSource.GUARDIAN]: '',
  [NewsDataSource.NY_TIMES]: ''
}

const APIS = {
  [NewsDataSource.NEWS_API]: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=92a422030b2d40dc8694680e2a9bd82f',
  [NewsDataSource.GUARDIAN]: 'https://content.guardianapis.com/search?api-key=b5db011a-2649-4885-89c5-180608ef392e&show-fields=headline,publication,body,thumbnail',
  [NewsDataSource.NY_TIMES]: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=prxP1lLIwMfOFUHe54AScvsrCZMG3qvs'
}

type queryParams = {
  searchStr?: string;
  fromDate?: string;
  toDate?: string;
  currentPage: number
}

interface NewsSearchHook {
  newsResults: any;
  isLoading: boolean;
  fetchNewsData: (selectedDataSource: NewsDataSource, queryParams: queryParams) => Promise<void>
}

const generateApiWithQuery = (selectedDataSource: NewsDataSource, { searchStr, currentPage, fromDate, toDate }: queryParams): string => {
  let fetchApi = searchStr ? APIS_FOR_QUERY[selectedDataSource] ? APIS_FOR_QUERY[selectedDataSource] : APIS[selectedDataSource] : APIS[selectedDataSource];
  if (fromDate) {
    fetchApi = `${fetchApi}&${DATE_QUERY_KEY[selectedDataSource].from}=${fromDate}`
  }

  if (toDate) {
    fetchApi = `${fetchApi}&${DATE_QUERY_KEY[selectedDataSource].to}=${toDate}`
  }

  return `${fetchApi}&page=${currentPage}&q=${searchStr}`;
}

const useNewsSearch = (): NewsSearchHook => {
  const [newsResults, setNewsResults] = useState(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchNewsData = useCallback(async (selectedDataSource: NewsDataSource, allParams: queryParams) => {
    setIsLoading(true);
    try {
      const newApiWithQuery = generateApiWithQuery(selectedDataSource, allParams);
      const responseData = await fetch(newApiWithQuery);
      if (responseData.ok) {
        const newsResponse = await responseData.json();
        // tobe removed later
        if (selectedDataSource === NewsDataSource.GUARDIAN || selectedDataSource === NewsDataSource.NY_TIMES) {
          setNewsResults(newsResponse.response);
        } else {
          setNewsResults(newsResponse);
        }
      } else {
        throw new Error('failed');
      }
    } catch (e) {
      console.log("error:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);


  return { fetchNewsData, newsResults, isLoading };
}

export default useNewsSearch;