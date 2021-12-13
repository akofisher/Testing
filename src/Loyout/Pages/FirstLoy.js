import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@mui/material'
import React from 'react'
import Loyout from '../Loyout'

const useStyles = makeStyles((theme) => ({
  Nav1: {
    backgroundColor: 'green',
  },
  LeftS1: {
    backgroundColor: 'green',
  },
  RightS1: {
    backgroundColor: 'green',
  },
  Bottom1: {
    backgroundColor: 'green',
  },
}))

export default function FirstLoy() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Loyout>
        <Grid contianer>
          <Grid item className={classes.Nav1} xs={12}>
            sdfsf
          </Grid>
          <Grid container>
            <Grid item className={classes.LeftS1} xs={3}>
              sdfsf
            </Grid>
            <Grid item className={classes.RightS1} xs={9}>
              sdfsf
            </Grid>
          </Grid>
          <Grid container className={classes.Bottom1} xs={12}>
            sdfsdf
          </Grid>
        </Grid>
      </Loyout>
    </React.Fragment>
  )
}
