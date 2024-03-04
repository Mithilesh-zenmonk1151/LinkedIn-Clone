import React from "react";
import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
const ProfileCard = ({ firstName,lastName,connection}) => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "400px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        mt:"30px"
       
      }}
      className="papper"
      elevation={"1"}
    >
      <Stack
        flexDirection={"column"}
        sx={{
          width: "300px",
          height: "400px",
          cursor: "pointer",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
        }}
      >
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box>
            {" "}
            <img
              src=""
              alt=""
              style={{
                width: "300px",
                height: "70px",
                borderRadius: 10,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                background: "#57beeb",
              }}
            ></img> 
          </Box>

          <Avatar
            alt=""
            src=""
            sx={{ height: "100px", width: "104px", mt: "-52px" }}
          />
        </Stack>
        <Stack
          flexDirection={"column"}
          sx={{

            m: 0,
            pb: 1.5,
            pl: "12px",
            pr: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",

            }}>
          <Typography fontSize={"16px"} sx={{
            fontWeight:800,
          }}> {firstName} </Typography>
          <Typography fontSize={"16px"} sx={{
            fontWeight:800,
          }}> {lastName} </Typography>
          <Typography fontSize={"13px"}> Front-end Developer </Typography>
          </Box>
          
          <Box sx={{
            width:"100%",
            bgcolor:"black",
            height:"1px",
            opacity:0.3,
            mt:"10px"
         }}></Box>
          <Box sx={{
            display:"flex",
            // justifyContent: 'space-around', 
            // gap:"50px"
            justifyContent: 'space-between',
            width:"95%",
           
           
           
          }}>
          <Typography
            mt={"12px"}
            fontSize={"13px"}
            color={"#999999"}
            textAlign={"center"}
            sx={{
                fontWeight:"700"
            }}
          >
            Connections
            
          </Typography>
          <Typography
            mt={"12px"}
            fontSize={"12px"}
            color={"#999999"}
            textAlign={"center"}
          >
            {connection}
            
          </Typography>
          </Box>
          <Box sx={{
            width:"95%"
          }}>
          <Typography
           
            fontSize={"12px"}
            color={"#999999"}
           
          sx={{ 
            paddingBottom:"20px"

          }} >
            Grow Your network
            
          </Typography>
          </Box>
         

         <Box sx={{
            width:"95%"
         }}>
         
          
          <Typography
            mt={"12px"}
            fontSize={"12px"}
            color={"#999999"}
           
          >
            Who viewed your profile
            
          </Typography>
         </Box>
         <Box sx={{
            width:"100%",
            bgcolor:"black",
            height:"1px",
            opacity:0.3
         }}></Box>
         <Box sx={{
            display:"flex",
            width:"95%",
            mt:"12px",
            gap:"5px",
            fontSize:"16px",
            fontWeight:"900"
         }}>
            <BookmarkIcon sx={{
                fontSize:"16px",
                mt:"2px"
            }}/>
            <Typography sx={{
                 fontSize:"14px",
                 fontWeight:"700"

            }}>Who viewed your profile</Typography>
         </Box>


        
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProfileCard;
