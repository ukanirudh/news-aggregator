import { ReactElement } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StructuredKeys, keyMapper } from "src/utils";
import { useNewsFilters } from "src/context/NewsFiltersContext";

const NewsCard = ({ cardData }: { cardData: any }): ReactElement => {
  const { selectedSource } = useNewsFilters();
  const keysList = keyMapper[selectedSource];

  const onClick = () => {
    const url  = typeof keysList[StructuredKeys.URL]  === 'string' ? cardData[keysList[StructuredKeys.URL]] : '';
    window.open(url, '_blank')
  }

  return (
    <Card onClick={onClick} raised sx={{
      cursor: 'pointer'
    }}>
      <CardMedia
        component="img"
        alt="image not found"
        height="140"
        image={
          (typeof keysList[StructuredKeys.TITLE_IMG_URL] === 'string' && cardData[keysList[StructuredKeys.TITLE_IMG_URL]]) 
          || (typeof keysList[StructuredKeys.TITLE_IMG_URL] === 'object' && cardData[keysList[StructuredKeys.TITLE_IMG_URL].key][keysList[StructuredKeys.TITLE_IMG_URL].value])
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {typeof keysList[StructuredKeys.HEADLINE] === 'string' && cardData[keysList[StructuredKeys.HEADLINE]]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {typeof keysList[StructuredKeys.PUBLISHED_DATE] === 'string' && new Date(cardData[keysList[StructuredKeys.PUBLISHED_DATE]]).toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          {
            typeof keysList[StructuredKeys.SOURCE] === 'string' && cardData[keysList[StructuredKeys.SOURCE]]
          }
          {
            typeof keysList[StructuredKeys.SOURCE] === 'object' && cardData[keysList[StructuredKeys.SOURCE].key][keysList[StructuredKeys.SOURCE].value]
          }
        </Button>
        <Button size="small">{typeof keysList[StructuredKeys.SECTION_NAME] === 'string' && cardData[keysList[StructuredKeys.SECTION_NAME]]}</Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard;