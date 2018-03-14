import React from 'react';
import { Switch, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav.component.jsx';
import HomeComponent from './components/containers/Home.jsx';

const Routing = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={HomeComponent} />
      </div>
    </Router>
  )
}

export default Routing;