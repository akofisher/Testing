// import { makeStyles } from '@material-ui/core/styles'
// import React, { useEffect, useState } from 'react'

// const useStyles = makeStyles((theme) => ({
//   fetching: {
//     width: '100vw',
//     height: '100vh',
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//   },
// }))

// function Fetching() {
//   const classes = useStyles()
//   const [user, setUser] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((data) => setUser(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false))
//   }, [])

//   return (
//     <div className={classes.fetching}>
//       {!!loading ? (
//         <div>Loading...</div>
//       ) : (
//         !!user.length &&
//         user.map((user) => {
//           console.log(user)
//           return (
//             <div className={classes.cont} key={user.id}>
//               <p>{user.name}</p>
//               <p>{user.email}</p>
//               <p>{user.website}</p>
//             </div>
//           )
//         })
//       )}
//     </div>
//   )
// }

// export default Fetching
