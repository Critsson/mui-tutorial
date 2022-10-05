import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import React from "react"

export default function MuiButton() {

    const [format, setFormat] = React.useState<string | null>(null)
    const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updatedFormat: string | null) => {
        setFormat(updatedFormat)
    }

    console.log(format)

    return (
        <Stack spacing="1vw" direction="column">
            <Stack spacing="2vw" direction="row">
                <Button variant="text" href="https://google.com" color="secondary">Text</Button>
                <Button variant="contained" disableElevation size="small">Text</Button>
                <Button variant="outlined" color="secondary">Text</Button>
                <Button variant="outlined" sx={{ width: "8vw", height: "5vw", fontSize: "1.5vw" }} startIcon={<SendIcon sx={{ height: "1.5vw", width: "1.5vw" }} />} endIcon={<SendIcon sx={{ height: "1.5vw", width: "1.5vw" }} />}>Send</Button>
                <IconButton>
                    <SendIcon />
                </IconButton>
                <ButtonGroup variant="contained" sx={{ height: "2.5vw" }}>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack>
                <ToggleButtonGroup value={format} onChange={handleFormatChange} exclusive>
                    <ToggleButton value="bold"><FormatBoldIcon sx={{height: "1.5vw", width: "1.5vw"}} /></ToggleButton>
                    <ToggleButton value="italic"><FormatItalicIcon sx={{height: "1.5vw", width: "1.5vw"}} /></ToggleButton>
                    <ToggleButton value="underlined"><FormatUnderlinedIcon sx={{height: "1.5vw", width: "1.5vw"}} /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}