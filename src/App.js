import React, {Component} from 'react';
import './App.css';

import Main from './components/Main';
import AboutMeV2 from './components/AboutMeV2';
import ContactV2 from './components/ContactV2';
// import ProjectsV2 from './components/ProjectsV2';
import HealthAlarm from './components/HealthAlarm';
import Sleuth from './components/Sleuth';
import Slelp from './components/Slelp';
import Brunch from './components/Brunch';
import { LandingPage } from './components/LandingPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollingLock: false,
      contactOrTop: true
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.goToContactPage = this.goToContactPage.bind(this)
    this.handleContactText = this.handleContactText.bind(this)
    this.scrollDownComponent = this.scrollDownComponent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.handleContactText);
    window.addEventListener('scroll', this.scrollDownComponent);

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  scrollDownComponent() {
    // if (window.scrollY) {}

  }
  handleScroll() {
    let Y = window.innerHeight
    if (window.scrollY > Y) {
      this.setState({scrollingLock: true});
    } else if (window.scrollY < Y) {
      this.setState({scrollingLock: false});
    }
  }
  handleContactText() {
    let contactY = window.innerHeight * 5 + (window.innerHeight / 2)
    if (window.scrollY > contactY) {
      this.setState({contactOrTop: false})
    } else {
      this.setState({contactOrTop: true})
    }
  }
  goToContactPage() {
    let contactY = window.innerHeight * 5
    let contact = document.getElementsByClassName("contactv2-container")[0]
    let top = document.getElementsByClassName("aboutmev2-container")[0]
    if (window.scrollY > contactY) {
      top.scrollIntoView({behavior: 'smooth'})
    } else {
      contact.scrollIntoView({behavior: 'smooth'})
    }
  }

  render() {
    return (<div className="App">
      <LandingPage />
      {/* <Main/> */}

      <AboutMeV2 contactOrTop={this.state.contactOrTop} goToContactPage={this.goToContactPage} scrollingLock={this.state.scrollingLock}/> {/* <ProjectsV2 /> */}
      <HealthAlarm/>
      <Sleuth/>
      <Slelp/>
      <Brunch/>

      <ContactV2 text={this.state.text} changeValue={this.changeValue} count={this.state.count}/>

    </div>);
  }
}

export default App;
