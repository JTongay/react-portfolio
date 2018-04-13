import React from 'react';

import { Skills } from '../components/Skills.component.jsx';
import '../../styles/ProjectInfo.scss';

const ProjectInfo = (props) => {

  const githubLinks = props.links[0]
  const showGithubLinks = (links) => {
    const linksArr = []
    for (let val in links) {
      linksArr.push(links[val])
      // return <a href={links[val]}>Github</a>
    }
    return linksArr.map((link) => {
      if (link.includes('frontend')) {
        return <a href={link}>Frontend Github</a>
      } else if (link.includes('backend')){
        return <a href={link}>Backend Github</a>
      } else {
        return <a href={link}>Github</a>
      }
    })
    
  }
  const showSkills = (skills) => {
    const skillsArr = [];
    for (let val in skills) {
      skillsArr.push(skills[val])
    }
    const skillsUsed = skillsArr.join(', ')
    return <span className="skills-used">Skills used - {skillsUsed}</span>
  }
  console.log(props.skills)
  return (
    // All of this should come from props
    <section class="project-info">
      <h1>{props.project.project_name}</h1>
      <p>{props.project.project_story}</p>
      <p>{props.project.project_about}</p>
      {/* Make this the Skills Component */}
      {showSkills(props.skills)}
      {/* {(props.skills === {}) ? <Skills skills={props.skills} /> : null} */}
      {/* Make this Dynamic via props */}
      <img src={props.project.image_url} alt="" class="project-screenshot" />
      <div class="live-link">
        { props.links[1] ? <a href={props.links[1]} target="_blank">Live Link</a> : '' }
        {showGithubLinks(githubLinks)}
        {/* <a href={props.links[0]} target="_blank">Github</a> */}
      </div>
    </section>
  )
}

export default ProjectInfo;