import React from 'react'
import { Avatar, Button, Divider, Stack, Typography } from '@mui/material'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { updateconnectionUser } from '../../slices/connections.slice';
function RequestCard() {
  const dispatch = useDispatch();
  const requesteddata = useSelector((state)=>state.connection?.requestData)
  const handleIgnoreClick=(connectionId)=>{
    const data={};
    data.connectionId=connectionId;
    data.status='Rejected';
   dispatch(updateconnectionUser(data))

  }
  const handleAcceptClick=(connectionId)=>{
    const data={};
    data.connectionId=connectionId;
    data.status='Accepted';
   dispatch(updateconnectionUser(data))

  }
  console.log('type', requesteddata)
  return (
    <Stack flexDirection={'column'} sx={{ width: '804px', backgroundColor: 'white', boxSizing: 'border-box', pl: '16px', pt: '8px', pr: '8px', borderRadius: '8px' }}>
      <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ pb: '14px' }}>
        <Typography fontSize={'16px'} fontWeight={'400'} color={'#666666'}>{requesteddata?.length ? 'Invitations' : 'No pending invitations' }</Typography>
        <Typography fontSize={'16px'} fontWeight={'550'} color={'#999999'}>Manage</Typography>
      </Stack>
  
    {requesteddata?.map((request)=>(
      <Stack   
         key={request?._id}
       
         
         name={request.sendername[0].name}>
    <Divider />
      <Stack flexDirection={'row'} justifyContent={'space-between'}>
        <Stack flexDirection={'row'} sx={{ pt: '12.5px', pb: '12.5px' }} >
          <Avatar alt='' src='' sx={{ height: '71.99px', width: '71.99px', mr: '8px' }} />

          <Stack flexDirection={'column'} >
            <Typography sx={{ fontSize: '16px', color: '#333333', display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5px', fontWeight: '600' }}>{request.sendername[0].name}  <GppGoodOutlinedIcon /> </Typography>
            <Typography sx={{ fontSize: '14px', color: '#666666', fontWeight: '400' }} >Web Developer I MERN-Stack Developer I Ex-GDSC CUET Web Team</Typography>

          </Stack>
        </Stack>
        <Stack flexDirection={'row'} alignItems={'center'} pr={'10px'} >
          <Button onClick={()=>handleIgnoreClick(request?._id)} sx={{ textTransform: 'none', fontWeight: '500', fontSize: '16px', color: '#666666' }}>Ignore</Button>
          <Button onClick={()=>handleAcceptClick(request?._id)} variant='outlined' sx={{ textTransform: 'none', fontWeight: '500', fontSize: '16px', borderRadius: '30px', p: '1' }}>Accept</Button>
        </Stack>

      </Stack>
   </Stack>
    

    ))}
   
      

   

    </Stack>
  )
}

export default RequestCard