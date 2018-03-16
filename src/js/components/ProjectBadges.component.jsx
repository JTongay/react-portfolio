import React from 'react';

import '../../styles/ProjectBadges.scss';

const ProjectBadges = (props) => {
  return (
    <section className="icons" id="icons-section">
      <div className="card">
        <h3>Title</h3>
        <h4>Subtitle</h4>
        <img src={props.imageUrl} alt={props.projectName} />
        <p>Quick flavor text</p>
        <button>Link to project info</button>
      </div>
    </section>
  )
}

export default ProjectBadges;