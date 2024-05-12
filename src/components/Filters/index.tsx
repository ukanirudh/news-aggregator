import { ReactElement, useMemo, useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NewsDataSource } from 'src/contants';
import SearchBox from "src/components/Filters/Search";
import Box from '@mui/material/Box';
import { useNewsFilters } from "src/context/NewsFiltersContext";

const Filters = (): ReactElement => {
  const { selectedSource, setSelectedSource } = useNewsFilters();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelectSource = (event: React.MouseEvent<HTMLElement>,
    source: string) => {
    setSelectedSource(source as NewsDataSource);
    handleClose();
  }

  const dataSourceOptions: Array<string> = useMemo(() => Object.values(NewsDataSource), []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={4}
      p={2}
    >
      <SearchBox />
      <Button
        aria-controls={open ? 'news-data-source' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        onClick={handleClick}
      >
        {selectedSource}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'news-data-source',
        }}
      >
        {
          dataSourceOptions.map((source) => <MenuItem key={source} onClick={(event) => onSelectSource(event, source)}
          >{source}</MenuItem>)
        }
      </Menu>
    </Box>
  )
}

export default Filters;