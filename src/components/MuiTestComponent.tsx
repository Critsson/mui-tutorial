import { Stack, TextField, InputAdornment, IconButton } from "@mui/material"
import React from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function MuiTestComponent() {

    const [showingPass, setShowingPass] = React.useState<boolean>(false)
    const [password, setPassword] = React.useState<string>("")
    const [username, setUsername] = React.useState<string>("")

    return (
        <Stack direction="row" spacing="2vw">
            <TextField label="Username" color="secondary" value={username} onChange={(e) => setUsername(e.target.value)} />
            {showingPass ? <TextField label="Password" color="secondary" type="text" value={password} onChange={(e) => setPassword(e.target.value)} InputProps={{
                startAdornment: <InputAdornment position="start"><IconButton onClick={() => setShowingPass(false)}><VisibilityIcon /></IconButton></InputAdornment>
            }}/> :
                <TextField label="Password" color="secondary" type="password" value={password} onChange={(e) => setPassword(e.target.value)} InputProps={{
                    startAdornment: <InputAdornment position="start"><IconButton onClick={() => setShowingPass(true)}><VisibilityOffIcon /></IconButton></InputAdornment>
                }}/>}
        </Stack>
    )
}