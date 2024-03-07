import React from 'react';
import NotificationCard from '../../component/card/NotificationCard';
import { Box } from '@mui/material';

const Notification = () => {
  return (
    <Box sx={{
       
        display:"flex",
        justifyContent:"center",
       
        
        

    }}><Box sx={{
        display:"flex",
        justifyContent:"center"
    }}>
        <NotificationCard/>

    </Box>
        
      
    </Box>
  );
}

export default Notification;
