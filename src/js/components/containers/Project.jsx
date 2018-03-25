import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import firebase from 'firebase';

import ProjectInfo from '../ProjectInfo.component.jsx';

export default class Project extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.routeId = this.props.match.params.id;
    this.database = firebase.database().ref(`projects/${this.routeId - 1}`);
    this.state = {
      project: {}
    }
  }

  componentWillMount() {
    this.database.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        project: snapshot.val()
      });
    })
  }

  render() {
    if (!this.state.project) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div>
        <ProjectInfo project={this.state.project} />
      </div>
    )
  }
}