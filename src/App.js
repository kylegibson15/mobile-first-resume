import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo';
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Projects />
      </div>
    );
  }
}

export default App;
