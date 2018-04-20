import React from 'react';

import '../../styles/ProjectInfo.scss';

const ProjectInfo = (props) => {
  
  return (
    // All of this should come from props
    <section className="project-info">
      <h1>{props.project.project_name}</h1>
      <p>{props.project.project_story}</p>
      <p>{props.project.project_about}</p>
    </section>
  )
}

export default ProjectInfo;