import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FriendsFetching from '../../Components/Friends'
import { UserContext } from '../../Context/UserContext'
import ScrollToTop from '../../scroll'
import Loyout from '../Loyout'

const useStyles = makeStyles((theme) => ({
  fetching: {
    width: '85vw',
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
  IMG: {
    width: '200px',
    height: '200px',
  },
  PADD: {
    padding: '20px',
    textAlign: 'center',
  },
}))

export default function AddesUsers() {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const { value, setValue } = useContext(UserContext)
  const { id } = useParams()

  const SinglUserFetch = () => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`,
      )
      .then(({ data }) => {
        setValue(data)
      })
      .then(() => setLoading(false))
  }

  useEffect(() => {
    SinglUserFetch()
  }, [id])

  return (
    <React.Fragment>
      <Loyout>
        <ScrollToTop />
        {!!loading ? (
          <div>Loading...</div>
        ) : (
          <div className={classes.fetching}>
            <Grid container xs={12} className={classes.fetching}>
              <Grid container xs={12}>
                <Grid box xs={3} className={classes.PADD}>
                  <img
                    className={classes.IMG}
                    src={value.imageUrl}
                    alt="user photo"
                  />
                  <p>
                    {value.prefix} {value.name} {value.lastName} {value.id}
                  </p>
                </Grid>
                <Grid box xs={7} className={classes.PADD}>
                  <h3>Info</h3>
                  <p>
                    {value.prefix} {value.name} {value.lastName}
                  </p>
                  <p>{value.title}</p>

                  <p>{value.email}</p>
                  <p>{value.jobType}</p>
                </Grid>

                <Grid box xs={2} className={classes.PADD}>
                  <h3>Address</h3>
                  <p>{value.address.city}</p>
                  <p>{value.address.country}</p>
                  <p>{value.address.state}</p>
                </Grid>
              </Grid>

              <div className={classes.fetching}>
                <h3>Friends :</h3>
                <Grid container xs={12}>
                  <FriendsFetching />
                </Grid>
              </div>
            </Grid>
          </div>
        )}
      </Loyout>
    </React.Fragment>
  )
}
