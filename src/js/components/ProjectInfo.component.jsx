import React from 'react';

const ProjectInfo = () => {
  return (
    // All of this should come from props
    <section class="pokestay" id="poke-section">
      <h1>Pokemon Stay!</h1>
      <p>This was my very first project in my attendance at Galvanize. Just one month into the program, I was proficient in creating a static application using AJAX to make external API calls while utilizing bootstrap to create a responsive layout and the HTML5 canvas tag to create animations.</p>
      <p>Pokemon Stay! is an interactive pokedex where you can browse each generation's pokemon and click on their icon to see more information about the selected pokemon including a YouTube video that is relevant. Also, if you choose the explore, you can control a character using your keyboard to "catch" a randomly generated pokemon, click on its pokeball below and see that pokemon's information that way as well.</p>
      {/* Make this the Skills Component */}
      <p class="skills-used">Skills used - HTML5, CSS, Bootstrap, jQuery, Paper.js</p>
      {/* Make this Dynamic via props */}
      <img src="images/pokestay1.png" alt="" class="pokestay-img" />
        <div class="live-link">
          <a href="https://jtongay.github.io/q1-pokemon-stay/" target="_blank">Live Link</a>
          <a href="https://github.com/jtongay/q1-pokemon-stay/" target="_blank">Github</a>
        </div>
    </section>
  )
}

export default ProjectInfo;