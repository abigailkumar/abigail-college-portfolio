import React from 'react';
import NavigationBlack from '../components/NavigationBlack.js';
import MobileNavigation from '../components/MobileNavigation.js';
import ProjectIntro from '../components/ProjectIntro';
import Ladyfinger from '../containers/Ladyfinger.js';
import Aquate from '../containers/Aquate.js';
import Caase from '../containers/Caase.js';
import Samaritan from '../containers/Samaritan.js'
import AbroadReel from '../containers/AbroadReel.js'
import Oob from '../containers/Oob.js'
import Print from '../containers/Print.js'
import ModernDaySlavery from '../containers/ModernDaySlavery.js'
import Bits from '../containers/Bits.js'
import {isMobile} from 'react-device-detect';

class GenProjectPage extends React.Component {

  componentWillMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    setTimeout(function() {
      document.body.style.overflow = 'visible';
    },1000)
  }

  render() {
    return(
      <div className="App">
        <div>
          <div className="front">
            {isMobile ? <MobileNavigation /> : <NavigationBlack />}
          </div>
          <div>
            <div id="introduction-container">
              <ProjectIntro project={this.props.project}/>
            </div>
            <div id="works-container">
              <div className='project-wrapper'>
                {this.props.project.projectID === 'project1' ? <Caase project={this.props.project}/> : null}
                {this.props.project.projectID === 'project2' ? <Samaritan project={this.props.project}/> : null}
                {this.props.project.projectID === 'project3' ? <Aquate project={this.props.project}/> : null}
                {this.props.project.projectID === 'project4' ? <Ladyfinger project={this.props.project}/> : null}
                {this.props.project.projectID === 'project5' ? <AbroadReel project={this.props.project}/> : null}
                {this.props.project.projectID === 'project6' ? <Oob project={this.props.project}/> : null}
                {this.props.project.projectID === 'project7' ? <Print project={this.props.project}/> : null}
                {this.props.project.projectID === 'project8' ? <ModernDaySlavery project={this.props.project}/> : null}
                {this.props.project.projectID === 'project9' ? <Bits project={this.props.project}/> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenProjectPage;
