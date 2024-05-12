import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import NewsContainer from 'src/components/NewsContainer';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Typography variant="h1" gutterBottom align='center'>
        News Aggregator
      </Typography>
      <NewsContainer />
    </div>
  );
}

export default App;
