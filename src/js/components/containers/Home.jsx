import React from 'react';
import firebase from 'firebase';
import { Button } from 'react-materialize'

import About from '../About.component.jsx';
import ProjectBadges from '../ProjectBadges.component.jsx';

import FIREBASE_CONFIG from '../../firebase/config';

import '../../../styles/Home.scss';

export default class HomeComponent extends React.Component {

  constructor(props) {
    super(props)
    this.database = firebase.database().ref().child('projects')
    this.state = {
      projects: [],
      test: []
    }
  }

  componentWillMount() {
    const loadedProjects = this.state.projects;
    this.database.on('child_added', snap => {
      loadedProjects.push({
        id: snap.val().id,
        projectName: snap.val().project_name,
        imageUrl: snap.val().image_url,
        projectStory: snap.val().project_story,
        projectShort: snap.val().project_short,
        projectAbout: snap.val().project_about,
        presentationLink: snap.val().presentation_link,
        skills: snap.val().skills,
        links: snap.val().links
      })
      this.setState({
        projects: loadedProjects
      })
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className="body-container">
          <About />
          <div className="badges-wrapper">
            {this.state.projects.map(project =>
              <ProjectBadges key={project.id} project={project} />
            )}
          </div>
        </div>
      </div>
    )
  }
}