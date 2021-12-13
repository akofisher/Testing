import { default as React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddesUsers from './Loyout/Pages/AddesUsers'
import FirstLoy from './Loyout/Pages/FirstLoy'
import Loyouts from './Loyout/Pages/Loyouts'
import MainPage from './Loyout/Pages/MainPage'
import { ADDED_USERS, FIRST, LOYOUTS, MAIN_PAGE } from './routes'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={FIRST} component={FirstLoy} />
          <Route exact path={LOYOUTS} component={Loyouts} />
          <Route exact path={ADDED_USERS} component={AddesUsers} />
          <Route exact path={MAIN_PAGE} component={MainPage} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
