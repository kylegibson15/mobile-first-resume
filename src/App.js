import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
