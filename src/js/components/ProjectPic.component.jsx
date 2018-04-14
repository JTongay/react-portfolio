import React from 'react';

import '../../styles/ProjectPic.scss';

const ProjectPic = (props) => {

  return (
    <div className="image-container">
      <img src={props.image} alt="" className="project-screenshot" />
    </div>
  )

}

export default ProjectPic;