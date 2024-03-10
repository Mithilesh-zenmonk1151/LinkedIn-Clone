
import * as React from 'react';

import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { socket } from "../../../utils/socket.js";
import { useDispatch } from 'react-redux';
import { fetchMessageUser } from "../../../slices/message.slice";





export default function MessageCard({data, setUser}) { 
  const dispatch = useDispatch()
  const handleRoomSelect = (id) => {
    setUser(data)
  console.log('id: ', id);

  // Joining the socket room
  socket.emit('joinRoom', id);
  dispatch(fetchMessageUser(id))
};
   console.log('data of', data)
  return (
  
      <Box onClick={()=>handleRoomSelect(data?._id)} sx={{ width: '100%' , cursor:'pointer' }}    >
     
    
      
     <Box sx={{height:'92px', width:"100%",  boxSizing:"border-box", display:"flex", alignItems:"center"}}>
       <Avatar sx={{width:"56px", height:"56px" , ml:'8px'}}/>
       <Box sx={{pt:'12px', pb:"12px", pl:"8px", pr:"8px", width:"100%", boxSizing:"border-box"}}>
         <Box sx={{display:'flex', justifyContent:"space-between"}}>
           <Box sx={{lineHeight:"24px", fontSize:"16px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.9)"}}>{data?.ParticipantsId[0]?.name}</Box>
           
           <Box sx={{fontSize:"15px"}}>Date</Box>
         </Box>
         <Box sx={{lineHeight:"20px", fontSize:"14px", fontWeight:"400", fontStyle:"normal", color:"rgba(0,0,0,0.6)"}}>
          Hi How are u?
         </Box>
       </Box>
     </Box>
     </Box>
 
       
     
      
   
  );
}