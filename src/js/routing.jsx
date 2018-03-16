import React from 'react';
import { Switch, NavLink, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav.component.jsx';
import Footer from './components/Footer.component.jsx';
import HomeComponent from './components/containers/Home.jsx';
import Project from './components/containers/Project.jsx';

const Routing = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id" component={Project} />
        <Footer />
      </div>
    </Router>
  )
}

export default Routing;