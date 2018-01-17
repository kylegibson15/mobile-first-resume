import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);

    this.state = {
      bounceClass: null,
      lineClass: null,
      logoClass: null
    }
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.setState({
      lineClass: "hover",
      logoClass: "logo-hover",
    })
    setTimeout(function() {this.setState({bounceClass: "bounce"})}.bind(this), 2000)
  }
  render() {
    return (
      <div className="App">
        <Logo bounceClass={this.state.bounceClass} lineClass={this.state.lineClass} logoClass={this.state.logoClass}/>
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
