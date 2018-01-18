import React, {Component} from 'react';
import headshot from '../assets/images/headshot.jpg';
import Navigation from './Navigation';

export default class AboutMe extends Component {

  render() {
    return (<div>
      <Navigation goToContactPage={this.props.goToContactPage} scrollingLock={this.props.scrollingLock}/>
      <div className="aboutme-container">

        <div className="image">
          <img className="headshot" alt="" src={headshot}/>
        </div>
        <div className="description">
          <p>Hi.</p>
          <p>I'm Kyle Gibson.</p>
          <p>I'm a software engineer.</p>
          <p>
            My journey started in a small town in Kentucky. Very active with sports and activities and continued with a bachelor of science in exercise science. But I wasn’t finding the job that I wanted that would allow me to grow and help people like I thought I would be able to.
            <br/>
            <br/>
            I discovered code when I moved to Colorado in early 2016 and it just sucked me in because I had a realization that I could be a part of something bigger than my self in something that keeps me up at night and I can be passionate about.
            <br/>
            <br/>
            I've always been curious about the world around me and interested in solving problems that have the ability to help make peoples lives better and code seems to marry those passions for me.
            <br/>
            <br/>
            There seems to be a never ending amount of things you can learn and create with code, and that's what excites me!</p>
        </div>
      </div>
    </div>)
  }
}
