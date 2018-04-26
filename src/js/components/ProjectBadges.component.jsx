import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardTitle, Row, Col } from 'react-materialize';

import '../../styles/ProjectBadges.scss';

const ProjectBadges = (props) => {
  return (
    // <div className="icons" id="icons-section">
    //   <div className="card">
    //     <h3>{props.project.projectName}</h3>
    //     <h4>{props.project.projectShort}</h4>
    //     <img src={props.project.imageUrl} alt={props.project.projectName} />
    //     <button><Link to={`/${props.project.id}`} >See Project</Link></button>
    //   </div>
    // </div>
  
    <Card
      className="icons large"
      header={<CardTitle image={props.project.imageUrl}>{props.project.projectName}</CardTitle>}
      actions={[<Link to={`/${props.project.id}`} >See Project</Link>]}>
      <p>
        {props.project.projectShort}
      </p>
    </Card>
  )
}

export default ProjectBadges;