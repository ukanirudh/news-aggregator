import { ReactElement } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNewsFilters } from "src/context/NewsFiltersContext";

const ResultsSummary = (): ReactElement => {
  const { selectedSource, selectedQuery, currentPage } = useNewsFilters();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={4}
      p={2}
    >
      <Typography variant="body2" color="text.secondary">
        Currently viewing results for  <span style={{ fontWeight: 'bold' }}>page: {currentPage}</span> & <span style={{ fontWeight: 'bold' }}>query: {selectedQuery}</span>
      </Typography>
    </Box>
  )
}

export default ResultsSummary;