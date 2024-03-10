import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MessageCard from "../../component/card/messageCard/MessageCard";
import TuneIcon from "@mui/icons-material/Tune";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifIcon from "@mui/icons-material/Gif";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomUser } from "../../slices/room.slice.js";
import { socket } from "../../utils/socket.js";
import MessageShowCard from "../../component/card/messageCard/MessageShowCard.jsx";
import { addNewMessages } from "../../slices/message.slice.js";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Messages() {
  const checkscroll = useRef(null);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [value, setValue] = useState(0);
  const [messageInput, setMessageInput] = useState("");
  const loggedUser = useSelector((state) => state.auth?.user);
  const messagedata = useSelector((state) => state.message?.messageData);
  console.log("messagedata: ", messagedata);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const roomUser = useSelector((state) => state.room?.roomdata);

  useEffect(() => {
    dispatch(fetchRoomUser(1));
  }, [dispatch]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    // Emitting the message to the server
    socket.emit("sendMessage", {
      roomId: user?._id,
      message: messageInput,
      senderId: loggedUser?._id,
    });

    // Clearing the message input
    setMessageInput("");
  };
  useEffect(() => {
    checkscroll.current.scrollIntoView({ behavior: "smooth" });
  }, [messagedata]);
  useEffect(() => {
    socket.connect();
    socket.on("connection ", () => {
      console.log("Connected to Socket.IO server");
    });
    socket.on("message", (data) => {
      console.log("Received message:", data);
      dispatch(addNewMessages(data));
    });

    return () => {
      socket.off("connection");
      socket.off("message");
      socket.disconnect();
    };
  }, []);

  return (
    <Stack flexDirection={"column"} gap={"20px"} 
    marginTop={"80px"}>
      <Stack margin={"auto"} flexDirection={"row"}>
        <Box
          sx={{
            width: "313px",
            border: "1px solid #e8e8e8",
            p: "0",
            backgroundColor: "white",
            height: "730px",
          }}
        >
          <Box
            sx={{
              height: "48px",
              width: "100%",
              border: "1px solid #e8e8e8",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ pl: "16px", pr: "16px" }}>Messaging</Typography>
            <Box sx={{ mr: "8px", display: "flex" }}>
              <IconButton sx={{ width: "40px" }}>
                <MoreHorizOutlinedIcon />
              </IconButton>
              <IconButton sx={{ width: "40px" }}>
                <ModeEditOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputBase
              startAdornment={
                <SearchIcon
                  sx={{
                    color: "black",
                    paddingLeft: "10px",
                    paddingRight: "8px",
                  }}
                />
              }
              endAdornment={
                <TuneIcon
                  sx={{
                    color: "black",
                    paddingLeft: "10px",
                    paddingRight: "8px",
                  }}
                />
              }
              placeholder="Search messages"
              sx={{
                border: "1px Solid #EDF2F9",
                borderRadius: "4px",
                width: "100%",
                fontSize: "14px",
                fontWeight: "400",
                color: "black",
                backgroundColor: "#EDF2F9",
                "&:hover": {
                  border: "1px solid black",
                },
                "&:focus": {
                  border: "1px solid black",
                },
              }}
            />
          </FormControl>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="basic tabs example"
              textColor="green"
            >
              <Tab
                sx={{ textTransform: "none" }}
                label="Focused"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ textTransform: "none" }}
                label="Other"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          {Object.values(roomUser)?.map((room) => (
            <MessageCard data={room} key={room?._id} setUser={setUser} />
          ))}
        </Box>

        {/* next component */}
        <Box
          sx={{
            width: "419px",
            backgroundColor: "white",
            display: "flex",
            border: "1px solid #e8e8e8",
          }}
        >
          <Box
            sx={{
              width: "100%",
              pl: "12px",
              pr: "12px",
              height: "41px",
              outline: "1px solid #e8e8e8",
              boxSizing: "border-box",
            }}
          >
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ width: "100%", boxSizing: "border-box", padding: "8px" }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {user?.ParticipantsId[0]?.name || "Default"}
              </Typography>

              <Stack flexDirection={"row"} gap={2}>
                <MoreHorizIcon />
                <VideoCallIcon />
                <StarBorderRoundedIcon />
              </Stack>
            </Stack>
            <Divider />

            <Box component={"form"} onSubmit={handleSendMessage}>
              <Stack
                flexDirection={"column"}
                sx={{ height: "55vh", overflow: "scroll" }}
              >
                {messagedata?.map((message) => (
                  <MessageShowCard
                    key={message?._id}
                    data={message}
                    dataroom={user}
                  />
                ))}

                <div ref={checkscroll}></div>
              </Stack>
              <Divider />
              <Stack
                sx={{
                  boxSizing: "border-box",
                  padding: "10px",
                  height: "121px",
                }}
              >
                <InputBase
                  multiline
                  minRows={4}
                  type="text"
                  placeholder="Write a message..."
                  value={messageInput}
                  onChange={(event) => setMessageInput(event.target.value)}
                  sx={{
                    backgroundColor: "#f5f3ee",
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    padding: "30px 10px 10px 10px",
                    fontSize: "14px",
                    height: "100%",
                    overflow: "scroll",
                    WebkitOverflowScrolling: "auto",
                  }}
                />
              </Stack>
              <Divider />

              <Stack
                flexDirection={"row"}
                sx={{
                  pt: "20px",
                  pr: "12px",
                  pl: "12px",
                  boxSizing: "border-box",
                }}
                gap={2}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack flexDirection={"row"} gap={2}>
                  <InsertPhotoIcon />
                  <AttachFileIcon sx={{ rotate: "50deg" }} />
                  <GifIcon />
                  <SentimentSatisfiedIcon />
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      textTransform: "none",
                      borderRadius: "50px",
                      padding: "0",
                    }}
                  >
                    Send
                  </Button>
                  <MoreHorizIcon />
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
export default Messages;
