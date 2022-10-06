import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react" 

const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"]

export default function MuiAutocomplete() {
    return (
        <div>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label="Skills" />} />
        </div>
    )
}