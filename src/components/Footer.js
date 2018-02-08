import React, {Component} from 'react';
import github from '../assets/images/github-outline-icon.svg';
import linkedin from '../assets/images/black-outline-linkedin.png';
import phone from '../assets/images/orange-phone.png';
import email from '../assets/images/orange-email.png';

export default class Footer extends Component {

  render() {
    return (<div className="footer">
      <div className="copyright">
        <span>&copy; Kyle Gibson</span>
      </div>
    </div>)
  }
}
