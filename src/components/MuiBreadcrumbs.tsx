import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'

export const MuiBreadcrumbs = () => {


  return (
    <div>
        <Breadcrumbs separator="-" maxItems={2}>
            <Link underline="hover" href="#">Home</Link>
            <Link underline="hover" href="#">Catalogue</Link>
            <Link underline="hover" href="#">Accessories</Link>
            <Typography color="text.primary">Shows</Typography>
        </Breadcrumbs>
    </div>
  )
}
