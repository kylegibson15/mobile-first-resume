import React, { Component } from 'react';

export default class Navigation extends Component {

  render(){
    return (
      <div className="navigation-container" style={{ position: this.props.scrollingLock ? "fixed" : "absolute", top: this.props.scrollingLock ? "0" : null}}>
        <a onClick={this.props.goToContactPage} className="contact-info" style={{color: this.props.contactOrTop ? "black" : "white", borderBottom: this.props.contactOrTop ? null : ".2px solid white" }}>
          <h5>{this.props.contactOrTop ? "Contact Me" : "Back To Top"}</h5>
        </a>
      </div>
    )
  }
}
