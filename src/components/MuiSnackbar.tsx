import React from 'react'
import { Snackbar, Button } from '@mui/material'

export const MuiSnackbar = () => {

    const [open, setOpen] = React.useState(false)

  return (
    <>
        <Button onClick={() => setOpen(true)}>Submit</Button>
        <Snackbar message="Form Submitted successfully!" autoHideDuration={3000} open={open} onClose={() => setOpen(false)}/>
    </>
  )
}
