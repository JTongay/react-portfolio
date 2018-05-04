import React from 'react';

import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className='contact'>
      <div className='contact-container'>
        <a href='https://github.com/JTongay/' target='_blank'>
          <i className='fa fa-github fa-5x contact-icons' aria-hidden='true' />
        </a>
        <a href='https://www.linkedin.com/in/josephtongay' target='_blank'>
          <i className='fa fa-linkedin fa-5x contact-icons' aria-hidden='true' />
        </a>
        <a href='https://twitter.com/JosephTongay' target='_blank'>
          <i className='fa fa-twitter fa-5x contact-icons' aria-hidden='true' />
        </a>
      </div>
    </footer>
  )
};

export default Footer;
