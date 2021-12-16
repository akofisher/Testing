import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@mui/material'
import React from 'react'
import NavBar from '../Components/NavBar'

const useStyles = makeStyles((theme) => ({
  LeftS: {
    height: '100vh',
    margin: '0',
    padding: '0',
  },
  RightS: {
    height: '100vh',
    margin: '0',

    padding: '0',
  },
  Nav: {
    height: '10vh',
    margin: '0',
  },
}))

export default function Loyout(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid contianer>
        <Grid item className={classes.Nav} xs={12}>
          <NavBar />
        </Grid>
        <Grid container>
          <Grid item className={classes.LeftS} xs={2}></Grid>
          <Grid item className={classes.RightS} xs={10}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
