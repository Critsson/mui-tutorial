import React from 'react'
import { Stack, Avatar, Badge, IconButton } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { green } from '@mui/material/colors';

export const MuiAvatar = () => {
  return (
    <Stack paddingTop="2vw" spacing="1vw" direction="row">
      <Badge color="success" badgeContent="" overlap="circular" anchorOrigin={{vertical: "bottom", horizontal: "right"}} variant="dot">
        <Avatar>CG</Avatar>
      </Badge>
      <Avatar sx={{bgcolor: green[500]}}>
        <AccessAlarmIcon />
      </Avatar>
      <IconButton>
        <AccessAlarmIcon />
      </IconButton>
    </Stack>
  )
}
