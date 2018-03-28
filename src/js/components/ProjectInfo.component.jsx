import React from 'react';

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
  
  return (
    // All of this should come from props
    <section class="pokestay" id="poke-section">
      <h1>{props.project.project_name}</h1>
      <p>{props.project.project_story}</p>
      <p>{props.project.project_about}</p>
      {/* Make this the Skills Component */}
      {showSkills(props.skills)}
      {/* Make this Dynamic via props */}
      <img src={props.project.image_url} alt="" />
      <div class="live-link">
        <a href="https://jtongay.github.io/q1-pokemon-stay/" target="_blank">Live Link</a>
        {showGithubLinks(githubLinks)}
        {/* <a href={props.links[0]} target="_blank">Github</a> */}
      </div>
    </section>
  )
}

export default ProjectInfo;