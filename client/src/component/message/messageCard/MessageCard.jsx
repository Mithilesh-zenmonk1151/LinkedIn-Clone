import React, { useState } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Avatar, Box, Button,  Paper, Stack, TextField, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EditCalendarIcon from "../../../assets/svg/edIT.svg";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { deepOrange} from '@mui/material/colors';
import MessageSearch from "../../common/navbar/navbarComponent/searchComponent/MessageSearch";
import MessageTab from "./messageTab/MessageTab";
const MessageCard = ({ userName, lastName, connection }) => {
  const [search, setSearch]= useState("");
  const [searchResult,setSerchResult]= useState([]);
  const [loading, setLoading]= useState(false);
  const [loadingChat, setLoadingChat]= useState();
  const handleOnSearch =()=>{
    if(!search){
      alert("Please write somthing in searchfield");

    }
  }
  return (
    <Box sx={{
        display:"flex",
        width:"100%",
        justifyContent:"center",
        marginTop:"22px"
        


    }}> 



    <Stack>
      <TextField placeholder="Search by name and email"
       value={search}>

      </TextField>

      <Button onClick={handleOnSearch}></Button>
    </Stack>
    <Box
      
    >
      <Stack
        flexDirection={"column"}
        sx={{
          cursor: "pointer",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          width:"312px",
          border:"1px solid #989898"
        }}
      >     <Box sx={{
        display:"flex",
        justifyContent:"space-between"
      }}> <Typography>
        Messaging 
      </Typography>
           <Box> </Box>   <MoreHorizIcon/> <img src={EditCalendarIcon} alt="edit"/> </Box>
        <Stack flexDirection={"column"} alignItems={"center"}></Stack>
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
          

        
          <Box
            sx={{
              width: "109%",
              bgcolor: "black",
              height: "1px",
              opacity: 0.3,
            }}
          ></Box>
          <Box>
          {/* <Avatar sx={{ bgcolor: deepOrange[500] }} ></Avatar> */}

          </Box>
          <Box
            sx={{
              display: "flex",
              width: "95%",
              mt: "12px",
              gap: "5px",
              fontSize: "16px",
              fontWeight: "900",
            }}
          >
          <MessageSearch/>
           
          </Box>
          <MessageTab/>
        </Stack>
      </Stack>
    </Box>
    <Box sx={{
        height:"100%",
        width:"1px",
        bgcolor:"black",
    }}></Box>
    <Box>
    <Stack sx={{
        width:"468px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        border:"1px solid #989898"
        
    }}>
    <Box sx={{

    }}>
    <Typography>userName{userName}</Typography>
        <Typography variant="p">LinkedIn</Typography>
    </Box>
    <Box sx={{
        display:"flex",

    }}>
    <MoreHorizIcon/>

      <StarBorderIcon/>
    </Box>

    </Stack>
    <Box sx={{
        height:"0.5px",
        width:"100%",
        bgcolor:"1px solid #989898"
    }}></Box>
    </Box>
    </Box>
  );
};

export default MessageCard;
