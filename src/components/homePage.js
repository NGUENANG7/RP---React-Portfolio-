import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from './images/me.jpg';

class HomePage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>

        <Grid className="homePageGrid">
          <Cell col={12}>

            <div>
              <h1>Gregory Nguenang</h1>

              <img src={Me} />

              <div>

                {/* LinkedIn */}
                <a target="_blank" href="https://www.linkedin.com/in/gregory-nguenang-083748147/">
                  <icon className="fa fa-linkedin icons" />
                </a>

                {/* Github */}
                <a target="_blank" href="https://github.com/NGUENANG7">
                  <icon className="fa fa-github icons" />
                </a>

                {/* Resume */}
                <a target="_blank" href="https://drive.google.com/file/d/1B7jFKNwKnLNn04F01Cw-fe7QqaBrCkMo/view?usp=sharing">
                  <icon className="fa fa-paperclip icons" />
                </a>

              </div>

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;