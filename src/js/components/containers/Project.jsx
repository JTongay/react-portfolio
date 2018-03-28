import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import firebase from 'firebase';

import ProjectInfo from '../ProjectInfo.component.jsx';

export default class Project extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.routeId = this.props.match.params.id;
    this.database = firebase.database().ref(`projects/${this.routeId - 1}`);
    this.linkRef = firebase.database().ref(`projects/${this.routeId - 1}/links`);
    this.skillsRef = firebase.database().ref(`projects/${this.routeId - 1}/skills`);
    this.state = {
      project: {},
      links: {},
      skills: {}
    }
    this.linkRef.on('value', (snap) => {
      const linksArr = convertToArray(snap)
      console.log(linksArr, 'linksArr')
      this.setState({
        links: linksArr
      })
    });
    this.skillsRef.on('value', (snap) => {
      const skillsArr = convertToArray(snap)
      console.log(skillsArr, 'skillsArr')
      this.setState({
        skills: skillsArr
      })
    });
  }

  componentWillMount() {
    this.database.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        project: snapshot.val()
      });
    });
  }

  render() {
    // this.setState({
    //   links: this.state.links.split(','),
    //   skills: this.state.skills.split(',')
    // })
    if (!this.state.project) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div>
        <ProjectInfo project={this.state.project} links={this.state.links} skills={this.state.skills} />
      </div>
    )
  }
}

function convertToArray(snapshot) {
  const returnArr = [];
  snapshot.forEach((snap) => {
    const item = snap.val()
    returnArr.push(item)
  })
  return returnArr;
}