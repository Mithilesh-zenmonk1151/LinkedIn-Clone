import React, { useEffect } from "react";
import ProfileCard from "./profileCard/ProfileCard";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import src from "../../assets/profile.jpeg"
import { getUpdatedUserProfile } from "../../slices/profile.slice";
const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user?._id);
  const profile = useSelector((state) => state.profile.content?.response?.user);
  useEffect(() => {
    dispatch(getUpdatedUserProfile(user));
  }, []);
  const content = useSelector((state) => state.auth.user);
  const connections = content?.connections.length;
  console.log("connection length", connections);
  return (
    <Box>
      <ProfileCard
        firstName={profile?.firstName}
        lastName={content?.lastName}
        connection={content?.connections?.length}
        Image={src}
      />
    </Box>
  );
};

export default Profile;
