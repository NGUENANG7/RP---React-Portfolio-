import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class HomePage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>

        <Grid className="homePageGrid">
          <Cell col={12}>

            <div>
              <h1>Gregory Nguenang</h1>

              <div>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/gregory-nguenang-083748147/" target="_blank">
                  <icon className="fa fa-linkedin icons" />
                </a>

                {/* Github */}
                <a href="https://github.com/NGUENANG7" target="_blank">
                  <icon className="fa fa-github icons" />
                </a>

                {/* Resume */}
                <a href="https://drive.google.com/file/d/1B7jFKNwKnLNn04F01Cw-fe7QqaBrCkMo/view?usp=sharing" target="_blank">
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