import React, { Component } from 'react';
import '../navbar.css';
import {Link} from 'react-router-dom';

class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      animation: 'menu-appear .5s ease-in'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var newDisplay = this.state.display === 'none' ? 'initial' : 'none';
    this.setState({
      display: newDisplay,
    })
  }

  render(){
      return(
        <div>
          <div id="m-menu" style={{display: this.state.display}}>
            <nav id="m-navbar">
              <Link to="/work" className="navlink" onClick={this.handleClick}>Work</Link>
              <Link to="/abigail" className="navlink" onClick={this.handleClick}>Abigail</Link>
            </nav>
          </div>
          <div id="ham-menu">
            <div className='container' onClick={this.handleClick}>
              <div id='bar-1' className="bar" onClick={this.handleClick}></div>
              <div id='bar-2' className="bar" onClick={this.handleClick}></div>
            </div>
          </div>
        </div>
      );
    }
  }

export default MobileNavigation;
