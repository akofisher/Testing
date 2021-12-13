import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FIRST } from '../../routes'
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
    padding: '25px',
    border: '1px solid grey',
    borderRadius: '10px',
    margin: '30px',
    width: '230px',
    height: '230px',
    fontSize: '120px',
    cursor: 'pointer',
  },
}))

export default function Loyouts() {
  const classes = useStyles()

  useEffect(() => {}, [])

  return (
    <React.Fragment>
      <Loyout>
        <div className={classes.fetching}>
          <button className={classes.cont} component={Link} to={FIRST}>
            1
          </button>
          <button className={classes.cont}>2</button>
          <button className={classes.cont}>3</button>
        </div>
      </Loyout>
    </React.Fragment>
  )
}
