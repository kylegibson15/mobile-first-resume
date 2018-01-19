import React, {Component} from 'react';
import github from '../assets/images/github-logo.png';
import linkedin from '../assets/images/linkedin-logo.png';

export default class Contact extends Component {

  render() {
    return (<div className="contact-container">
      <div className="card">

        <div className="contact-title">
          <h1>Kyle Gibson</h1>
          <span>Software Engineer</span>
        </div>

        <div className="social-links">
          <a href="https://github.com/kylegibson15"><img className="contact-icon" alt="github" src={github}/></a>
          <a href="https://www.linkedin.com/in/kylegibson15"><img className="contact-icon" alt="linkedIn" src={linkedin}/></a>
        </div>

        <div className="phone-email">
            <a href="tel:+12705773957" className="phone">+1-270-577-3957</a>
            <a className="email" href="mailto:kylegibson15@gmail.com">kylegibson15@gmail.com</a>
        </div>

      </div>
    </div>)
  }
}
