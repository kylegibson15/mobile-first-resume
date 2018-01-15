import React, {Component} from 'react';
import logo from '../assets/images/sea-foam.png';

export default class Logo extends Component {

  render() {
    return (<div className="logo-container">
      <div className="title">
        <h1>Kyle Gibson</h1>
        <h6>Software Engineer</h6>
      </div>

      <div className="nav-line"></div>

      <div className="l-container">
        <div id="ball" className="logo-background">
          <img className="logo" alt="logo" src={logo}/>
        </div>
      </div>

      <div>
        <svg class="arrows bounce">
          <path d="M0 20 L20 42 L40 20"></path>
          <path d="M0 30 L20 52 L40 30"></path>
        </svg>
      </div>

    </div>)
  }
}
