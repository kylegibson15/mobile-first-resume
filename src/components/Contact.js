import React, {Component} from 'react';
import github from '../assets/images/github-logo.png';
import linkedin from '../assets/images/linkedin-logo.png';

export default class Contact extends Component {

  render() {
    return (<div className="contact-container">
      <div class="card">

        <div class="contact-title">
          <h1>Kyle Gibson</h1>
          <span>Software Engineer</span>
        </div>

        <div className="social-links">
          <a href="https://github.com/kylegibson15"><img className="contact-icon" alt="github" src={github}/></a>
          <a href="https://www.linkedin.com/in/kylegibson15"><img className="contact-icon" alt="linkedIn" src={linkedin}/></a>
        </div>

        <div className="phone-email">
            <p>+1-270-577-3957</p>
            <p>kylegibson15@gmail.com</p>
        </div>

      </div>
    </div>)
  }
}
