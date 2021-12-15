import { makeStyles } from '@material-ui/core/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { setUser } from '../store/users/userActionsCreator'
// import { selectUser } from '../store/users/userSelector'
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
  // const dispatch = useDispatch()
  // const user = useSelector(selectUser)
  const [user, setUser] = useState([])
  const [users, setUsers] = useState(15)
  const [pages, setPages] = useState(1)

  const FetchingData = () => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pages}/${users}`,
      )
      .then(({ data }) => {
        const newUsers = []
        data.list.map((p) => newUsers.push(p))
        setUser((oldUsers) => [...oldUsers, ...newUsers])
      })
      .then(() => {
        setPages(pages + 1)
        setUsers(users + 15)
      })

      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }

  const handleScroll = (e) => {
    console.log('Top: ', e.target.documentElement.scrollTop)
    console.log('Win: ', window.innerHeight)
    console.log('Height: ', e.target.documentElement.scrollHeight)
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      FetchingData()
      console.log('Bottom')
    }
  }

  useEffect(() => {
    FetchingData()

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={classes.fetching}>
      {!!loading ? (
        <div>Loading...</div>
      ) : (
        !!user &&
        user.map((user) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={user.id} className={classes.cont}>
              <CardMedia
                component="img"
                height="140"
                image={user.imageUrl}
                alt="some photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.prefix} {user.name} {user.lastName} {user.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.title}
                </Typography>
              </CardContent>
              <CardActions>
                <CustomButton props={user} />
              </CardActions>
            </Card>
          )
        })
      )}
    </div>
  )
}

export default Fetching
