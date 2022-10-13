import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"

export const MuiDrawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    return (
        <>
        <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon />
        </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box textAlign="center" role="presentation" padding="1vw">
                    <Typography variant="h6">Side Panel</Typography>
                </Box>
            </Drawer>
        </>
    )
}
