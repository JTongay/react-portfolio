import React from 'react';

import Routing from './routing';
import firebase from 'firebase';

import FIREBASE_CONFIG from './firebase/config';

import './styles/css/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.app = firebase.initializeApp(FIREBASE_CONFIG);
  }

  render() {
    return (
      <div>
        <Routing />
      </div>
    )
  }
}
