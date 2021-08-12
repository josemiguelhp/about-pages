import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={3}>
        <Paper elevation={3} className={classes.root}>
          <Typography align="center" variant="h4" component="h1" gutterBottom>
            Jose Miguel Hernandez
          </Typography>
          <Typography align="center" gutterBottom>
            Bienvenido/a a mi pagina! :)
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
