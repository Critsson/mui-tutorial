import React from 'react'
import { Stack, CircularProgress, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
  return (
    <Stack spacing="1vw">
        <CircularProgress />
        <LinearProgress />
    </Stack>
  )
}
