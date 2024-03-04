import { Box ,Avatar,Typography,Stack} from '@mui/material'
import React from 'react'

const TabOne = () => {
  return (
    <Box>
    <Stack sx={{

}}>
<Avatar  sx={{
  height:"50px",
  width:"50px",
}}></Avatar>
  <Box  sx={{
      display:"flex",
      gap:"60px",
      position:"absolute",
      left:"195px",
      top:"220px"

  }} >
  <Typography sx={{

  }}>userName</Typography>
   <Typography>12:21PM</Typography>
  </Box>
 <Box sx={{
  position:"relative",
  bottom:"35px"
 }}>
 <Typography variant='p' sx={{
      fontSize:"13px"
  }}>LinkedIn offer <Typography variant='p' sx={{ fontSize:"10px",
  }}>Hi there <br/>  UserName ! My name is...</Typography> </Typography> 
 </Box>
</Stack>
      
    </Box>
  )
}

export default TabOne
