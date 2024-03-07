import { Box, Button, Divider, Typography, Stack } from "@mui/material";
import "./Message.css";
import React, { useEffect, useRef, useState } from "react";
// import Navbar from '../../components/Navbar/Navbar'

import Messages from "../../component/message/Messages";
import MessageCard from "../../component/message/messageCard/MessageCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import Input from "../../component/Input/Input";

const Message = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const messageRef = useRef(null);
  const usr = useSelector((state) => state.auth?.user);
  const [receiverId, setReceiverId]= useState("");
  const [open, setOpen]= useState(false);

  const userId = useSelector((state) => state.auth?.user?._id);
  const [user, setUser] = useState(usr);
  const hansdleOnClickEmail = (receiverId) => {
    console.log(`clicked on ${receiverId}`);
      setReceiverId(receiverId);
      setOpen(true);
  };
  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  useEffect(() => {
    socket?.emit("addUser", receiverId);
    console.log("message user Id", userId);
    socket?.on("getUsers", (users) => {
      console.log("activeUsers ghghghg:>> ", users);
    });
    socket?.on("getMessage", (data) => {
      setMessages((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { user: data.user, message: data.message },
        ],
      }));
    });
  }, [socket]);

  useEffect(() => {
    messageRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages?.messages]);
  useEffect(() => {
    // const loggedInUser = JSON.parse(localStorage.getItem('user:detail'))
    const fetchConversations = async () => {
      const res = await axios.get(
        `http://localhost:4000/api/message/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res?.data;
      setConversations(resData);
    };
    fetchConversations();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:4000/api/users`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.data.userData;
      console.log("response data", resData);
      setUsers(resData);
    };
    fetchUsers();
  }, []);
 
  console.log("ReceverId",receiverId)
  console.log("userId",userId)
  // console.log("receiver_id", receiver_id)

  const fetchMessages = async (conversationId,receiver) => {

    const res = await axios.get(
      `http://localhost:4000/api/chats/${conversationId}?senderId=${userId}&&receiverId=${receiverId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await res.data;
    console.log("RESPONSE FROM GET MASX",resData);
  
    console.log("conversationId", conversationId)

    setMessages({ messages: resData, receiver, conversationId });
  };
  const sendMessage = async (e) => {
    setMessage("");
    socket?.emit("sendMessage", {
      senderId: userId,
      receiverId:receiverId,
      message,
      conversationId: messages?.conversationId,
    });

    const res = await axios.post(`http://localhost:4000/api/chats/message`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: ({
        conversationId: messages?.conversationId,
        senderId: userId,
        message,
        receiverId: messages?.receiver?.receiverId,
      }),
    });
    // console.log("Body", body);
  };
 
  return (
    <Box>
      // {/* <Box className="home-nav"><Navbar /></Box> */}
      {/* <Stack */}
      {/* //     flexDirection={"row"} */}
      {/* //     justifyContent={"center"} */}
      {/* //     gap={3} */}
      {/* //     sx={{ marginTop: "20px" }} */}
      {/* //   > */}
      {/* //     <Box> */}
      //{" "}
      {/* { messages.map((massage)=>{
            
    //       })} */}
      {/* //     </Box> */}
      {/* //     <Box */}
      {/* // className="main-message-box" */}
      {/* //       sx={{ display: "flex", flexDirection: "row" }} */}
      {/* //     >
    //       {/* <Messages handleReciever={handleReciever} /> */}
      {/* //       <Divider orientation="vertical" />
    //       <MessageCard reciever={reciever} socket={socket} /> */}
      {/* </Box>  */}
      {/* //     <Box className="messages-side-box">
    //       <Typography */}
      {/* //         sx={{ */}
      {/* //           fontSize: "18px",
    //           fontWeight: "500",
    //           marginBottom: "8px",
    //         }}
    //       >
    //         Grow Your Network with Premium
    //       </Typography> */}
      {/* //       <Typography */}
      {/* //         sx={{
    //           marginBottom: "8px",
    //         }}
    //       >
    //         Premium InMail is 4.6x more effective in hearing back than cold
    //         email.
    //       </Typography> */}
      {/* //       <Button */}
      {/* //         variant="contained"
    //         onClick={sendMessage}
    //         sx={{ */}
      {/* //           boxShadow: "none",
    //           borderRadius: "50px",
    //           color: "black",
    //           backgroundColor: "#f8c882",
    //           textTransform: "none",
    //           fontWeight: "500",
    //           padding: "3px 15px",
    //           fontSize: "18px",
    //         }}
    //       >
    //         Try Premium for free
    //       </Button> */}
      {/* //     </Box> */}
      {/* //   </Stack> */}
      {/* //demo conversion */}
      <Box>
        {conversations?.length > 0 ? (
          conversations?.map(({ conversationId, user }) => {
            return (
              <Box
                className=" "
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 8,
                  borderBottom: "1px solid #ccc",
                }}
              >
                {/* Your content here */}
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => fetchMessages(conversationId, user)}
                >
                  {/* <Box><img src={Img1} className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary" /></Box> */}
                  <Box
                    className=""
                    sx={{
                      ml: "6px",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "1.25rem", fontWeight: "bold" }}
                    >
                      {user?.fullName}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "0.875rem",
                        fontWeight: 300,
                        color: "#4b5563",
                      }}
                    >
                      {user?.email}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })
        ) : (
          <Box
            sx={{
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginTop: 24,
            }}
          >
            No Conversations
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {messages?.receiver?.fullName && (
          <Box
            sx={{
              width: "75%",
              backgroundColor: "secondary",
              height: "80px",
              marginTop: 14,
              borderRadius: "40px",
              display: "flex",
              alignItems: "center",
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            {/* <{ sx: { marginLeft: 6, marginRight: 'auto' } }
Box className='cursor-pointer'><img src={Img1} width={60} height={60} className="rounded-full" /></> */}
            <Box sx={{ marginLeft: 6, marginRight: "auto" }}>
              <Typography variant="h3" sx={{ fontSize: "1.25rem" }}>
                {messages?.receiver?.fullName}
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "0.875rem", fontWeight: 300, color: "#4b5563" }}
              >
                {messages?.receiver?.email}
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-phone-outgoing"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <line x1="15" y1="9" x2="20" y2="4" />
                <polyline points="16 4 20 4 20 8" />
              </svg>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          height: "75%",
          width: "100%",
          overflow: "scroll",
          boxShadow: "sm",
        }}
      >
        <Box className="" sx={{ p: 14 }}>
          {messages?.messages?.length > 0 ? (
            messages?.messages?.map(({ message, user: { id } = {} }) => {
              return (
                <>
                  <Box
                    className={`max-w-[40%] rounded-b-xl p-4 mb-6 ${
                      id === user?.id
                        ? "bg-primary text-white rounded-tl-xl ml-auto"
                        : "bg-secondary rounded-tr-xl"
                    } `}
                  >
                    {message}
                  </Box>
                  <Box ref={messageRef}></Box>
                </>
              );
            })
          ) : (
            <Box className="text-center text-lg font-semibold mt-24">
              No Messages or No Conversation Selected
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        {open && (
          <Box className="p-14 w-full flex items-center">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[75%]"
              inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"
            />
            <Box
              className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${
                !message && "pointer-events-none"
              }`}
              onClick={() => sendMessage()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-send"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </Box>
            <Box
              className={`ml-4 p-2 cursor-pointer bg-light rounded-full ${
                !message && "pointer-events-none"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-plus"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
            </Box>
          </Box>
        )}
      </Box>
      {users?.length > 0 ? (
        users?.map((user) => {
          console.log("user Data",user)
          return (
            <Box className="flex items-center py-8 border-b border-b-gray-300">
              <Box
                className="cursor-pointer flex items-center"
                onClick={() => fetchMessages("new", user)}
              >
                {/* <Box><img src={Img1} className="w-[60px] h-[60px] rounded-full p-[2px] border border-primary" /></Box> */}
                <Box className="ml-6">
                  <h3 className="text-lg font-semibold">{user?.firstName}</h3>
                  <p
                    className="text-sm font-light text-gray-600"
                    onClick={() => hansdleOnClickEmail(user?.userId)}
                  >
                    {user?.user?.email}
                    {/* {user?.userId} */}
                  </p>
                </Box>
              </Box>
            </Box>
          );
        })
      ) : (
        <Box className="text-center text-lg font-semibold mt-24">
          No Conversations
        </Box>
      )}
    </Box>
  );
};
export default Message;
