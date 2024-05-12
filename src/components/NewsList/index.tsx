import React, { ReactElement, useEffect, useMemo } from "react";
import useNewsSearch from "src/hooks/useNewsSearch";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useNewsFilters } from "src/context/NewsFiltersContext";
import { API_RESULTS_DATA, StructuredKeys, keyMapper } from "src/utils";
import NewsCard from "src/components/NewsList/NewsCard";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const NewsList = (): ReactElement => {
  const { fetchNewsData, newsResults, isLoading } = useNewsSearch();
  const { selectedSource, selectedQuery, currentPage, dateFilter, setCurrentPage } = useNewsFilters();

  useEffect(() => {
    const { fromDate, toDate } = dateFilter;
    fetchNewsData(selectedSource, { searchStr: selectedQuery, currentPage, fromDate, toDate });
  }, [selectedSource, selectedQuery, currentPage, dateFilter]);

  const newResultsSet: Array<any> = useMemo(() => {
    return newsResults ? newsResults[API_RESULTS_DATA[selectedSource]] ? newsResults[API_RESULTS_DATA[selectedSource]] : [] : [];
  }, [newsResults, selectedSource]);

  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="center"
        spacing={2}
      >
        {
          isLoading ?
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <CircularProgress />
            </Grid> :
            newResultsSet.map((newsData, index) => {
              const keysList = keyMapper[selectedSource];
              let id = '';
              if (keysList[StructuredKeys.ID] === 'string') {
                id = newsData[keysList[StructuredKeys.ID]];
              }

              return (
                <Grid key={newsData?.id} item lg={4} md={6} xs={12}>
                  <NewsCard key={id} cardData={newsData} />
                </Grid>
              )
            })
        }
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{marginTop: '16px'}}
      >
        <ButtonGroup variant="contained">
          <Button disabled={isLoading || currentPage === 1} onClick={() => setCurrentPage((prev) => prev-1)}>Show Previous</Button>
          <Button disabled={isLoading} onClick={() => setCurrentPage((prev) => prev+1)}>Show Next</Button>
        </ButtonGroup>
      </Grid>
    </Container>
  )
}

export default NewsList;