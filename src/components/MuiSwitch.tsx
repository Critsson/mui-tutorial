import { FormControlLabel, Switch } from "@mui/material"
import React from "react"

export default function MuiSwitch() {

    const [darkModeOn, setDarkModeOn] = React.useState(false)
    console.log(darkModeOn)

     return (
        <div>
            <FormControlLabel label="Dark Mode" control={<Switch checked={darkModeOn} onChange={() => setDarkModeOn(!darkModeOn)}/>} />
        </div>
     )
}