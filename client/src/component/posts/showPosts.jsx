import { Box, Stack } from "@mui/material";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/post.slice";

const ShowPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts?.content);
  const loading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  console.log("empty",posts);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }
  return (
    <Stack>
      {posts?.map((items) => {
           <Box>
               <Box>{items.title}  </Box>
            <Box>{items.body}</Box>
            <Box>{items.createdAt}</Box>
            <Box>{items.updatedAt}</Box>
           </Box>
           
          
      })
      }
    </Stack>
  );
};
export default ShowPosts;
