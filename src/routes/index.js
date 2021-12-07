import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import Abigail from '../containers/Abigail.js';
import HomeVisited from './HomeVisited.js';
import GenProjectPage from './GenProjectPage.js';
import Resume from './Resume.js';

class RouteManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project1: {
        projectID: 'project1',
        type: 'UI/UX Responsive Design + Research + Prototyping',
        name: 'Nonprofit Rebranding',
        path: '/CAASE',
        description: 'The original Chicago Coaltion Against Sexual Exploitation (CAASE) website was non-responsive, lacking in visuals, and poorly organized. My goal was to create a more engaging and interactive experience with images, hierarchy, and streamlined navigation.'
      },
      project2: {
        projectID: 'project2',
        type: 'Apparel Design, Merch Acquisition + Distribution, Homeless Outreach',
        name: 'Samaritan Apparel',
        path: '/Samaritan',
        description: 'This apparel brand was designed for unsheltered individuals who could benefit from utilitarian and weather-appropriate clothing. The main problem I faced was providing items for free to those in need without hitting a budget deficit. I found a local Seattle supplier that was able to provide quality products at a reduced cost. We then used a Buy One, Give One model. The items were sold at 2x the cost to provide one item for the buyer and a second piece that is given to somone in need.'
      },
      project3: {
        projectID: 'project3',
        type: 'Animation/Motion Graphics, Product and UI Design + Research',
        name: 'Aquate Water Bottle',
        path: '/Aquate',
        description: 'Aquate is a unique and environmentally sustainable idea that I developed with designers Margaret Kots and Sebastien Johnson. Together we created a eco-friendly water bottle that is meant to encourage less plastic consumption. My role was to create a short animated commercial and website.'
      },
      project4: {
        projectID: 'project4',
        type: 'Videography, Co-Directing, Video + Sound Editing',
        name: 'Ladyfinger',
        path: '/Ladyfinger',
        description:'A short film that simultaneously captures the romanticized idealizations of Florence, Italy and the realistic side of human interaction. While studying abroad in Italy, I had the pleasure of co-directing, co-filming, and editing this short film with a small team of film students.'
      },
      project5: {
        projectID: 'project5',
        type: 'Videography, Editing',
        name: 'Abroad Reel 2018',
        path: '/AbroadReel',
        description: "I had the priviledge of studying abroad in Florence, Italy during my Spring 2018 semester of college. This reel shows off some of the places and things I experienced."
      },
      project6: {
        projectID: 'project6',
        type: 'Digital Illustration, Animation, Narrative, Computer Game Dev',
        name: 'Out of Body',
        path: '/Oob',
        description: 'I am currently working with a team as the lead artist, concept designer, animator, and narrative developer for a computer-based adventure game. Out of Body is inspired by classics like Day of the Tentacle, Fate of Atlantis, and Sam & Max'
      },
      project7: {
        projectID: 'project7',
        type: 'Magazine, Books, Advertisements, Logos, Etc.',
        name: 'Print Work',
        path: '/Print',
        description: 'A collection of some of my favorite traditional graphic design pieces.'
      },
      project8: {
        projectID: 'project8',
        type: 'Animation/Motion Graphics, Storyboarding, Research',
        name: 'Modern Day Slavery',
        path: '/ModernDaySlavery',
        description: "After much research and meeting with human rights law professors and human trafficking researchers, I sought to answer why human trafficking one of the largest illicit international industries and why is it thriving. My research encouraged me to start an animated miniseries that would spark conversations. This is an introduction to topics that will be discussed in the following episodes."
      },
      project9: {
        projectID: 'project9',
        type: 'Video, Animation, and probably some other stuff',
        name: 'Bits N Pieces',
        path: '/bitsNpieces',
        description: 'A few miscellaneous projects that I have a strong attachment to :,)'

      },
    }
  }

  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/abigail' render={props => <Abigail />} />
          <Route path='/work' component={HomeVisited}  />
          <Route path='/resume' component={Resume}  />
          <Route path={this.state.project1.path} render={props => <GenProjectPage {...props} project={this.state.project1}/>} />
          <Route path={this.state.project2.path} render={props => <GenProjectPage {...props} project={this.state.project2}/>} />
          <Route path={this.state.project3.path} render={props => <GenProjectPage {...props} project={this.state.project3}/>} />
          <Route path={this.state.project4.path} render={props => <GenProjectPage {...props} project={this.state.project4}/>} />
          <Route path={this.state.project5.path} render={props => <GenProjectPage {...props} project={this.state.project5}/>} />
          <Route path={this.state.project6.path} render={props => <GenProjectPage {...props} project={this.state.project6}/>} />
          <Route path={this.state.project7.path} render={props => <GenProjectPage {...props} project={this.state.project7}/>} />
          <Route path={this.state.project8.path} render={props => <GenProjectPage {...props} project={this.state.project8}/>} />
          <Route path={this.state.project9.path} render={props => <GenProjectPage {...props} project={this.state.project9}/>} />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouteManager
