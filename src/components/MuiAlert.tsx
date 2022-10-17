import React from 'react'
import { Stack, Alert, AlertTitle } from '@mui/material'

export const MuiAlert = () => {
  return (
    <Stack spacing="1vw" direction="column">
        <Alert severity="error"> This is an error alert</Alert>
        <Alert severity="warning"> This is an warning alert</Alert>
        <Alert severity="info"> This is an info alert</Alert>
        <Alert severity="success"> This is an success alert</Alert>

        <Alert variant="outlined" severity="error"> This is an error alert</Alert>
        <Alert variant="outlined" severity="warning"> This is an warning alert</Alert>
        <Alert variant="outlined" severity="info"> This is an info alert</Alert>
        <Alert variant="outlined" severity="success"> This is an success alert</Alert>

        <Alert variant="filled" severity="error"> This is an error alert</Alert>
        <Alert variant="filled" severity="warning"> This is an warning alert</Alert>
        <Alert variant="filled" severity="info"> This is an info alert</Alert>
        <Alert variant="filled" severity="success"> This is an success alert</Alert>
    </Stack>
  )
}
