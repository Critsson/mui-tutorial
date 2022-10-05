import {FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@mui/material"
import {useState} from "react"

export default function MuiRadioButton() {

    const [value, setValue] = useState<string>("")
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    console.log(value)

    return (
        <div>
            <FormControl>
                <FormLabel error>
                    Years of Experience
                </FormLabel>
                <RadioGroup name="job-experience-group" value={value} onChange={(e) => setValue(e.target.value as string)} row >
                    <FormControlLabel control={<Radio color="secondary" />} label="0-2" value="0-2" />
                    <FormControlLabel control={<Radio color="secondary" />} label="3-5" value="3-5" />
                    <FormControlLabel control={<Radio color="secondary" />} label="6-10" value="6-10" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}