import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const MuiList = () => {
    return (
        <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccessAlarmIcon />
                        </ListItemIcon>
                        <ListItemText primary="List item 1" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AccessAlarmIcon />
                    </ListItemIcon>
                    <ListItemText primary="List item 2" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AccessAlarmIcon />
                    </ListItemIcon>
                    <ListItemText primary="List item 3" />
                </ListItem>
            </List>
        </Box>
    )
}
