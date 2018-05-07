import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Links.scss';

const Links = (props) => {

  const showGithubLinks = (links) => {
    const linksArr = [];
    for (let val in links) {
      linksArr.push(links[val])
    }
    return linksArr.map((link, index) => {
      if (link.includes('frontend')) {
        return <a href={link} key={index} className='link' target='_blank'>Frontend Github</a>
      } else if (link.includes('backend')) {
        return <a href={link} key={index} className='link' target='_blank'>Backend Github</a>
      } else {
        return <a href={link} key={index} className='link' target='_blank'>Github</a>
      }
    })

  };

  return (
    <div className='links-container'>
      {props.links[1] ? <a href={props.links[1]} target='_blank' className='link'>Live Link</a> : null}
      {showGithubLinks(props.links[0])}
    </div>
  )

};

Links.propTypes = {
  links: PropTypes.any.isRequired
};


export default Links;
