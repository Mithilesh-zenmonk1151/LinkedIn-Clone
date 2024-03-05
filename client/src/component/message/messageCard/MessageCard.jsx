import { Avatar, Button, Divider, InputBase, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PhotoIcon from '@mui/icons-material/Photo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import { fetchMessages } from '../../redux/slice/messages/messageAction';
import { useDispatch } from 'react-redux';

const MessageCard = ({reciever, socket}) => {

  const dispatch = useDispatch()
  console.log(reciever)
  console.log(socket)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // dispatch(fetchMessages())
  }, [dispatch])

  useEffect(() => {
    
  })

  const handleMessage = () => {
      socket.emit('')
  }

  return (
    <Stack className='user-message-box' sx={{width: '468px'}}>

            <Stack className='user-name' 
            flexDirection={'row'} 
            justifyContent={'space-between'} 
            alignItems={'center'} 
            sx={{ width: '100%', boxSizing: 'border-box', padding: '8px'}}
            >
            <Typography 
            sx={{
              fontSize: '16px', 
              fontWeight: '500',
            }}
          >
          {reciever.name}
          </Typography>

            <Stack flexDirection={'row'} gap={2}>
              <MoreHorizIcon />
              <VideoCallIcon />
              <StarBorderRoundedIcon />
            </Stack>

            </Stack>
            <Divider />
            <Stack sx={{height: '58vh', overflow: "scroll", overflowX: 'hidden', overflowY: 'scroll', boxSizing: 'border-box'}}>
              <Stack sx={{width: '100%', padding: '8px'}}>

              <Avatar sx={{height: '72px', width: '72px'}}></Avatar>
              <Typography 
              sx={{ 
                fontSize: '17px', 
                fontWeight: '500',
                marginLeft: '11px',
                marginTop: '10px',
                "&:hover": {
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }
              }}>{reciever?.name}</Typography>
              <Typography
              sx={{
                fontSize: '14px',
                marginLeft: '11px',
              }}
              >{reciever?.headline}</Typography>
              </Stack>
              <Divider />
            </Stack>
            <Divider />
            <Stack className='textField' sx={{boxSizing: 'border-box', padding: '10px', height: '121px'}}>
              <InputBase
              multiline
              minRows={4}
              placeholder='Write a message...'
              sx={{
                backgroundColor: '#f5f3ee', 
                borderRadius: '5px', 
                boxSizing: 'border-box', 
                padding: '30px 10px 10px 10px',
                fontSize: '14px',
                height: '100%',
                overflow: 'scroll',
                WebkitOverflowScrolling: 'auto',
                overflowX: 'hidden'
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
               />
            </Stack>
            <Divider />

              <Stack 
                flexDirection={'row'} 
                sx={{height: '98px', boxSizing: 'border-box', padding: '20px'}}
                gap={2}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
              <Stack flexDirection={'row'}  gap={2}>
                <PhotoIcon />
                <AttachFileIcon sx={{rotate: '50deg'}} />
                <GifIcon />
                <SentimentSatisfiedAltIcon />
              </Stack>
              <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                <Button variant='contained' 
                sx={{textTransform: 'none', borderRadius:'50px', padding: '0'}}
                onClick={handleMessage}
                >
                  Send
                </Button>
                <MoreHorizIcon />
              </Stack>
              </Stack>
        
        
        
         </Stack>
  )
}

export default MessageCard