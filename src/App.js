import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Politics from './components/politics/Politics'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import ProTip from './components/ProTip'
import NavBar from './components/topbar/NavBar'
import { Grid, makeStyles } from '@material-ui/core'
import MyProvider from './utils/MyProvider'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">Jose Miguel Hernandez Perez</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export default function App() {
  const classes = useStyles()
  return (
    <MyProvider>
      <NavBar />
      <Container maxWidth="lg">
        <Box marginY={10}>
          <Typography align="center" variant="h3" component="h1" gutterBottom>
            About
          </Typography>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/politica" component={Politics} />
                <Redirect to="/" />
              </Switch>
            </Grid>
          </div>
          <ProTip align="center" />
          <Copyright />
        </Box>
      </Container>
    </MyProvider>
  )
}
