import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../slices/postAction.slice";
import Box from "@mui/material/Box";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  const Posts = useSelector((state) => state.content.posts);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);
  // const success= useSelector((state)=> state.content.success)
  if (isLoading) {
    return "Loading....";
  }
  if (error) {
    return error;
  }

  return (
    <div>
      {Posts.map((post) => {
        <Box>
          <p>{post.title}</p>
          <p>{post.body}</p>
          {/* <img src={post.src} alt={post.title} /> */}
        </Box>;
      })}
    </div>
  );
};

export default Posts;
