import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardActions, Button } from 'react-mdl';
import StyleWithMyWeatherApp from './images/Style-With-My-Weather-App.png';
import PasswordGenerator from './images/Password-Generator.png';
import WorkDayScheduler from './images/Work-Day-Scheduler.png';
import WeatherDashboard from './images/Weather-Dashboard.png';
import WorkoutTracker from './images/Workout-Tracker.png';
import ProgressiveBudgetTracker from './images/Progressive-Budget-Tracker.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  projects() {

    if (this.state.activeTab === 0) {
      return (

        <div className="projects">

          {/* Style With My Weather App */}
          <Card shadow={3} style={{ minWidth: '350', margin: 'auto' }}>
            {/* <CardTitle style={{ height: '176px'}} ><img src={StyleWithMyWeatherApp}/></CardTitle> */}
            <img src={StyleWithMyWeatherApp} />
            <CardText>
              Style With My Weather App
            </CardText>
            <CardActions border>
              <a href="https://nguenang7.github.io/Style-With-My-Weather-App/"><Button colored>Website</Button></a>
              <a href="https://github.com/NGUENANG7/Style-With-My-Weather-App"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Password Generator */}
          <Card shadow={3} style={{ minWidth: '350', margin: 'auto' }}>
            <img src={PasswordGenerator} />
            <CardText>
              Password Generator
            </CardText>
            <CardActions border>
              <a href="https://nguenang7.github.io/PG.github.io/"><Button colored>Website</Button></a>
              <a href="https://github.com/NGUENANG7/PG.github.io"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Work Day Scheduler */}
          <Card shadow={3} style={{ minWidth: '350', margin: 'auto' }}>
            <img src={WorkDayScheduler} />
            <CardText>
              Work Day Scheduler
            </CardText>
            <CardActions border>
              <a href="https://nguenang7.github.io/Day-Planner.gitub.io/"><Button colored>Website</Button></a>
              <a href="https://github.com/NGUENANG7/Day-Planner.gitub.io"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Weather Dashboard */}
          <Card shadow={3} style={{ minWidth: '350', margin: 'auto' }}>
            <img src={WeatherDashboard} />
            <CardText>
              Weather Dashboard
            </CardText>
            <CardActions border>
              <a href="https://nguenang7.github.io/Weather-Dashboard.github.io/"><Button colored>Website</Button></a>
              <a href="https://github.com/NGUENANG7/Weather-Dashboard.github.io"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Workout Tracker */}
          <Card shadow={3} style={{ minWidth: '350', margin: 'auto' }}>
            <img src={WorkoutTracker} />
            <CardText>
              Workout Tracker
            </CardText>
            <CardActions border>
              <a href="https://rocky-beach-54353.herokuapp.com/?id=607dd65ab8f4970015d538c1"><Button colored>Website</Button></a>
              <a href="https://github.com/NGUENANG7/Workout-Tracker"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

          {/* Progressive Budget Tracker */}
          <Card shadow={3} style={{ minWidth: '350', margin: 'auto' }}>
            <img src={ProgressiveBudgetTracker} />
            <CardText>
              Progressive Budget Tracker
            </CardText>
            <CardActions border>
              <a href="https://rocky-beach-54353.herokuapp.com/?id=607dd65ab8f4970015d538c1"><Button colored>Website</Button></a>
              <a href="https://github.com/NGUENANG7/Progressive-Budget-Tracker"><Button colored>GitHub Repo</Button></a>
            </CardActions>
          </Card>

        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <Tabs>
          <Tab>Projects</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.projects()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;


          // TEMPLATE OF CARDS
          // {/* Project 2 */}
          // <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          //   <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #2</CardTitle>
          //   <CardText>
          //     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          //   </CardText>
          //   <CardActions border>
          //     <Button colored>GitHub</Button>
          //     <Button colored>CodePen</Button>
          //     <Button colored>Live Demo</Button>
          //   </CardActions>
          //   <CardMenu style={{ color: '#fff' }}>
          //     <IconButton name="share" />
          //   </CardMenu>
          // </Card>