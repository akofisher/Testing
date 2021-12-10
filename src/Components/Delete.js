import { IconButton, makeStyles, Typography } from '@material-ui/core'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/users/userActionsCreator'

const useStyles = makeStyles((theme) => ({
  fnt: {
    fontSize: '20px',
    color: 'gray',
  },
}))

export default function Delete({ id }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <IconButton
        aria-label="delete"
        onClick={() => {
          dispatch(removeUser(id))
        }}
      >
        <Typography variant="p" className={classes.fnt}>
          Delete
        </Typography>
        <DeleteIcon />
      </IconButton>
    </React.Fragment>
  )
}
