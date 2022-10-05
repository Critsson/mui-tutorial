import { TextField, Box, MenuItem } from "@mui/material"
import {useState} from "react"

export default function MuiSelect() {

    const [country, setCountry] = useState<string[]>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        const value = event.target.value
        setCountry(typeof value === "string" ? value.split(",") : value)
    }

    return (
        <Box width="250px">
            <TextField fullWidth={true} label="Select country" select value={country} onChange={handleChange} SelectProps={{
                multiple: true
            }}>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
            </TextField>
        </Box>
    )

}