import { Avatar, Button, Divider, InputBase, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { fetchRooms } from '../../redux/slice/rooms/roomAction';
import { useDispatch, useSelector } from 'react-redux';

const Messages = ({handleReciever}) => {
    const dispatch = useDispatch()



    // useEffect(() => {
    //   // dispatch(fetchRooms())
    // }, [dispatch])
    
    const user = useSelector((state) => state.auth?.user?._id)
    console.log(user)
    const rooms = useSelector((state) => state?.room?.content)
    const loading = useSelector((state) => state.room?.isLoading)
    const error = useSelector((state) => state.room?.error)
    console.log(rooms)

  return (

    <Stack className='messaging-box'  sx={{width: '312px'}}>
          <Stack 
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{width: '100%', padding: '5px 0px 5px 0px'}}
            >
            <Typography
            
            sx={{
              fontSize: '16px', 
              fontWeight: '500',
              margin: '0',
              paddingLeft: '18px'
            }}
            >Messaging</Typography>
            <Button><MoreHorizIcon sx={{color: '#000000'}} /></Button>
          </Stack>
          <Divider />
          

          <Stack sx={{width: '100%', marginTop:'10px', padding: '0', border: 'box'}} alignItems={'center'}>

          <InputBase 
          startAdornment={<SearchIcon sx={{color: 'black', paddingLeft: '10px', paddingRight: '8px'}} />}
          endAdornment={<TuneIcon sx={{color: 'black', paddingLeft: '10px', paddingRight: '8px'}} />}
          placeholder="Search messages"
          sx={{ 
            border: '1px Solid #edf2f9', 
            borderRadius: '4px', 
            width: '88%',
            fontSize: '14px',
            fontWeight: '400',
            color: 'black',
            backgroundColor: '#edf2f9',
            "&:hover" : {
              border: '1px solid black',
            },
            "&:focus" : {
              border: '1px solid black',
            },
            
          }} 
          
          />

          <Stack flexDirection={'row'} sx={{width: '100%', marginTop:'10px'}}> 
            <Button sx={{
              textTransform: 'none',
              color: '#599d83',
              width: '50%',
              fontWeight: '700',
              

            }}>Focused</Button>
            <Button
            sx={{
              textTransform: 'none',
              color: '#7f7f7f',
              width: '50%',
              fontWeight: '700'
            }}
            >Other</Button>
          </Stack>
          </Stack>
          <Divider />
      
            <Stack sx={{ width: '100%', height: '100%', overflow: 'scroll', overflowX: 'hidden' }}>
              {/* map */}

{
      rooms && 
      rooms?.map &&
      rooms.length !== 0 ?
      rooms?.map((item)=> {
        return(
          <>    
         
          <Stack sx={{ width: '100%', height: '91px'}} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            
            <Button 
              sx={{padding: '15px ', width: '100%',height: '100%', textTransform: 'none', color: 'black'}}
              onClick={() => handleReciever(item?.participants[0]?._id === user?._id ? {name: item?.participants[1]?.name, headline: item?.participants[1]?.headline} : {name: item?.participants[0]?.name, headline: item?.participants[0]?.headline})}
              >
              <Stack flexDirection={'row'} sx={{ width: '100%' }}>
              <Avatar sx={{ width: '60px', height: '60px' }}></Avatar>
              <Stack flexDirection={'column'} sx={{ marginLeft: '10px', width: '100%' }} alignItems={'flex-start'}>
              <Stack flexDirection={"row"} alignItems={'center'} justifyContent={'space-between'} sx={{width: '100%'}}>
              <Typography sx={{ fontWeight: '400', fontSize: '18px' }}>{item?.participants[0]?._id === user?._id ? item?.participants[1]?.name : item?.participants[0]?.name}</Typography> 
              <Typography>Date</Typography>
              </Stack>
              <Typography sx={{ fontWeight: '400', fontSize: '14px' }}>{item?.participants[0]?._id === user?._id ? item?.participants[1]?.name : item?.participants[0]?.name}: Last Msg</Typography> 
              </Stack>
              </Stack>
            </Button>         
          </Stack>
          <Divider  />
        </>
        )
      })
      : <> <Avatar></Avatar> </>

}

            </Stack>        
        </Stack>
  )
}

export default Messages