import { AddBox } from '@mui/icons-material'
import { Box, Button, Toolbar } from '@mui/material'
import React from 'react'

export default function NotFound() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        <Box sx={{display:'flex',justifyContent:'end',alignItems:'end'}}>
            <Button startIcon={<AddBox/>}  variant='contained' >Add Course</Button>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center'}}>
        <img src={require('../Assets/no-course-found.png')} alt='no_course_found'/>
        </Box>

        {/* <AddBox /> */}
      </Box>
  )
}
