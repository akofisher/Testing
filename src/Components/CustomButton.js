import { Button } from '@material-ui/core'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/users/userActionsCreator'
import { selectAddedUsers } from '../store/users/userSelector'
import Delete from './Delete'

export default function CustomButton({ props }) {
  const dispatch = useDispatch()
  const userData = useSelector(selectAddedUsers)

  const id = !!userData.find((id) => id.id === props.id)

  useEffect(() => {}, [])

  // console.log(data, 'Button dispatch to ADDED USERS')

  return (
    <React.Fragment>
      {id == false ? (
        <Button
          variant="contained"
          color="default"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => {
            dispatch(
              addUser({
                name: props.name,
                email: props.email,
                id: props.id,
                website: props.website,
                qty: 1,
              }),
            )
          }}
        >
          ADD USER
        </Button>
      ) : (
        <Delete id={props.id} />
      )}
    </React.Fragment>
  )
}
