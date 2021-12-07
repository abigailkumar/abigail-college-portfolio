import React, {Component} from 'react';
import '../projects.css';

class ProjectIntro extends Component {
  render() {

    return(
      <div className='introduction' id={this.props.project.projectID}>
        <div className='intro-overlay'>
          <div className='wrapper'>
            <div className='content'>
              <h4>{this.props.project.name}</h4>
              <h2>{this.props.project.type}</h2>
              <h5 className='explainer-text'>{this.props.project.description}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectIntro;
