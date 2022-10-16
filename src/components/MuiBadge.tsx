import React from 'react'
import { Stack, Badge } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

export const MuiBadge = () => {
  return (
    <Stack paddingTop={2} spacing={2} direction="row">
        <Badge badgeContent={6} color="primary"><EmailIcon /></Badge>
        <Badge badgeContent={6} color="secondary"><EmailIcon /></Badge>
        <Badge badgeContent={301} color="secondary" max={300}><EmailIcon /></Badge>
        <Badge variant="dot" color="primary"><EmailIcon /></Badge>
    </Stack>
  )
}
