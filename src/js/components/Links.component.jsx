import React from 'react';

import '../../styles/Links.scss';

const Links = (props) => {

  const showGithubLinks = (links) => {
    const linksArr = []
    for (let val in links) {
      linksArr.push(links[val])
      // return <a href={links[val]}>Github</a>
    }
    return linksArr.map((link) => {
      if (link.includes('frontend')) {
        return <a href={link}>Frontend Github</a>
      } else if (link.includes('backend')) {
        return <a href={link}>Backend Github</a>
      } else {
        return <a href={link}>Github</a>
      }
    })

  }

  return (
    <div class="links-container">
      {props.links[1] ? <a href={props.links[1]} target="_blank">Live Link</a> : ''}
      {showGithubLinks(props.links[0])}
    </div>
  )

}

export default Links;