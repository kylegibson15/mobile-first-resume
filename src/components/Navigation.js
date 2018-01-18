import React, { Component } from 'react';

export default class Navigation extends Component {

  render(){
    return (
      <div className="navigation-container" style={{ position: this.props.scrollingLock ? "fixed" : "absolute", top: this.props.scrollingLock ? "0" : null}}>
        <a onClick={this.props.goToContactPage}className="contact-info">
          <h5>Contact Me</h5>
        </a>
      </div>
    )
  }
}
