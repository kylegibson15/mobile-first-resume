import React, { Component } from 'react';

export default class HealthAlarm extends Component {
  render() {
    return (
      <div className='project healthAlarm-project'>
        <div className='fond'>
          <span className='s1'>Health</span>
          <span className='s2'>Alarm</span>
        </div>
        <div className='card'>
          <div className='left-half'>
            <div className='thumbnail-logo'>
              <img className='proj-logo' src='https://d22lxpqe1nsxs.cloudfront.net/HealthAlarm_-logo.png' />
            </div>

            <div className='tech-used'>
              <h4>TECHNOLOGIES USED</h4>

              <div className='project-skills-v3'>
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/dialogflow.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/google-assistant.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/google_home.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/react-native.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/ruuvi-tag-javascript.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/Python-Logo-PNG-Image.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/swift.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/postgresql-logo.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/raspberry-pi-logo.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/node.png' height='60' alt='' />

                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/knex.png' height='60' alt='' />
                <img className='proj-skill' src='https://d22lxpqe1nsxs.cloudfront.net/express.svg' height='60' alt='' />
              </div>
            </div>
          </div>

          <div className='right-half'>
            <div className='right'>
              <h1 className='h1'>HealthAlarm</h1>

              <div className='author'>
                <a className='thumbnail-anchor' href='https://github.com/kylegibson15' target='_blank'>
                  <img className='thumbnail-image' src='https://avatars2.githubusercontent.com/u/25071080?s=460&v=4' />
                  <h2 className='h2'>Kyle G</h2>
                </a>
              </div>

              <div className='separator'></div>

              <p>
                HealthAlarm is an alarm clock that wakes you up with a game plan for how to start your day. Using Google Home and Google
                Assistant via Dialogflow API so you can have a conversation to better understand where you are on your personal goals, and
                health data. This is the React Native UI that prompts access for your Apple Health Data to store in a API that Dialogflow
                API then communicates with to give you accurate speech responses straight from your Google Home
              </p>
            </div>

            <a className='fab ha' href='https://github.com/kylegibson15/HealthAlarm' target='_blank'>
              <div className='front-card'>
                <img className='github' src='https://d22lxpqe1nsxs.cloudfront.net/white-github.png' />
              </div>

              <div className='reverse-card'>
                <p>Click</p>
                <p>4</p>
                <p>Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
