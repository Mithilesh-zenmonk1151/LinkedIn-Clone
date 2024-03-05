import { Avatar,  Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { requestRecieved, updateConnection } from '../../redux/slice/connections/connectionAction'

const RecievedRequest = () => {

  const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(requestRecieved())
//   }, [dispatch])

  const requests = useSelector((state) => state?.connections?.received)
  console.log(requests)
  
//   const handleAccept = (id) => {
//     console.log(id)
//     const inputs = {Id: id, status: "accepted"}
//     dispatch(updateConnection(inputs))
//   }

//   const handleIgnore = (id) => {
//     console.log(id)
//     const inputs = {Id: id, status: "rejected"}
//     dispatch(updateConnection(inputs))
//   }

  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column' }} >
      {
        requests && 
        requests?.map &&
        requests.length !== 0 ?
          requests?.map((i) => {
            return (
              <Stack key={i._id}>
              <Stack sx={{ marginTop: '20px', width: '100%' }} flexDirection={'row'} justifyreceived={'space-between'} alignItems={'center'} key={i._id}>
                <Stack flexDirection={'row'} sx={{ width: '70%' }} key={i._id} >
                  <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
                  <Stack flexDirection={'column'} sx={{ marginLeft: '20px' }}>
                    <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>{i?.connectionBy?.name}</Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{i?.connectionBy?.headline}</Typography>
                    {/* <Typography>{i?.connectionBy?.company?.name}</Typography> */}
                    <Button sx={{ padding: '0', marginTop: '10px', textTransform: 'none' }}>Message</Button>
                  </Stack>
                </Stack>
                <Stack flexDirection={'row'} sx={{ width: '30%' }} alignItems={"center"} key={i._id}>
                  <Button 
                  sx={{ 
                    padding: '0', 
                    margin: '10px', 
                    color: '#525353', 
                    textTransform: 'none' }}
                    // onClick={() => handleIgnore(i?.connectionBy?._id)}
                    >Ignore</Button>
                  <Button variant='outlined'
                    sx={{ padding: '5px 25px', margin: '10px', borderRadius: '50px', textTransform: 'none', fontWeight: '500' }}
                    // onClick={() => handleAccept(i?.connectionBy?._id)}
                  >Accept</Button>
                </Stack>
              
              </Stack>
              <Divider sx={{marginTop: '15px'}} key={i._id} />
            </Stack>
            )

          }

          ) 
          : "No new requests received"
      }

    </Stack>
  )
}

export default RecievedRequest