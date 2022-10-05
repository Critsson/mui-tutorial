import {Stack, TextField, InputAdornment, IconButton} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useState} from "react"

export default function MuiText() {

    const [hiddenPass, setHiddenPass] = useState<boolean>(true)

    const handleHide = () => {
        setHiddenPass(!hiddenPass)
    }

    return (
        <Stack spacing={4} direction="row">
            {hiddenPass ? <TextField type="password" label="Password" helperText="Do not share your password with anyone" InputProps={{
                startAdornment: <InputAdornment position="start"><IconButton onClick={() => handleHide()}><VisibilityOffIcon /></IconButton></InputAdornment>
            }}/> : <TextField type="text" label="Password" helperText="Do not share your password with anyone" InputProps={{
                startAdornment: <InputAdornment position="start"><IconButton onClick={() => handleHide()}><VisibilityIcon /></IconButton></InputAdornment>
            }}/>}

            
        </Stack>
    )
}