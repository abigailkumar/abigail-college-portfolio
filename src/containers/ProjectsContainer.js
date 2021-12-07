import React, {Component} from 'react';
import '../projects.css';
import {Project} from '../components/Project'
import {Footer} from './Footer'

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project1: {
        projectID: 'project1',
        type: 'UI/UX Responsive Design + Research + Prototyping',
        name: 'Human Trafficking Nonprofit Rebranding',
        path: '/CAASE',
        visible: null
      },
      project2: {
        projectID: 'project2',
        type: 'Apparel Design, Merch Acquisition + Distribution, Homeless Outreach',
        name: 'Samaritan Apparel Brand',
        path: '/Samaritan',
        visible: null
      },
      project3: {
        projectID: 'project3',
        type: 'Animation/Motion Graphics, Product and UI Design + Research',
        name: 'Aquate Water Bottle',
        path: '/Aquate',
        visible: null
      },
      project4: {
        projectID: 'project4',
        type: 'Short Film: Videography, Co-Directing, Video + Sound Editing',
        name: 'Ladyfinger',
        path: '/Ladyfinger',
        visible: null
      },
      project5: {
        projectID: 'project5',
        type: 'Videography, Editing',
        name: 'Abroad Reel 2018',
        path: '/AbroadReel',
        visible: null
      },
      project6: {
        projectID: 'project6',
        type: 'Computer Game: Digital Illustration, Animation, Narrative, Dev',
        name: 'Out of Body',
        path: '/Oob',
        visible: null
      },
      project7: {
        projectID: 'project7',
        type: 'Magazine, Book, Advertisements, Logos, Etc.',
        name: 'Print Work',
        path: '/Print',
        visible: null
      },
      project8: {
        projectID: 'project8',
        type: 'Miniseries: Animation/Motion Graphics, Storyboarding, Research',
        name: 'Modern Day Slavery',
        path: '/ModernDaySlavery',
        visible: null
      },
      project9: {
        projectID: 'project9',
        type: 'Video, Print, and Who Knows What Else',
        name: 'Bits N Pieces',
        path: '/bitsNpieces',
        visible: null
      },
    }

    this.handler = this.handler.bind(this)
    this.handler2 = this.handler2.bind(this)
  }

  handler(e) {
    if(e.projectID === 'project1') {
      this.setState({
        project1: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project2') {
      this.setState({
        project2: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project3') {
      this.setState({
        project3: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project4') {
      this.setState({
        project4: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project5') {
      this.setState({
        project5: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project6') {
      this.setState({
        project6: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project7') {
      this.setState({
        project7: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project8') {
      this.setState({
        project8: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
    if(e.projectID === 'project9') {
      this.setState({
        project9: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: true
        }
      })
    }
  }

  handler2(e) {
    if(e.projectID === 'project1') {
      this.setState({
        project1: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project2') {
      this.setState({
        project2: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project3') {
      this.setState({
        project3: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project4') {
      this.setState({
        project4: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project5') {
      this.setState({
        project5: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project6') {
      this.setState({
        project6: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project7') {
      this.setState({
        project7: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project8') {
      this.setState({
        project8: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
    if(e.projectID === 'project9') {
      this.setState({
        project9: {
          projectID: e.projectID,
          type: e.type,
          name: e.name,
          path: e.path,
          visible: false
        }
      })
    }
  }

  render() {
    return(
      <div id="projects-container">
          <Project project={this.state.project1} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project2} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project3} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project4} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project5} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project6} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project7} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project8} handler={this.handler} handler2={this.handler2}/>
          <Project project={this.state.project9} handler={this.handler} handler2={this.handler2}/>
          <Footer />
      </div>
    );
  }
}

export default ProjectsContainer;
