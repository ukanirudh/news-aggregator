import { ReactElement } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNewsFilters } from "src/context/NewsFiltersContext";

const ResultsSummary = (): ReactElement => {
  const { dateFilter, selectedQuery, currentPage } = useNewsFilters();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={4}
      p={2}
    >
      <Typography variant="body2" color="text.secondary">
        Currently viewing results for 
        <span style={{ fontWeight: 'bold' }}>page: {currentPage}</span> 
        {selectedQuery && <>& <span style={{ fontWeight: 'bold' }}>query: {selectedQuery}</span></>}
        {dateFilter.fromDate && <>& <span style={{ fontWeight: 'bold' }}>From Date: {dateFilter.fromDate}</span></>}
        {dateFilter.toDate && <>& <span style={{ fontWeight: 'bold' }}>To Date: {dateFilter.toDate}</span></>}
      </Typography>
    </Box>
  )
}

export default ResultsSummary;