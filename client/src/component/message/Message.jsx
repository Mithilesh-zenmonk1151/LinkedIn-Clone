import { Box } from '@mui/material'
import React from 'react'
import MessageCard from './messageCard/MessageCard'

const Message = () => {
  return (
    <Box sx={{
        display:"flex",
        textAlign:"center"
    }}>
        <MessageCard/>
    </Box>
  )
}

export default Message
