import React, { Component } from 'react';
import { Route, matchPath, BrowserRouter as Router } from 'react-router-dom';
import TransitionGroup from 'react-transition-group';
import AnimatedSwitch from './components/AnimatedSwitch.jsx';
import firstChild from './utils/helpers';

import Nav from './components/Nav.component.jsx';
import Footer from './components/Footer.component.jsx';
import HomeComponent from './components/containers/Home.jsx';
import Project from './components/containers/Project.jsx';

export default class Routing extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="wrapper">
        <Route 
          render ={({location}) => (
            <TransitionGroup component='main'>
              <AnimatedSwitch
                key={location.key}
                location={location}
              >
                <Route exact path="/"
                  component={HomeComponent}
                />
                <Route path="/:id" 
                  component={Project}
                />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        />
      </div>
    )
  }
};
{/* <Router>
  <div>
    <Nav />
    <Switch>
      <Route 
        exact 
        path="/" component={HomeComponent} />
      <Route path="/:id" component={Project} />
    </Switch>
    <Footer />
  </div>
</Router> */}