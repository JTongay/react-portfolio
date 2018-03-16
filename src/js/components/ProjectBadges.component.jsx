import React from 'react';

const ProjectBadges = (props) => {
  return (
    <section class="icons" id="icons-section">
      <figure class="tint">
        <img src={props.imageUrl} alt={props.projectName} />
      </figure>
    </section>
  )
}

export default ProjectBadges;