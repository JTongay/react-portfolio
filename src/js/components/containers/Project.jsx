import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import firebase from 'firebase';

import ProjectInfo from '../ProjectInfo.component.jsx';
import Skills from '../Skills.component.jsx';
import ProjectPic from '../ProjectPic.component.jsx';
import Links from '../Links.component.jsx';

import '../../../styles/Project.scss';

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
  }
  
  componentWillMount() {
    this.linkRef.on('value', (snap) => {
      console.log(snap)
      const linksArr = convertToArray(snap)
      this.setState({
        links: linksArr
      })
    });
    this.skillsRef.on('value', (snap) => {
      const skillsArr = convertToArray(snap)
      this.setState({
        skills: skillsArr
      })
    });
    this.database.on('value', (snapshot) => {
      this.setState({
        project: snapshot.val()
      });
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.state.project) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="project-container">
        <ProjectInfo project={this.state.project} />
        <Skills skills={this.state.skills} />
        <ProjectPic image={this.state.project.image_url} />
        <Links links={this.state.links} />
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