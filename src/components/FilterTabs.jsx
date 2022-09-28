import { Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState , useContext} from 'react'
import { FilterContext } from '../App'




const FilterTabs = () => {

 const {filter, setFilter,setFilterClass} = useContext(FilterContext)


 const handleChange = (e,newValue) => {
  setFilter(newValue ,e)
  if(newValue === "customFilter") {
    setFilterClass("")
  }
 }



  return (
    <Box sx={{marginBottom: "2rem"}}>
        <Tabs
        value = {filter}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor='secondary'
        >
            <Tab value="clickFilter" label="Instagram Filter" />
            <Tab value="customFilter" label="Custom Filter" />
        </Tabs>
    </Box>
  )
}

export default FilterTabs