import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/ProjectPic.scss';

const ProjectPic = (props) => {

  return (
    <div className='image-container'>
      <img src={props.image} alt='' className='project-screenshot' />
    </div>
  )
};

ProjectPic.propTypes = {
  image: PropTypes.any
};

export default ProjectPic;
