import { Box } from "@mui/material";
import React from "react";
// import Navbar from "../component/common/navbar/navbar";
import ShowPosts from "../component/posts/ShowPosts";
import Profile from "../component/profile/Profile";
const Home = () => {
  return (
    <Box sx={{
      display:"flex",
      bgcolor:"#f1f3f4",
      paddingLeft:"30px"

    }}>
      <Profile/>
      <ShowPosts />
    </Box>
  );
};

export default Home;
