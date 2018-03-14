import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';

import HomeComponent from './containers/Home.jsx';
import Routing from '../routing.jsx';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routing />
        <h1>Booyah</h1>
        <h2>Yooooo</h2>
      </div>
    )
  }
}