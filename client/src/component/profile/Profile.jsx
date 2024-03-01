import React, { useEffect } from 'react';
import ProfileCard from './profileCard/ProfileCard';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getUpdatedUserProfile} from "../../slices/profile.slice"

const Profile = () => {
    const dispatch= useDispatch();
    const user= useSelector((state)=>state.auth.user._id)
  
    useEffect(()=>{
        dispatch(getUpdatedUserProfile(user))
       

    },[])
    
    
    const content= useSelector((state)=>state.auth.user);
    console.log("content", content);
    const connections= content?.connections.length;
    console.log("connection length", connections);
    

   
  return (
   <Box>
     <ProfileCard nameBody={content.username} connection={content?.connections.length} />
     

   </Box>
       
      
   
  );
}

export default Profile;
