import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAddedUsers } from '../../store/users/userSelector'
import Loyout from '../Loyout'
import CustomButton from '../../Components/CustomButton'

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
  const userAD = useSelector(selectAddedUsers)

  return (
    <React.Fragment>
      <Loyout>
        <Grid container xs={12}>
          <div className={classes.fetching}>
            {!!userAD.length &&
              userAD.map((userAD) => {
                return (
                  <div className={classes.cont} key={userAD.id}>
                    <p>{userAD.name}</p>
                    <p>{userAD.email}</p>
                    <p>{userAD.website}</p>
                    <CustomButton props={userAD} />
                  </div>
                )
              })}
          </div>
        </Grid>
      </Loyout>
    </React.Fragment>
  )
}
