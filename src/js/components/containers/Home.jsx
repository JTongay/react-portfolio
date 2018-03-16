import React from 'react';
import firebase from 'firebase';

import About from '../About.component.jsx';
import ProjectBadges from '../ProjectBadges.component.jsx';

import FIREBASE_CONFIG from '../../firebase/config';

export default class HomeComponent extends React.Component {

  constructor(props) {
    super(props)
    this.app = firebase.initializeApp(FIREBASE_CONFIG);
    this.database = this.app.database().ref().child('projects')
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
        projectAbout: snap.val().project_about,
        presentationLink: snap.val().presentation_link,
        skills: snap.val().skills,
        links: snap.val().links
      })
    });
    this.setState({
      projects: loadedProjects
    })
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="app-container">
        <div className="body-container">
          <About />
          {this.state['projects'].map(project =>
            <ProjectBadges key={project.id} imageUrl={project.imageUrl} projectName={project.projectName} />
          )}
          {this.state.projects.map(data =>
            <h1>booyah</h1>
          )}
          <ProjectBadges key="1" imageUrl="https://i.lensdump.com/i/8RSZTo.png" projectName="booyah" />
        </div>
      </div>
    )
  }
}