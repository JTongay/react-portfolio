import React from 'react';

import '../../styles/Skills.scss';

const Skills = (props) => {

  let skillsUsed;

  if (props.skills) {
    const skillsArr = [];
    for (let val in props.skills) {
      skillsArr.push(props.skills[val])
    }
    skillsUsed = skillsArr.join(', ')
  }
  console.log(skillsUsed)

  return (
    <div className="skills-container">
      <span className="skills-used">Skills used - {skillsUsed}</span>
    </div>
  )

}

export default Skills;