import React from 'react';

import '../../styles/ProjectBadges.scss';

const ProjectBadges = (props) => {
  return (
    <div className="icons" id="icons-section">
      <div className="card">
        <h3>{props.project.projectName}</h3>
        <h4>{props.project.projectAbout}</h4>
        <img src={props.project.imageUrl} alt={props.project.projectName} />
        <button>Link to project info</button>
      </div>
    </div>
  )
}

export default ProjectBadges;