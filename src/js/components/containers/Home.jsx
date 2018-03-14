import React from 'react';
import Nav from '../Nav.component.jsx';
import About from '../About.component.jsx';

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-container">
        <div className="body-container">
          <About />
        </div>
      </div>
    )
  }
}