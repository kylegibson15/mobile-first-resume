import React, { Component } from 'react';
import logo from '../assets/images/main/blue.png';

export default class Navigation extends Component {

  render(){
    return (
      <div className="navigation-container" style={{ position: this.props.scrollingLock ? "fixed" : "absolute", top: this.props.scrollingLock ? "0" : null}}>
        <img className="nav-logo" src={logo}/>
        <a onClick={this.props.goToContactPage} className="contact-info" >
          <h5>{this.props.contactOrTop ? "Contact Me" : "Back To Top"}</h5>
        </a>
      </div>
    )
  }
}
