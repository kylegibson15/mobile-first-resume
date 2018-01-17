import React, {Component} from 'react';
import javascript from '../assets/images/JavaScript-logo.png';
import python from '../assets/images/Logo_Python.png';
import firebase from '../assets/images/android_firebase.png';
import bootstrap from '../assets/images/bootstrap_solid.png';
import express from '../assets/images/Expressjs.png';
import git from '../assets/images/git.png';
import handlebars from '../assets/images/handlebars2.png';
import heroku from '../assets/images/herokukafka.png'
import html_css from '../assets/images/html_css.png';
import knex from '../assets/images/knexJS.png';
import jquery from '../assets/images/logo-jquery-png--800.gif';
import redux from '../assets/images/logo-redux.png';
import react from '../assets/images/reactjs.png';
import mocha_chai from '../assets/images/mocha-chai.png';
import node from '../assets/images/nodejs-128.png';
import sql from '../assets/images/sql.png';
import webpack from '../assets/images/webpack_logo.png';
import raspberry_pi from '../assets/images/raspberry-pi.png';
import pivotal from '../assets/images/pivotaltracker.png';
import slack from '../assets/images/Slack_Icon.png';
import github from '../assets/images/github.png';
import chrome from '../assets/images/Google_Chrome_icon_(2011).svg.png';
import agile from '../assets/images/agile.png';
import tdd from '../assets/images/tdd.png';
import responsive_design from '../assets/images/responsive-design.png';
import pair_programmming from '../assets/images/pair-programming.png';
import resume from '../assets/images/GibsonKyle_Resume_g64.pdf';

export default class Skills extends Component {

  render() {
    return (<div className="skills-container">
      <div className="skill-head">
        <div className="logos-under">
          <img className="lang-logo" src={heroku}/>
          <img className="lang-logo" src={git}/>
          <img className="lang-logo" src={firebase}/>
          <img className="lang-logo" src={express}/>
          <img className="lang-logo" src={node}/>
          <img className="lang-logo" src={sql}/>
          <img className="lang-logo" src={bootstrap}/>
          <img className="lang-logo" src={jquery}/>
        </div>

        <div className="languages">LANGUAGES</div>

        <div className="logos-under">
          <img className="lang-logo" src={mocha_chai}/>
          <img className="lang-logo" src={knex}/>
          <img className="lang-logo" src={react}/>
          <img className="lang-logo" src={redux}/>
          <img className="lang-logo" src={javascript}/>
          <img className="lang-logo" src={python}/>
          <img className="lang-logo" src={handlebars}/>
          <img className="lang-logo" src={html_css}/>
          <img className="lang-logo" src={webpack}/>
        </div>
      </div>

      <div className="skill-head tools">
        <div className="logos-under">
          <img className="lang-logo" src={raspberry_pi}/>
          <img className="lang-logo" src={pivotal}/>
        </div>

        <div className="languages">TOOLS</div>

        <div className="logos-under">
          <img className="lang-logo" src={slack}/>
          <img className="lang-logo" src={github}/>
          <img className="lang-logo" src={chrome}/>
        </div>
      </div>

      <div className="skill-head techniques">
        <div className="logos-under">

        </div>

        <div className="languages">TECHNIQUES</div>

        <div className="logos-under">
          <img className="tech-logo" src={responsive_design}/>
          <img className="tech-logo" src={pair_programmming}/>
          <img className="tech-logo" src={agile}/>
          <img className="tech-logo" src={tdd}/>
        </div>
      </div>

      <div className="skill-head">
        <a className="resume" href={resume} download="resume">
          RESUME
        </a>
      </div>
    </div>)
  }
}
