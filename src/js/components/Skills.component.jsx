import React from 'react';

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
    <div>
      <span className="skills-used">Skills used - {skillsUsed}</span>
    </div>
  )

}

export default Skills;