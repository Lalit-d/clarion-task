import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './components/HomePage';
import DashBoardPage from './components/DashboardPage';

export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/dashboard' component={DashBoardPage} />
      </Switch>
    </Router>
  )
}
