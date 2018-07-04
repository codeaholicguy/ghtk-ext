import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import App from './components/App'
import Main from './components/Main'

const createRoutes = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </App>
  </Router>
)

export default createRoutes
