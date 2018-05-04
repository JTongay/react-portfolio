import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/ProjectInfo.scss';

const ProjectInfo = (props) => {

  return (
    <section className='project-info'>
      <h1>{props.project.project_name}</h1>
      <p>{props.project.project_story}</p>
      <p>{props.project.project_about}</p>
    </section>
  )
};

ProjectInfo.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectInfo;
