import React, { Component } from 'react';
import Brunch from './projects/Brunch';
import Slelp from './projects/Slelp';
import Sleuth from './projects/Sleuth';

export default class Projects extends Component {

  render(){
    return (
      <div className="projects-container" handleProjectScroll={this.props.handleProjectScroll}>
        <button className="scroll-button">></button>
        <Sleuth />
        <Slelp />
        <Brunch />
      </div>
    )
  }
}
