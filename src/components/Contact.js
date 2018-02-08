import React, {Component} from 'react';
import github from '../assets/images/white-github.png';
import linkedin from '../assets/images/white-linkedin-icon.png';
import facebook from '../assets/images/white-facebook.png';
import instagram from '../assets/images/white-instagram-icon.png';
import phone from '../assets/images/white-phone.png';
import email from '../assets/images/white-G-mail.png';

export default class Contact extends Component {

  render() {
    return (<div className="contact-container">
      <div class="name-title">
        <h1>Kyle Gibson</h1>
        <span>Software Engineer</span>
      </div>

      <div className="card">


        <div className="contact-title">


          <div className="phone-email">
              <a href="tel:+12705773957" className="phone"><img className="ph-mail-icon" alt="orange-phone" src={phone}/>call</a>
              <a className="email" href="mailto:kylegibson15@gmail.com"><img className="ph-mail-icon" alt="orange-email" src={email}/>mail</a>
          </div>

        </div>

        {/* <div className="contact-other-info">
          <div className="other-info-wrapper">
            <h1>DROP ME A LINE - </h1>
            <h2>I would love to answer any questions you have.</h2>
          </div>
        </div> */}



        <div className="social-links">
          <a href="https://www.facebook.com/kyle.gibson.3194"><img className="contact-icon" alt="facebook" src={facebook}/></a>

          <a href="https://github.com/kylegibson15"><img className="contact-icon" alt="github" src={github}/></a>

          <a href="https://www.linkedin.com/in/kylegibson15"><img className="contact-icon" alt="linkedIn" src={linkedin}/></a>

          <a href="https://www.instagram.com/1gibby4/?hl=en"><img className="contact-icon" alt="instagram" src={instagram}/></a>
        </div>

      </div>
      <div className="copyright">
        <p>&copy; Kyle Gibson</p>
      </div>
    </div>)
  }
}
