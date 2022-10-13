import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from "react";

export const MuiNavbar = () => {

    const [anchorEle, setAnchorEle] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEle)
    const handleClose = () => {
        setAnchorEle(null)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Pokemon App
                </Typography>
                <Stack direction="row" gap="1vw">
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit" onClick={(e) => setAnchorEle(e.currentTarget)} id="resources-button">Resources</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu open={open} id="resources-menu" anchorEl={anchorEle} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
