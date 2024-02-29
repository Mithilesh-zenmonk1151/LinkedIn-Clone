import React from "react";
// import { Box,Button, Typography } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
import "./suggession.css"
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

const SuggestionCard = ({ profileImage, name,position,profile,handleOnClick}) => {
  return (
    // <Box>
    //   <Card sx={{ width: "250px",  }}>
    //     <CardContent sx={{
    //       display:"flex",
    //       flexDirection:"column",
    //       justifyContent:"center",
    //       alignItems:"center",
    //       gap:"10px"

    //     }}>
    //      <Box sx={{bgcolor:"red",
    //      height:"20px"

    //      }}>
    //      <Avatar alt="Remy Sharp" src={profileImage} />
    //      </Box>
    //       <Typography variant="body2" color="text.secondary">
      //       {name}
      //     </Typography>
      //     <Typography>{body}</Typography>

      //     <Typography>{mutual}mutual connections</Typography>
      //     <Button className="coonect-btn" sx={{
      //       border:"1px solid #1E90FF",
      //       width:"170px",
      //       borderRadius:"20px",
      //       color:"#1E90FF",
      //       fontWeight:500

      //     }} onClick={handleOnClick} >Connect</Button>
      //   </CardContent>
      // </Card>
    // </Box>
    //fdgdff
    <Paper sx={{width:'184px',height:'max-content' ,backgroundColor:'#FFFFFF',borderRadius:"10px","&:hover":{boxShadow:6}  }} className='papper'  elevation={'1'}>
        <Stack  flexDirection={'column'} sx={{width:'184px',height:'max-content', cursor:'pointer' ,backgroundColor:'#FFFFFF',borderRadius:"10px"}} >
    <Stack flexDirection={'column'} alignItems={'center'} >
         <Box  > <img src={profileImage} alt='' style={{width:'184px' , height:'62px' ,borderRadius:10, borderBottomLeftRadius:0 , borderBottomRightRadius:0 ,background:'skyblue' }}></img></Box>
       
         <Avatar alt='' src='' sx={{height:'104px' , width:'104px', mt:'-52px', }}/>
    </Stack >
    <Stack flexDirection={'column'} sx={{m:0 ,pb:1.5,pl:'12px', pr:'12px',justifyContent:'center', alignItems:'center' }}>
        <Typography  fontSize={'16px'} >mithles{name}</Typography>
        <Typography  fontSize={'14px'} textAlign={'center'} color={'#999999'}>Software developer at Zenmonk {position} </Typography>

        <Typography mt={'12px'} fontSize={'12px'} color={'#999999'} textAlign={'center'} >{profile}</Typography>
        <Button variant='outlined' onClick={handleOnClick} sx={{textTransform:'none',fontWeight:'550', fontSize:'16px' ,borderRadius:'30px',p:'0',display:'flex', gap:'5px' , mt:'12px', width:'100%'}}> <PersonAddAltRoundedIcon/> Connect</Button>

   
    </Stack>
  

</Stack>
</Paper>
  )
  ;
};

export default SuggestionCard;
