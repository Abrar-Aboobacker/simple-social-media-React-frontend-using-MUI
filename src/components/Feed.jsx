import React from 'react'
import Posts from './posts'
import {  Box } from '@mui/material'

function Feed() {
  return (
    <Box sx={{
        flex:2,
        padding:2
        }}>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
  )
}

export default Feed
