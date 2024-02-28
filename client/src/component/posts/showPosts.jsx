import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../slices/post.slice";
import Posts from "../postCard/PostCard";
import DialogBox from "../dialogBox/DialogBox";
import { useNavigate } from "react-router";

const ShowPosts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  
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
              User details
            </Stack>

            <Box className="side-profile">News</Box>
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
              <Stack
                gap={12}
                flexDirection={"row"}
                height={"100%"}
                alignItems={"flex-end"}
                justifyContent={"center"}
              >
                <Button className="create-post-btns">Media</Button>
                <Button className="create-post-btns">Event</Button>
                <Button className="create-post-btns">Write Article</Button>
              </Stack>
            </Stack>
            <Divider />
            {posts.posts?.map((post) => {
              return (
                <Stack className="display-posts">
                  <Posts title={post.title} body={post.body} />
                  
                </Stack>
              );
            })}
          </Stack>

          <Box className="home-news-section">News</Box>
        </Stack>
      </Box>
    </Stack>
  );
};
export default ShowPosts;
