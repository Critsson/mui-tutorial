import React from 'react'
import { Stack, Skeleton } from '@mui/material'

export const MuiSkeleton = () => {
  return (
    <Stack spacing="1vw" width="250px">
        <Skeleton variant="circular" width={40} height={40}/>
        <Skeleton variant="rectangular" width={40} height={40}/>
    </Stack>
  )
}
