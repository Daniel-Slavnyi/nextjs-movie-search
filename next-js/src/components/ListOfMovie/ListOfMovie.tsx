import { Grid } from '@mui/material'
import React from 'react'
import CardOfMovie from './CardOfMovie'

export default function ListOfMovie({responseData}) {
  return (
    <Grid container spacing={2}>
          {responseData?.map(item => (
      <Grid item key={item.imdbID} xs={12} sm={6} md={4}>
                  <CardOfMovie movie={item}/>
    </Grid>
  ))}
</Grid>
  )
}
