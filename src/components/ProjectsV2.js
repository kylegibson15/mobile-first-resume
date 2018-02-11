import React, {Component} from 'react';
import healthAlarm from '../assets/images/main/HealthAlarm-logo.png';
import sleuth from '../assets/images/main/sleuth-logo.png';
import slelp from '../assets/images/main/slelp-logo.png';
import brunch from '../assets/images/main/brunch-logo.png';

import python from '../assets/images/python-no-border.svg';
import javascript from '../assets/images/js-no-border.svg';
import react from '../assets/images/react-no-border.png';
import node from '../assets/images/node-no-border.svg';


export default class ProjectsV2 extends Component {

  render() {
    return (<div className="projects-containerv2">
      <div className="projects-wrapperv2">

        <div className="project-box">
          <div className="logo-desc">
            <a href="https://github.com/kylegibson15/HealthAlarm">
              <img className="project-logo" src={healthAlarm}/>
            </a>

            <div className="pdv2">
              <p>HealthAlarm is an alarm clock that wakes you up with a game plan for how to start your day. Using Google Home and Google Assistant via Dialogflow API so you can have a conversation to better understand where you are on your personal goals, and health data.
              </p>
            </div>

          </div>

          <div className="project-skills">
            <img className="skill python" src={python}/>
            <img className="skill javascript" src={javascript}/>
            <img className="skill react" src={react}/>
            <img className="skill node" src={node}/>
          </div>

        </div>

        <div className="project-box">
          <div className="logo-desc">
            <a href="https://github.com/g64-sleuth/Sleuth-Chrome">
              <img className="project-logo" src={sleuth}/>
            </a>

            <div className="pdv2">
              <p>Sleuth is an app designed to create an even playing field for all ISPs. When using the app, you can check your download speed and compare top download speeds amongst other ISPs.
              </p>
            </div>

          </div>

        </div>

        <div className="project-box">
          <div className="logo-desc">

            <a href="https://github.com/Slelp/Slelp_2.0">
              <img className="project-logo" src={slelp}/>
            </a>

            <div className="pdv2">
              <p>An app that provides a team quick and easy access to find answered questions, answer questions, and to request help on specific issues.
              </p>
            </div>

          </div>
        </div>

        <div className="project-box">
          <div className="logo-desc">

            <a href="https://github.com/kylegibson15/Brunch.">
              <img className="project-logo" src={brunch}/>
            </a>

            <div className="pdv2">
              <p>Web App that takes on the goal of wanting to be able to search via flavors, specific food items, without having to search through restaurants menus. Let Brunch tell you where what you want to eat is. (specific to Denver and brunch food)
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>)
  }
}
