import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ReactElement } from 'react';
import { useNewsFilters } from 'src/context/NewsFiltersContext';
import { DATE_FORMATTER_FOR_SOURCE } from 'src/utils';

const DateFilters = (): ReactElement => {
  const { setFilteredDate, selectedSource } = useNewsFilters();
  return (
    <>
        <DatePicker
          label="From Date"
          format='YYYY-MM-DD'
          defaultValue={dayjs(new Date())}
          onChange={(newValue) => {
            const fromDate = newValue?.format(DATE_FORMATTER_FOR_SOURCE[selectedSource])
            if (fromDate) {
              setFilteredDate((prev) => ({...prev, fromDate}));
            }
          }}
        />
        <DatePicker
          label="To Date"
          format='YYYY-MM-DD'
          onChange={(newValue) => {
            const toDate = newValue?.format(DATE_FORMATTER_FOR_SOURCE[selectedSource])
            if (toDate) {
              setFilteredDate((prev) => ({...prev, toDate}));
            }
          }}
        />
    </>
  )
}

export default DateFilters;