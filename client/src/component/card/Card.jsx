import React from "react";
import {  Box, Card, CardContent,   Typography } from "@mui/material";

const PostCard = ({title, body}) => {
    
  return (
    <Box>
        <Card sx={{width: '540px', padding: '10px'}}>
      
     
      <CardContent>

      <Typography variant="body2" color="text.secondary">
          <b>Title</b>: {title} <br />
         <b>Body</b>: {body}
       </Typography>

      </CardContent>
        </Card>
    </Box>
  )
}

export default PostCard

