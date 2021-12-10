import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../store/users/userActionsCreator'
import { selectUser } from '../store/users/userSelector'
import CustomButton from './CustomButton'

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
    width: '230px',
    margin: '10px',
    cursor: 'pointer',
  },
}))

function Fetching() {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch(setUser(data)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className={classes.fetching}>
      {!!loading ? (
        <div>Loading...</div>
      ) : (
        !!user.length &&
        user.map((user) => {
          console.log(user)
          return (
            <div className={classes.cont} key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.website}</p>
              <CustomButton props={user} />
            </div>
          )
        })
      )}
    </div>
  )
}

export default Fetching
