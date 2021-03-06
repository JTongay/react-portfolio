import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/Skills.css';

const Skills = (props) => {

  let skillsUsed;

  if (props.skills) {
    const skillsArr = [];
    for (let val in props.skills) {
      skillsArr.push(props.skills[val]);
    }
    skillsUsed = skillsArr.join(', ');
  }

  return (
    <div className='skills-container'>
      <span className='skills-used'>Skills used - {skillsUsed}</span>
    </div>
  )

};

Skills.propTypes = {
  skills: PropTypes.any.isRequired
};

export default Skills;
