import React, {Component} from 'react';
import logo from '../assets/images/main/blue.png';


export default class Main extends Component {

  render() {
    return (
      <div className="main-container">
        <div className="inner-main">

          <div className="logo-name-container">
            {/* <img className="main-logo" src={logo}/> */}
            <div>
              <h1 className="name">KYLE GIBSON</h1>
              <h4 className="name-t">SOFTWARE ENGINEER</h4>
            </div>

          </div>

        </div>

      </div>
  )}
}
