import { default as React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddesUsers from './Loyout/Pages/AddesUsers'
import MainPage from './Loyout/Pages/MainPage'
import { ADDED_USERS, MAIN_PAGE } from './routes'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={ADDED_USERS} component={AddesUsers} />
          <Route exact path={MAIN_PAGE} component={MainPage} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
