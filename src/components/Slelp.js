import React, {Component} from 'react';

export default class Slelp extends Component {

  render() {
    return (<div className="project slelp-project">
      <div className="fond">
        <span className="s1-slelp">Slelp App</span>
        <span className="s2-slelp">Slelp App</span>
      </div>
      <div className="card">

        <div className="left-half">
          <div className="thumbnail-logo">
            <img className="proj-logo" src='https://d22lxpqe1nsxs.cloudfront.net/slelp-logo-big.png'/>
          </div>

          <div className="tech-used">
            <h4>TECHNOLOGIES USED</h4>

            <div className="project-skills-v3">

                <img src='https://d22lxpqe1nsxs.cloudfront.net/knex.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/ruuvi-tag-javascript.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/postgresql-logo.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/node.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/handlebars-logo.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/css3-logo.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/html5-no-border.png' height="60" alt=""/>

                <img src='https://d22lxpqe1nsxs.cloudfront.net/express.svg' height="60" alt=""/>

            </div>
          </div>

        </div>

        <div className="right-half">
          <div className="right">
            <h1 className="h1">Slelp App</h1>

            <div className="authors">
              <div className="author">
                <a className="thumbnail-anchor" href="https://github.com/kylegibson15" target="_blank">
                  <img className="thumbnail-image" src="https://avatars2.githubusercontent.com/u/25071080?s=460&v=4"/>
                  <h2 className="h2">Kyle G</h2>
                </a>
              </div>

              <div className="author">
                <a className="thumbnail-anchor" href="https://github.com/lukeromberg" target="_blank">
                  <img className="thumbnail-image" src="https://avatars3.githubusercontent.com/u/30552918?s=460&v=4"/>
                  <h2 className="h2">Luke R</h2>
                </a>
              </div>

              <div className="author">
                <a className="thumbnail-anchor" href="https://github.com/kalaver8" target="_blank">
                  <img className="thumbnail-image" src="https://avatars1.githubusercontent.com/u/28827953?s=460&v=4"/>
                  <h2 className="h2">Kelsey L</h2>
                </a>
              </div>

              <div className="author">
                <a className="thumbnail-anchor" href="https://github.com/xaishinn" target="_blank">
                  <img className="thumbnail-image" src="https://avatars0.githubusercontent.com/u/24497696?s=460&v=4"/>
                  <h2 className="h2">Leo M</h2>
                </a>
              </div>

              <div className="author">
                <a className="thumbnail-anchor" href="https://github.com/jordanreed23" target="_blank">
                  <img className="thumbnail-image" src="https://avatars3.githubusercontent.com/u/26033242?s=460&v=4"/>
                  <h2 className="h2">Jordan R</h2>
                </a>
              </div>

            </div>


            <div className="separator"></div>

            <p>Slelp is an app that provides a team quick and easy access to find answered questions, answer questions, and to request help on specific issues.</p>
          </div>

          <a className="fab-two slel" href="https://slelp.herokuapp.com/" target="_blank">

            <div class="front-card">
              <img className="github" src='https://d22lxpqe1nsxs.cloudfront.net/www-circle.png'/>
            </div>

            <div class="reverse-card">
              <p>Click</p>
              <p>4</p>
              <p>Site</p>
            </div>

          </a>

          <a className="fab slel" href="https://github.com/Slelp/Slelp_2.0" target="_blank">

            <div class="front-card">
              <img className="github" src='https://d22lxpqe1nsxs.cloudfront.net/white-github.png'/>
            </div>

            <div class="reverse-card">
              <p>Click</p>
              <p>4</p>
              <p>Code</p>
            </div>

          </a>
        </div>

      </div>

    </div>)
  }
}
