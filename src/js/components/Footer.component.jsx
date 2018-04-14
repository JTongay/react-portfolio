import React from 'react';

import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <footer class="contact">
        <div class="contact-container">
            <a href="https://github.com/JTongay/" target="_blank">
                <i class="fa fa-github fa-5x contact-icons" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/josephtongay
" target="_blank">
                <i class="fa fa-linkedin fa-5x contact-icons" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/JosephTongay" target="_blank">
                <i class="fa fa-twitter fa-5x contact-icons" aria-hidden="true"></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer;