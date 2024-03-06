import {
  Avatar,
  Box,
  Button,
  Divider,
  InputAdornment,
  InputBase,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "./Message.css";
import React, { useEffect, useState } from "react";
// import Navbar from '../../components/Navbar/Navbar'

import Messages from "../../component/message/Messages";
import MessageCard from "../../component/message/messageCard/MessageCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";

const Message = () => {
  // const dispatch= useDispatch();
  const [conversations, setConversations] = useState("");
  const [socket, setSocket] = useState(null);

  // const socket = useMemo(()=>io("http://localhost:4000"),[]);

  const [reciever, setReciever] = useState({});
  const [message, setMessage] = useState([]);
  const [messages, setMessages]= useState("");

  const getSuggestions = useSelector((state) => state.connections?.content);
  const usr = useSelector((state) => state.auth?.user);

  const userId = useSelector((state) => state.auth?.user?._id);
  const [user, setUser] = useState(usr);

  console.log("user id in message", userId);

  const fetchConversations = async () => {
    const res = await axios.get(`http://localhost:4000/api/message/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const messages = res?.data;
    setConversations(messages);
    console.log(" user messages", messages);

    console.log("conversations data of users", res);
  };

  useEffect(() => {
    fetchConversations();
  }, []);
  // const fetchMessages = async (conversationId) => {
  //   const res = await axios.get(
  //     `http://localhost:4000/api/chats/${conversationId}`,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   useEffect(()=>{
  //     fetchMessages();
  //   },[])
  //   const resData= await res.json();
  //   console.log("resDatta-->", resData);
  //   setMessage(resData)
  // };
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);
  useEffect(() => {
    socket?.emit("addUser", user?.id);
    socket?.on("getUser", (users) => {
      console.log("userss", users);
    });
    socket?.on("getMessage",data=>{
      console.log(data,"this is get message data")
      setMessage(prev=>({
        ...prev,
        message:[...prev.message,{user:data.user,messages:data.massage}]
      }))
    })
  }, [socket]);

  const handleReciever = (data) => {
    console.log(data);
    setReciever(data);
  };
  const sendMessageHandler = async (e) => {
    socket?.emit("sendMessage", {
      senderId: userId,
      recieverId: message?.reciever?.recieverId,
      message,
      conversationId: message?.conversationId,
    });
    const resp = await axios.post("http://localhost:4000/api/chats/message", {
      body: JSON.stringify({
        senderId: userId,
        recieverId: message?.reciever?.recieverId,
        message,
        conversationId: message?.conversationId,
      }),
    });
  };

  return (
    <Box>
      {/* <Box className="home-nav"><Navbar /></Box> */}

      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        gap={3}
        sx={{ marginTop: "20px" }}
      >
        <Box>
          {/* { messages.map((massage)=>{
            
          })} */}
        </Box>
        <Box
          className="main-message-box"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Messages handleReciever={handleReciever} />
          <Divider orientation="vertical" />
          <MessageCard reciever={reciever} socket={socket} />
        </Box>

        <Box className="messages-side-box">
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              marginBottom: "8px",
            }}
          >
            Grow Your Network with Premium
          </Typography>

          <Typography
            sx={{
              marginBottom: "8px",
            }}
          >
            Premium InMail is 4.6x more effective in hearing back than cold
            email.
          </Typography>
          <Button
            variant="contained"
            onClick={sendMessageHandler}
            sx={{
              boxShadow: "none",
              borderRadius: "50px",
              color: "black",
              backgroundColor: "#f8c882",
              textTransform: "none",
              fontWeight: "500",
              padding: "3px 15px",
              fontSize: "18px",
            }}
          >
            Try Premium for free
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Message;
