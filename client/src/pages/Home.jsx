import { Box } from "@mui/material";
import React from "react";
import ShowPosts from "../component/posts/ShowPosts";
import Profile from "../component/profile/Profile";
import LinkedInNews from "../component/linkedInNews/LinkedInNews";
import DialogBox from "../component/dialogBox/DialogBox";
const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f1f3f4",
        paddingLeft: "30px",
        justifyContent: "center",
        marginTop:"60px"
      }}
    >
      <Profile />
      <ShowPosts />
      <LinkedInNews />
    </Box>
  );
};

export default Home;
