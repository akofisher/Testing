import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import Loyout from '../Loyout'

const useStyles = makeStyles((theme) => ({
  fetching: {
    width: '80vw',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '50px',
  },
  cont: {
    padding: '15px',
    border: '1px solid grey',
    borderRadius: '10px',
    margin: '10px',
    width: '230px',
    height: '230px',
  },
}))

export default function AddesUsers() {
  const classes = useStyles()
  const { value, setValue } = useContext(UserContext)

  return (
    <React.Fragment>
      <Loyout>
        <Grid container xs={12}>
          <div className={classes.fetching}>
            {/* {!!userAD.length &&
              userAD.map((userAD) => {
                return (
                  <div className={classes.cont} key={userAD.id}>
                    <p>{userAD.name}</p>
                    <p>{userAD.email}</p>
                    <p>{userAD.website}</p>
                  </div>
                )
              })} */}{' '}
            {value}
          </div>
        </Grid>
      </Loyout>
    </React.Fragment>
  )
}
