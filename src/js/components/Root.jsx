import React from 'react';

import Routing from '../routing.jsx';
import firebase from 'firebase';

import FIREBASE_CONFIG from '../firebase/config';

import '../../styles/main.scss';

export default class Root extends React.Component {
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
