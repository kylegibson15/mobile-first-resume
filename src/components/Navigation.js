import React, {Component} from 'react';

export default class Navigation extends Component {

  render() {
    return (<div className="navigation-container" style={{
        position: this.props.scrollingLock
          ? "fixed"
          : "absolute",
        top: this.props.scrollingLock
          ? "0"
          : null
      }}>
      <img className="nav-logo" src='https://d22lxpqe1nsxs.cloudfront.net/blue.png'/>
      <a onClick={this.props.goToContactPage} className="contact-info">
        <h5>{
            this.props.contactOrTop
              ? "contact me"
              : "back to top"
          }</h5>
      </a>
    </div>)
  }
}
