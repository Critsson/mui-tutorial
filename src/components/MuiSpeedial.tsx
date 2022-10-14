import React from 'react'
import { SpeedDial, SpeedDialIcon } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

export const MuiSpeedial = () => {
  return (
    <SpeedDial ariaLabel="Navigation speed dial" sx={{position: "absolute", bottom: "16px", right: "16px"}} icon={<SpeedDialIcon icon={<ChatIcon />} openIcon={<CloseIcon />}/>}>

    </SpeedDial>
  )
}
