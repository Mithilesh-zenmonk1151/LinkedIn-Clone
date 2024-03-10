import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

function MessageShowCard({data , dataroom}) {
    const loggeduser= JSON.parse(localStorage.getItem('user'))
   
  return (
<Stack flexDirection={'row'} ml={'10px'} mb={'10px'} mr={'30px'} >
    <Avatar sx={{width:'40px',height:'40px', mr:'5px'  }}  />
    <Stack flexDirection={'column'} gap={'10px'} >
    <Stack flexDirection={'row'} alignItems={'center'} gap={'5px'}>
    <Typography fontSize={'14px'} fontWeight={'600'}>{(loggeduser?._id===data?.senderId)? loggeduser?.name : dataroom?.ParticipantsId[0]?.name}</Typography>
    <CircleIcon sx={{height:'4px',width:'4px',color:'grey'}}/>
    <Typography fontSize={'12px'} fontWeight={'400'}>{(new Date(data?.createdAt)).toLocaleString()} </Typography>
    </Stack>
    <Typography fontSize={'14px'} fontWeight={'400'} sx={{wordBreak:'break-word'}} >{data?.content}</Typography>
    </Stack>

</Stack>
  )
}

export default MessageShowCard