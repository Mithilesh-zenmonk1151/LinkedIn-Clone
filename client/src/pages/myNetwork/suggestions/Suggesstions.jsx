import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SuggestionCard from '../suggestionsCard/SuggestionCard';
import {getConnectionSuggestions}  from "../../../slices/connections.slice"

const Suggesstions = () => {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getConnectionSuggestions());
    },[dispatch]);
    
  return (<Box>
    <Stack sx={{
      display:"grid",
      
      // justifyContent:"space-evenly",
      // alignItems:"center",
       textAlign:"center",
       alignItems:"center",

      
      
      gridTemplateColumns:" auto auto auto auto auto auto",
      gridGap: "30px"
    }}>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    <SuggestionCard/>
    </Stack>
 


  </Box>
   
  );
}

export default Suggesstions;
