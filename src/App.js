
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import './App.css';
import FilterTabs from './components/FilterTabs';
import ImageFields from './components/ImageFields';
import InstaFilter from './components/InstaFilter';
import CustomFilter from "./components/CustomFilter"
import { createContext, useState } from 'react';

export const FilterContext = createContext()
function App() {

  const [filter, setFilter] = useState("clickFilter")
  const [filterClass, setFilterClass] = useState("")
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0
  });

  const value = {
    filter,
    setFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter
  }

  return (
    <FilterContext.Provider value={value}>
    <Container sx={{marginTop:"4rem" , marginBottom:"4rem"}} >
      <Box sx={{textAlign:"center" , marginBottom : "3rem"}}>
        <h1>Image Filter</h1>
      </Box>
      <Grid container  spacing={10} >
         <ImageFields/>   
        <Grid item xs={12} md={5}>
        <FilterTabs/>
        {filter === 'clickFilter' ? <InstaFilter /> : <CustomFilter />} 
        </Grid>
      </Grid>
    </Container>
    </FilterContext.Provider>
  );
}

export default App;
