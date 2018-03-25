import React from 'react';

export default class ProjectInfo extends React.Component {

  constructor(props) {
    super(props)
    this.hasGithubLinks = this.hasGithubLinks.bind(this);
    this.state = {
      project: {}
    }
  }

  hasGithubLinks(links) {
    console.log(links, "getting links from props");
    if (links) {
      return links.map((link) => {
        <a href={link} target="_blank">Github</a>
      })
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     project: nextProps
  //   })
  // }

  render() {
    const hasGithubLinks = this.props.links.github;
    return (
      // All of this should come from props
      <section class="pokestay" id="poke-section">
        <h1>{this.props.project.project_name}</h1>
        <p>{this.props.project.project_story}</p>
        <p>{this.props.project.project_about}</p>
        {/* Make this the Skills Component */}
        <p class="skills-used">Skills used - HTML5, CSS, Bootstrap, jQuery, Paper.js</p>
        {/* Make this Dynamic via props */}
        <img src={this.props.project.image_url} alt="" />
          <div class="live-link">
            <a href="https://jtongay.github.io/q1-pokemon-stay/" target="_blank">Live Link</a>
            {/* {this.hasGithubLinks(this.state.project.links.github)} */}
            {/* {hasGithubLinks.length > 0 && 
            <a href={this.props.links.github[0]} target="_blank">Github</a>
            } */}
          </div>
      </section>
    )
  }
}