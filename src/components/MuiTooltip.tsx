import React from 'react'
import { Tooltip, IconButton } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const MuiTooltip = () => {
    return (
        <Tooltip title="Alarm" placement="bottom" arrow>
            <IconButton>
                <AccessAlarmIcon />
            </IconButton>
        </Tooltip>
    )
}
