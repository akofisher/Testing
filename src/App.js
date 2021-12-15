import { default as React, useMemo, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from './Context/UserContext'
import AddesUsers from './Loyout/Pages/AddesUsers'
import MainPage from './Loyout/Pages/MainPage'
import { ADDED_USERS, MAIN_PAGE } from './routes'

export default function App() {
  const [value, setValue] = useState(null)
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <UserContext.Provider value={providerValue}>
            <Route exact path={ADDED_USERS} component={AddesUsers} />
            <Route exact path={MAIN_PAGE} component={MainPage} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </React.Fragment>
  )
}
