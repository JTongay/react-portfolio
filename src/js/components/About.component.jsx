import React from 'react';

import Joey from '../../../assets/Joey-1.jpg';
import '../../styles/About.scss';

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-me'>
        <h1>My name is Joseph Tongay</h1>
        <img src={Joey} alt='joey-pic' className='joey-pic' />
        <h2>I am a Software Engineer with a curious mind and a will to embrace any new technology to solve any problem.</h2>
        <p>I create mobile-responsive, test-driven applications in Node, Express, Ruby on Rails, Angular, and React with SQL databases.
          My education in the Galvanize Web Development Immersive program has prepared me to take on new challenges head first and taught me how to learn.
          I have over a year of experience working as a QA Automation Engineer in an agile environment working very close with product managers, developers, and scrum masters.
          Below is a collection of a few projects I have done.
        </p>
      </div>
    </section>
  )
};

export default About;
