import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav.component';
import Footer from './components/Footer.component';
import Home from './containers/Home';
import Project from './containers/Project';

export default class Routing extends Component {

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Nav />
          <Switch>
            <Route
              exact
              path='/' component={Home} />
            <Route path='/:id' component={Project} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
};
