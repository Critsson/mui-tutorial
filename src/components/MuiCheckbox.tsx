import {useState} from "react"
import {FormControlLabel, Checkbox} from "@mui/material"

export default function MuiCheckbox() {

    const [value, setValue] = useState<boolean>(false)
    console.log(value)

    return (
        <div>
            <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={value} onChange={(e) => setValue(e.target.checked)} />}/>
        </div>
    )
}