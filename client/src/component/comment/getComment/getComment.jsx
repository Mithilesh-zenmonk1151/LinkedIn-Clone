import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../slices/comment.slice";
import Posts from "../postCard/PostCard";
import DialogBox from "../dialogBox/DialogBox";
import { useNavigate } from "react-router";

const ShowPosts = () => {
    const [comment, setCommment]= useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  const comments = useSelector((state) => state.comments.content);
  const loading = useSelector((state) => state.comments.isLoading);
  const error = useSelector((state) => state.comments.error);
  console.log("empty", posts);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }
  function handleOnClick() {
    console.log("comment wala field is clicked");
  }

  return (
    <Stack flexDirection={"column"} className="Home">
      <Box className="home-nav"></Box>
      <Box className="home-main">
        <Stack
          gap={2.5}
          flexDirection={"row"}
          justifyContent={"center"}
          margin={"30px"}
        >
          <Stack gap={2}>
            <Stack
              className="side-profile"
              justifyContent={"center"}
              alignItems={"center"}
            ></Stack>
          </Stack>

          <Stack>
            <Stack className="AddPost">
              <Stack flexDirection={"row"} gap={1}>
                <Avatar
                  sx={{
                    border: "1px solid #d7d8d6",
                    borderRadius: "100%",
                    width: "45px",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "5px",
                  }}
                  aria-label="recipe"
                >
                  MK
                </Avatar>
                <Box
                  onClick={handleOnClick}
                  sx={{
                    border: "1px solid #d7d8d6",
                    borderRadius: "50px",
                    width: "84%",
                    height: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    paddingLeft: "20px",
                    fontFamily:
                      '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
                    fontWeight: "400",
                    fontSize: "17px",
                  }}
                >
                  <DialogBox />
                </Box>
              </Stack>
            </Stack>
            <Divider />
            {comments.comments?.map((comment) => {
              return (
                <Stack className="display-posts">
                  <Posts title={comment.title} body="" />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Box>
      <form onSubmit={handleOnComment}>
      <Input
                    placeholder="title"
                    inputProps={ariaLabel}
                    value={comment}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Button type="submit"  onChange={(e)=> setCommment(e.target.value)}>comment</Button>

      </form>
    </Stack>
  );
};
export default ShowPosts;
