import React from "react";
import { Box, Card, CardContent,Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./suggession.css"

const SuggestionCard = ({ profileImage, name, body ,mutual,handleOnClick}) => {
  return (
    <Box>
      <Card sx={{ width: "250px",  }}>
        <CardContent sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          gap:"10px"

        }}>
         <Box sx={{bgcolor:"red",
         height:"20px"

         }}>
         <Avatar alt="Remy Sharp" src={profileImage} />
         </Box>
          <Typography variant="body2" color="text.secondary">
            {name}
          </Typography>
          <Typography>{body}</Typography>

          <Typography>{mutual}mutual connections</Typography>
          <Button className="coonect-btn" sx={{
            border:"1px solid #1E90FF",
            width:"170px",
            borderRadius:"20px",
            color:"#1E90FF",
            fontWeight:500

          }} onClick={handleOnClick} >Connect</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SuggestionCard;
