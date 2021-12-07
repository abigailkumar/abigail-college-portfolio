import React, {Component} from 'react';
import '../projects.css';
import {Link} from 'react-router-dom';
import {isMobile} from 'react-device-detect';

export class Project extends Component {
  constructor(props){
    super(props)

    this.handler = this.handler.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handler)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handler)
  }

  handler(){
    var y = window.innerHeight|| document.documentElement.clientHeight;

    let rect = document.getElementById(this.props.project.projectID).getBoundingClientRect()
    if(rect.y < y/2 && rect.y > y/2 - 200 && !this.props.project.visible){
      this.props.handler(this.props.project)
    }
    if ((rect.y > y/2 && this.props.project.visible) || (rect.y < y/2 - 200)){
       this.props.handler2(this.props.project)
    }
  }

  render() {

    if(isMobile) {
      return(
        <Link to={this.props.project.path}>
          <div className='project-wrapper' id={this.props.project.projectID} >
            <div id='mobile-black-cover' className={this.props.project.visible === null ? 'initial' : this.props.project.visible ? 'mobile-black-cover' : 'not-visible'}>
              <div className='info-wrapper'>
                <h2 className='proj-name'>{this.props.project.name}</h2>
                <h5 className='proj-type'>{this.props.project.type}</h5>
              </div>
            </div>
          </div>
        </Link>
      )
    }

    return(
      <Link to={this.props.project.path}>
        <div className='project-wrapper' id={this.props.project.projectID}>
          <div className='black-cover'>
            <div className='info-wrapper'>
              <h2 className='proj-name'>{this.props.project.name}</h2>
              <h5 className='proj-type'>{this.props.project.type}</h5>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
