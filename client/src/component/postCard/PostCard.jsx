import React from 'react'
import PostCard from '../card/Card'
import { Box } from '@mui/material'

const Posts = ({title, body}) => {
    
  return (
    <Box>
        <PostCard title={title} body ={body} />
        
    </Box>
  )
}

export default Posts