import React, {Component} from 'react';
import javascript from '../assets/images/js-no-border.svg';
import python from '../assets/images/python-no-border.svg';
import firebase from '../assets/images/android_firebase.png';
import bootstrap from '../assets/images/bootstrap_solid.png';
import express from '../assets/images/Expressjs.png';
import git from '../assets/images/git.png';
import handlebars from '../assets/images/handlebars2.png';
import heroku from '../assets/images/herokukafka.png'
import html from '../assets/images/html5-no-border.svg';
import css from '../assets/images/css3-no-border.svg';
import knex from '../assets/images/knexJS.png';
import jquery from '../assets/images/logo-jquery-png--800.gif';
import redux from '../assets/images/logo-redux.png';
import react from '../assets/images/react-no-border.png';
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
import download from '../assets/images/download.png';

export default class Skills extends Component {

  render() {
    return (<div className="skills-container">
      <div className="skill-head">

        <div className="languages">LANGUAGES</div>

        <div className="logos-under">
          <img className="lang-logo react" alt="react" src={react}/>
          <img className="lang-logo redux" alt="redux" src={redux}/>
          <img className="lang-logo js" alt="javascript" src={javascript}/>
          <img className="lang-logo python" alt="python" src={python}/>
          {/* <img className="lang-logo" alt="handlebars" src={handlebars}/> */}
          <img className="lang-logo html" alt="html css" src={html}/>
          {/* <img className="lang-logo" alt="html css" src={css}/> */}
          {/* <img className="lang-logo" alt="webpack" src={webpack}/> */}
          {/* <img className="lang-logo" alt="heroku" src={heroku}/> */}
          <img className="lang-logo git" alt="git" src={git}/>
          {/* <img className="lang-logo" alt="firebase" src={firebase}/> */}
          {/* <img className="lang-logo" alt="express" src={express}/> */}
          {/* <img className="lang-logo" alt="node" src={node}/> */}
          {/* <img className="lang-logo" alt="sql" src={sql}/> */}
          {/* <img className="lang-logo" alt="bootstrap" src={bootstrap}/> */}
          {/* <img className="lang-logo" alt="jquery" src={jquery}/> */}
          {/* <img className="lang-logo" alt="mocha_chai" src={mocha_chai}/> */}
          {/* <img className="lang-logo knex" alt="knex" src={knex}/> */}
        </div>
      </div>

      <div className="skill-head tools">

        <div className="languages">TOOLS</div>

        <div className="logos-under tools-under">
          <img className="lang-logo chrome" alt="chrome" src={chrome}/>
          <img className="lang-logo slack" alt="slack" src={slack}/>
          <img className="lang-logo github" alt="github" src={github}/>
          <img className="lang-logo rp" alt="raspberry pi" src={raspberry_pi}/>
          <img className="lang-logo pivotal" alt="pivotal tracker" src={pivotal}/>
        </div>
      </div>

      <div className="skill-head">

        <div className="languages">TECHNIQUES</div>

        <div className="logos-under tools-under techniques">
          <img className="lang-logo pair" alt="pair programming" src={pair_programmming}/>
          <img className="lang-logo rd" alt="responsive design" src={responsive_design}/>
          <img className="lang-logo agile" alt="agile" src={agile}/>
          <img className="lang-logo tdd" alt="tdd" src={tdd}/>
        </div>
      </div>

      <div className="skill-head resume-contain">
        <a className="resume" href={resume} download="resume">
          RESUME
          <img className="download-logo" src={download} alt="download"/>
        </a>
      </div>
    </div>)
  }
}
