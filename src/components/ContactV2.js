import React, {Component} from 'react';

export default class ContactV2 extends Component {

  render() {
    return (<div className="contactv2-container">

      <div className="contact-me">
        <h1>contact me</h1>
      </div>

      <div className="infov2">
        <div className="phone-emailv2">
          <a href="tel:+12705773957" className="phone"><img className="ph-mail-icon" alt="orange-phone" src='https://s3.amazonaws.com/www.kylegibson15.com/white-phone.png'/>CALL</a>
          <a className="email" href="mailto:kylegibson15@gmail.com"><img className="ph-mail-icon" alt="orange-email" src='https://s3.amazonaws.com/www.kylegibson15.com/white-G-mail.png'/>MAIL</a>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/kyle.gibson.3194" target="_blank"><img className="contact-icon" alt="facebook" src='https://s3.amazonaws.com/www.kylegibson15.com/white-fb-icon-facebook.png'/></a>

          <a href="https://github.com/kylegibson15" target="_blank"><img className="contact-icon" alt="github" src='https://s3.amazonaws.com/www.kylegibson15.com/white-github.png'/></a>

          <a href="https://www.linkedin.com/in/kylegibson15" target="_blank"><img className="contact-icon" alt="linkedIn" src='https://s3.amazonaws.com/www.kylegibson15.com/white-linkedin-icon.png'/></a>

          <a href="https://www.instagram.com/1gibby4/?hl=en" target="_blank"><img className="contact-icon" alt="instagram" src='https://s3.amazonaws.com/www.kylegibson15.com/white-instagram-icon.png'/></a>
        </div>
      </div>

    </div>)
  }
}
