import React, { Component } from 'react';

export default class Brunch extends Component {
  render() {
    return (
      <div className='project brunch-project'>
        <div className='fond'>
          <span className='s1-brunch'>Brunch.</span>
          <span className='s2-brunch'>Brunch.</span>
        </div>
        <div className='card'>
          <div className='left-half'>
            <div className='thumbnail-logo'>
              <img className='proj-logo' src='https://d22lxpqe1nsxs.cloudfront.net/brunch-logo-big.png' />
            </div>

            <div className='tech-used'>
              <h4>TECHNOLOGIES USED</h4>

              <div className='project-skills-v3'>
                <img src='https://d22lxpqe1nsxs.cloudfront.net/html5-no-border.png' height='60' alt='' />

                <img src='https://d22lxpqe1nsxs.cloudfront.net/ruuvi-tag-javascript.png' height='60' alt='' />

                <img src='https://d22lxpqe1nsxs.cloudfront.net/css3-logo.png' height='60' alt='' />
              </div>
            </div>
          </div>

          <div className='right-half'>
            <div className='right'>
              <h1 className='h1'>Brunch.</h1>

              <div className='author'>
                <a className='thumbnail-anchor' href='https://github.com/kylegibson15' target='_blank'>
                  <img className='thumbnail-image' src='https://avatars2.githubusercontent.com/u/25071080?s=460&v=4' />
                  <h2 className='h2'>Kyle G</h2>
                </a>
              </div>

              <div className='separator'></div>

              <p>
                Brunch. is a web app that takes on the goal of wanting to be able to search via flavors, specific food items, without having
                to search through restaurants menus. Let Brunch tell you where what you want to eat is. (specific to Denver and brunch food)
              </p>
            </div>

            <a className='fab-two slel' href='https://brunch-app-project-1.firebaseapp.com/' target='_blank'>
              <div className='front-card'>
                <img className='github' src='https://d22lxpqe1nsxs.cloudfront.net/www-circle.png' />
              </div>

              <div className='reverse-card'>
                <p>Click</p>
                <p>4</p>
                <p>Site</p>
              </div>
            </a>

            <a className='fab slel' href='https://github.com/kylegibson15/Brunch.' target='_blank'>
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
