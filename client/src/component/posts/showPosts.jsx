import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/post.slice";
import Posts from "../postCard/PostCard";
import DialogBox from "../dialogBox/DialogBox";
import { useNavigate } from "react-router";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import GetComment from "../comment/getComment/GetComment";
import ArticleIcon from "@mui/icons-material/Article";
import "./post.css";

const ShowPosts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const toggle = (e) => {
    setIsOpen(true);
  };

  const posts = useSelector((state) => state.posts.content);
  const loading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  console.log("empty", posts);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }
  function handleOnClick() {
    console.log("post wala field is clicked");
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
            >
              {/* <Avatar
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
              </Avatar> */}
            </Stack>

            {/* <Box className="side-profile">News</Box> */}
          </Stack>

          <Stack>
            <Stack
              className="AddPost"
              sx={{
                bgcolor: "white",
                height: "116px",
                borderRadius: "10px",
                border: "0.5px solid #B0B0B0",
              }}
            >
              <Stack
                flexDirection={"row"}
                gap={1}
                sx={{
                  mt: "10px",
                }}
              >
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
              <Stack
                gap={12}
                flexDirection={"row"}
                height={"100%"}
                alignItems={"flex-end"}
                justifyContent={"center"}
              >
                <Box
                  sx={{
                    display: "inline",
                  }}
                >
                  <PhotoCameraBackIcon
                    sx={{
                      color: "blue",
                      position: "relative",
                      top: "5px",
                    }}
                  />
                  <Button
                    className="create-post-btns"
                    sx={{
                      color: "black",
                    }}
                  >
                    Media
                  </Button>
                </Box>
                <Box>
                  <CalendarMonthIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                    }}
                  />

                  <Button
                    className="create-post-btns"
                    sx={{
                      color: "black",
                    }}
                  >
                    Event
                  </Button>
                </Box>
                <Box>
                  <ArticleIcon
                    sx={{
                      position: "relative",
                      top: "5px",
                    }}
                  />
                  <Button
                    className="create-post-btns"
                    sx={{
                      color: "black",
                    }}
                  >
                    Write Article
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Divider />
            {posts?.posts?.map((post) => {
              return (
                <Stack
                  className="display-posts"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: "6px",
                  }}
                >
                  <Posts
                    title={post.title}
                    body={post.body}
                    postId={post._id}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
export default ShowPosts;
