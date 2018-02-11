import React, {Component} from 'react';
import './App.css';
import Logo from './components/Logo';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Main from './components/Main';
import AboutMeV2 from './components/AboutMeV2';
import ContactV2 from './components/ContactV2';
import ProjectsV2 from './components/ProjectsV2';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bounceClass: null,
      lineClass: null,
      logoClass: null,
      scrollingLock: false,
      contactOrTop: true,
    }

    this.handleLoad = this.handleLoad.bind(this);
    this.handleScroll = this.handleScroll.bind(this)
    this.goToContactPage = this.goToContactPage.bind(this)
    this.handleContactText = this.handleContactText.bind(this)
    this.handleProjectScroll = this.handleProjectScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.handleContactText)
    window.addEventListener('scroll', this.handleProjectScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleLoad() {
    this.setState({lineClass: "hover", logoClass: "logo-hover"})
    setTimeout(function() {
      this.setState({bounceClass: "bounce"})
    }.bind(this), 2000)
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
    let contactY = window.innerHeight * 2 + (window.innerHeight / 2)
    if(window.scrollY > contactY){
      this.setState({contactOrTop: false})
    }else{
      this.setState({contactOrTop: true})
    }
  }
  goToContactPage() {
    let contactY = window.innerHeight * 2
    let contact = document.getElementsByClassName("contactv2-container")[0]
    let top = document.getElementsByClassName("aboutmev2-container")[0]
    if(window.scrollY > contactY){
      top.scrollIntoView({behavior: 'smooth'})
    }else{
      contact.scrollIntoView({behavior: 'smooth'})
    }
  }
  handleProjectScroll(){
    let projectX = window.innerWidth
  }
  render() {
    return (<div className="App">
      <Main />

      {/* <Logo bounceClass={this.state.bounceClass} lineClass={this.state.lineClass} logoClass={this.state.logoClass}/> */}

      <AboutMeV2 contactOrTop={this.state.contactOrTop} goToContactPage={this.goToContactPage}
        scrollingLock={this.state.scrollingLock}/>
      {/* <AboutMe contactOrTop={this.state.contactOrTop} goToContactPage={this.goToContactPage} scrollingLock={this.state.scrollingLock} /> */}

      {/* <Projects handleProjectScroll={this.handleProjectScroll}/> */}
      <ProjectsV2 />

      
      {/* <Skills/> */}

      <ContactV2 />
      {/* <Contact ref="contactMe" name="contact"/> */}
    </div>);
  }
}

export default App;
