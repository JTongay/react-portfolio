import React from 'react';
import { Switch, NavLink, Route, BrowserRouter } from 'react-router-dom';

import HomeComponent from './containers/Home.jsx';
import Routing from '../routing.jsx';

// import '../../styles/normalize.css';
import '../../styles/main.scss';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routing />
      </div>
    )
  }
}