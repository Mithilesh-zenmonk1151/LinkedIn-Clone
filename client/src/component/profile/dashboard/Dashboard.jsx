import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getUpdatedUserProfile} from "../../../slices/profile.slice"
import DashboardCard from './dashboardCard/DashBoardCard';
import src from "../../../assets/profile.jpeg"
const Profile = () => {
    const dispatch= useDispatch();
    const user= useSelector((state)=>state.auth.user._id)
  
    useEffect(()=>{
        dispatch(getUpdatedUserProfile(user))
       

    },[])
    
    const profile=useSelector((state) => state.profile?.content?.response?.user);

    console.log("dashboard profile", profile)
    const content= useSelector((state)=>state.auth.user);
    console.log("content", content);
    const connections= content?.connections.length;
    console.log("connection length", connections);
    console.log("dashboard", content)
    

   
  return (
   <Box  sx={{
          



   }}>
     <DashboardCard firstName={profile.firstName} lastName={profile?.lastName} connection={content?.connections?.length} Image={src}  />
     

   </Box>
       
      
   
  );
}

export default Profile;
