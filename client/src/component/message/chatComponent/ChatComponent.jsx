import { Avatar, Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const ChatComponent = () => {
    const [sendMessage,setSendMessage]= useState("");
    const handleOnSubmit =(e)=>{
        e.preventdefault();
    }
  return (
   <Stack>
   <Box>
    <Avatar></Avatar>
    <Box>
        <Typography>userName</Typography> <Typography>(she/her)</Typography> <Typography>5:25PM</Typography>

    </Box>
    <Typography> Incoming message</Typography>

   </Box>


   <Box>
   <form onSubmit={handleOnSubmit}>
   <TextField type='text'
   value={sendMessage}
   name='sendMessage'
   onChange={(e)=>setSendMessage(e.target.value)}
      >
      <Button type='submit'> </Button>

    </TextField>

   </form>
   
   </Box>

   </Stack>

  )
}

export default ChatComponent
