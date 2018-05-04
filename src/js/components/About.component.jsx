import React from 'react';

import Joey from '../../../assets/Joey-1.jpg';
import '../../styles/About.scss';

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-me'>
        <img src={Joey} alt='joey-pic' className='joey-pic' />
        <h1>Hello! I'm Joseph Tongay!</h1>
        <h2>I am a Software Engineer with a curious mind and a will to embrace any new technology to solve any problem.</h2>
        <p>I create mobile-responsive, test-driven applications in Node, Express, Angular, and postgreSQL. My education in the Galvanize Web Development Immersive program has prepared me to take on new challenges head first and taught me how to learn. I started a blog following my adventures in a year long coding challenge where I code for at least one hour a day, every day, for a year. Below is a collection of a few projects I have done.</p>
      </div>
    </section>
  )
};

export default About;
