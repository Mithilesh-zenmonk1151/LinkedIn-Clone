import {
  Avatar,
  Box,
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import io from "socket.io-client";
const ChatComponent = () => {
  const socket = useMemo(()=>io("http://localhost:4000"),[]);

  const [sendMessage, setSendMessage] = useState("");
  const handleOnSubmit = (e) => {
    e.preventdefault();
  };
  const [messages, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const [socketConnected, setSocketConnected] = useState(false);
  // const { user, selectedChat, setSelectedChat } = ChatState();
  const dispatch = useDispatch();
  const typinghandler = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessages = (event) => {
    if (event.key === "Enter" && newMessage) {
    }
  };
  useEffect(() => {
    // socket = io("dispach");
    // socket.emit("setup", user);
    socket.on("connection", () => setSocketConnected(true));
  }, []);
  useEffect(() => {
    //fetchmessage
    // selecttedChatCompare = selectedChat;
  }, []);

  return (
    <Stack>
      <Box>
        <Avatar></Avatar>
        <Box>
          <Typography>userName</Typography> <Typography>(she/her)</Typography>{" "}
          <Typography>5:25PM</Typography>
        </Box>
        <Typography> Incoming message</Typography>
      </Box>

      <Box>
        {loading ? (
          <CircularProgress
            size="xl"
            sx={{
              width: "20px",
              height: "20px",
              margin: "auto",
              alignSelf: "center",
            }}
          />
        ) : (
          <></>
        )}
      </Box>

      <FormControl onKeyDown={sendMessages} isRequired mt={3}>
        <TextField
          placeholder="enter a message"
          onChange={typinghandler}
          value={newMessage}
        ></TextField>
      </FormControl>
    </Stack>
  );
};

export default ChatComponent;
