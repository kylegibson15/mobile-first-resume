import React, {Component} from 'react';

import healthAlarm from '../assets/images/main/HealthAlarm-logo.png';
import sleuth from '../assets/images/main/sleuthv2-logo.png';
import slelp from '../assets/images/main/slelpApp-logo.png';
import brunch from '../assets/images/main/brunch-logo.png';

import python from '../assets/images/skills/Python-Logo-PNG-Image.png';
import javascript from '../assets/images/skills/ruuvi-tag-javascript.png';
import react from '../assets/images/skills/reactjs2.png';
import reactNative from '../assets/images/skills/react-native.png';
import node from '../assets/images/skills/node.png';
import css from '../assets/images/skills/css3-logo.png';
import html from '../assets/images/html5-no-border.svg';
import dialogflow from '../assets/images/skills/dialogflow.png';
import express from '../assets/images/skills/express.svg';
import googleHome from '../assets/images/skills/google_home.png';
import googleAssistant from '../assets/images/skills/google-assistant.png';
import googleChrome from '../assets/images/skills/google-chrome.ico';
import handlebars from '../assets/images/skills/handlebars-logo.png';
import jsx from '../assets/images/skills/jsx.png';
import knex from '../assets/images/skills/knex.png';
import postgres from '../assets/images/skills/postgresql-logo.png';
import raspberryPi from '../assets/images/skills/raspberry-pi-logo.png';
import swift from '../assets/images/skills/swift.png';

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
              <p>Wakes you up with a game plan for how to start your day. Understand where you are on your personal goals and overall health.
              </p>
            </div>

          </div>

          {/* <div className="project-skills">
            <img className="skill swift" src={swift}/>
            <img className="skill python" src={python}/>
            <img className="skill javascript" src={javascript}/>
            <img className="skill reactNative" src={reactNative}/>
            <img className="skill googleHome" src={googleHome}/>
            <img className="skill googleAssistant" src={googleAssistant}/>
            <img className="skill dialogflow" src={dialogflow}/>
            <img className="skill node" src={node}/>
            <img className="skill postgres" src={postgres}/>
            <img className="skill express" src={express}/>
            <img className="skill knex" src={knex}/>
          </div> */
          }
          <div className="project-skills">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={postgres} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={node} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={dialogflow} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={googleAssistant} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={googleHome} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={reactNative} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={python} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={swift} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={postgres} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={node} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={dialogflow} height="60" alt=""/>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="project-box">
          <div className="logo-desc">
            <a href="https://github.com/g64-sleuth/Sleuth-Chrome">
              <img className="project-logo" src={sleuth}/>
            </a>

            <div className="pdv2">
              <p>Even the playing field for all ISPs. Check your download speed and compare top download speeds amongst other ISPs.
              </p>
            </div>

          </div>

          <div className="project-skills">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={postgres} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={node} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={jsx} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={googleChrome} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={react} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={postgres} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={node} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={jsx} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={googleChrome} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={react} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="project-box">
          <div className="logo-desc">

            <a href="https://github.com/Slelp/Slelp_2.0">
              <img className="project-logo" src={slelp}/>
            </a>

            <div className="pdv2">
              <p>Quick and easy access to find answered questions, answer questions, and to request help on specific team issues.
              </p>
            </div>

          </div>

          <div className="project-skills">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={postgres} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={node} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={handlebars} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={postgres} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={node} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={handlebars} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={knex} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={express} height="60" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-box">
          <div className="logo-desc">

            <a href="https://github.com/kylegibson15/Brunch.">
              <img className="project-logo" src={brunch}/>
            </a>

            <div className="pdv2">
              <p>Search via flavors, specific food items, without having to scourer through restaurants menus.
              </p>
            </div>

          </div>

          <div className="project-skills">
            <div class="slider">
              <div class="slide-track">
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={html} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={javascript} height="60" alt=""/>
                </div>
                <div class="slide">
                  <img src={css} height="60" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>)
  }
}
