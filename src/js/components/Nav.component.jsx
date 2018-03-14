import React from 'react';
import { Link, Route } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <img src="images/JT-logo-2x.png" alt="" class="jt-logo" />
            <ul>
              <li className="links active-link"><a href="index.html">Portfolio</a></li>
              <li className="links"><a href="images/Joseph_Tongay_Resume.pdf" target="_Nameblank">Resume</a></li>
              <li className="links"><a href="http://jtongay-challenge.ghost.io/" target="_Nameblank">Blog</a></li>
              <li className="links"><a href="mailto:joseph.tongay@gmail.com">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;