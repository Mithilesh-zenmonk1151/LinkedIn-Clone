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
    <Stack>
    <SuggestionCard/>
    </Stack>
 


  </Box>
   
  );
}

export default Suggesstions;
