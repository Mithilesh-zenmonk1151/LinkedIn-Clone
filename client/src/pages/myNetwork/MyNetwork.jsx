import React, { useEffect } from 'react'
import ConnectionCard from '../../component/card/ConnectionCard'
import RequestCard from '../../component/card/RequestCard'

import Suggestion from '../../component/card/Suggestion'
import { Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchconnectionUser, fetchsuggestionUser } from '../../slices/connections.slice'

function Mynetwork() {
    const dispatch =useDispatch();
  
    useEffect(()=>{
        dispatch(fetchsuggestionUser(1));
        dispatch(fetchconnectionUser(1));
    },[dispatch])
    return (



        <Stack flexDirection={'column'} gap={'20px'} marginTop={"80px"}>
            <Stack flexDirection={'row'} gap={'20px'} margin={'auto'}>
                <ConnectionCard />
                <Stack flexDirection={'column'} gap={'20px'}>
                    <RequestCard />
                    
                    <Suggestion />
                </Stack>
            </Stack>


        </Stack>



    )
}

export default Mynetwork