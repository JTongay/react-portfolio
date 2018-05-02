import React from 'react';
import { Link, Route } from 'react-router-dom';

import '../../styles/ProjectBadges.scss';

const ProjectBadges = (props) => {

  return (
    <div className="badge">
      <div className="badge-container">
        <img className="badge-image" src={props.project.imageUrl} alt=""/>
        <div className="badge-body">
          <h2 className="badge-title">{props.project.projectName}</h2>
          <p className="badge-text">{props.project.projectShort}</p>
          <Route 
            render={({history}) => (
              <button className="badge-button" onClick={() => history.push(`/${props.project.id}`)}>See Project</button>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectBadges;