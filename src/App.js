import React, {Component} from 'react';
import './App.css';
import Logo from './components/Logo';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);

    this.state = {
      bounceClass: null,
      lineClass: null,
      logoClass: null,
      scrollingLock: false
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
    window.addEventListener('scroll', this.handleScroll);
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
  goToContactPage() {
    this.refs.hello.scrollIntoView();
  }

  render() {
    return (<div className="App">
      <Logo bounceClass={this.state.bounceClass} lineClass={this.state.lineClass} logoClass={this.state.logoClass}/>
      <AboutMe goToContactPage={this.goToContactPage} scrollingLock={this.state.scrollingLock} />
      <Skills/>
      <Projects/>
      <Contact name="contact"/>
    </div>);
  }
}

export default App;
