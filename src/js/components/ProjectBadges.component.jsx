import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/ProjectBadges.scss';

const ProjectBadges = (props) => {

  const imageStyle = {
    backgroundImage: `url(${props.project.imageUrl})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTopLeftRadius: '0.25 rem',
    borderTopRightRadius: '0.25 rem',
    filter: 'contrast(70%)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91), -webkit-filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91)'
  }

  return (
    // <div className="icons" id="icons-section">
    //   <div className="card">
    //     <h3>{props.project.projectName}</h3>
    //     <h4>{props.project.projectShort}</h4>
    //     <img src={props.project.imageUrl} alt={props.project.projectName} />
    //     <button><Link to={`/${props.project.id}`} >See Project</Link></button>
    //   </div>
    // </div>
    <div className="badge">
      <div className="badge-container">
        <img className="badge-image" src={props.project.imageUrl} alt=""/>
        <div className="badge-body">
          <h2 className="badge-title">{props.project.projectName}</h2>
          <p className="badge-text">{props.project.projectShort}</p>
          <button className="badge-button"><Link to={`/${props.project.id}`}>See Project</Link></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectBadges;