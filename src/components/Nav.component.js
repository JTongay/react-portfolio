import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/JT-logo-2x.png';
import Resume from '../assets/Joseph_Tongay_Resume.pdf';
import '../styles/css/Nav.css';

const Nav = () => {
  return (
    <nav>
      <Link to='/' className='logo-container'>
        <img src={Logo} alt='jt-logo' className='jt-logo' />
      </Link>
      <div className='links-container'>
        <div className='links active-link'><Link to=''>Portfolio</Link></div>
        <div className='links'><a href={Resume} target='_blank' rel='noopener noreferrer'>Resume</a></div>
        <div className='links'><a href='https://medium.com/@dirk.tongay' target='_blank' rel='noopener noreferrer'>Blog</a></div>
        <div className='links'><a href='mailto:joseph.tongay@gmail.com'>Contact</a></div>
      </div>
    </nav>
  )
};

export default Nav;
