import { makeStyles } from '@material-ui/core/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ADDED_USERS } from '../routes'

const useStyles = makeStyles((theme) => ({
  fetching: {
    width: '80vw',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '50px',
    textDecoration: 'none',
  },
  cont: {
    padding: '15px',
    border: '1px solid grey',
    borderRadius: '10px',
    width: '280px',
    margin: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      opacity: '0.7',
    },
  },
}))

function FetchingUsers() {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([])
  let Pages = 1

  const FetchingBigData = () => {
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${Pages}/12`,
      )
      .then(({ data }) => {
        const newUsers = []
        data.list.map((p) => newUsers.push(p))
        setUser((oldUsers) => [...oldUsers, ...newUsers])
      })
    Pages += 1
    setLoading(false)
  }

  const handleScroll = (e) => {
    // console.log('Top: ', e.target.documentElement.scrollTop)
    // console.log('Win: ', window.innerHeight)
    // console.log('Height: ', e.target.documentElement.scrollHeight)
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      FetchingBigData()
      // console.log('Bottom')
    }
  }

  useEffect(() => {
    FetchingBigData()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={classes.fetching}>
      {!!loading ? (
        <div>Loading...</div>
      ) : (
        !!user &&
        user.map((user, i) => {
          return (
            <Card
              sx={{ maxWidth: 345 }}
              key={i + 1}
              className={classes.cont}
              component={Link}
              to={ADDED_USERS.replace(':id', user.id)}
            >
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
            </Card>
          )
        })
      )}
    </div>
  )
}

export default FetchingUsers
