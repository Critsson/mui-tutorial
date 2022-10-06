import { Rating } from "@mui/material";
import React, { useState } from "react";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';

export default function MuiRating() {

    const [value, setValue] = useState<number | null>(null)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }

    console.log(value)

    return (
        <div>
            <Rating value={value} onChange={handleChange} precision={0.5} icon={<LocalLibraryIcon fontSize="inherit"/>} emptyIcon={<LocalLibraryOutlinedIcon />}/>
        </div>
    )
}