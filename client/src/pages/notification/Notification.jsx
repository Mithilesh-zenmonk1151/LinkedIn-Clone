import { Avatar, Box, Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import './Notification.css'
import NotificationCard from '../../component/card/NotificationCard'
function Notification() {
    return (
        <Stack maxWidth={'555px'} margin={'auto'} gap={3} marginTop={'30px'}>
            <Stack direction={'row'} gap={1.5} alignItems={'center'} sx={{ height: '64px', backgroundColor: 'white', paddingX: '16px', borderRadius: '10px', border: '1px solid rgb(209, 204, 204)' }}>
                <Button variant='outlined' sx={{ textTransform: 'none', border: 'none', backgroundColor: '#02754f', borderRadius: '20px', height: '30px', padding: '1px', color: 'white', fontWeight: '600', fontSize: '16px', '&:hover': { backgroundColor: 'rgb(17, 75, 51)', border: 'none', } }} >All</Button>
                <Button variant='outlined' sx={{ border: '1px solid rgb(209, 204, 204)', textTransform: 'none', borderRadius: '20px', height: '30px', padding: '1px 8px', color: 'rgb(134, 134, 134)', fontWeight: '600', fontSize: '16px', '&:hover': { outline: { border: '2px solid rgb(134, 134, 134)' }, backgroundColor: 'white', padding: '0px 7px' } }}>My posts</Button>
                <Button variant='outlined' sx={{ border: '1px solid rgb(209, 204, 204)', textTransform: 'none', borderRadius: '20px', height: '30px', padding: '1px 8px', color: 'rgb(134, 134, 134)', fontWeight: '600', fontSize: '16px', '&:hover': { outline: { border: '2px solid rgb(134, 134, 134)' }, backgroundColor: 'white', padding: '0px 7px' } }}>Mentions</Button>
            </Stack>
            <Stack sx={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid rgb(209, 204, 204)' }}>
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </Stack>
        </Stack>
    )
}

export default Notification