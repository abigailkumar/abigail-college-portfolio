import React, { Component } from 'react';
import '../navbar.css';
import {isMobile} from 'react-device-detect';
import MobileNavigation from './MobileNavigation';
import {Link} from 'react-router-dom';

class Navigation extends Component {

  render(){
    if (isMobile) {
      return(
        <MobileNavigation />
      );
    }
    else {
      return(
        <div id="navbar">
          <nav>
            <Link to='/work' className="navlink">Work</Link>
            <Link to='/abigail' className="navlink">Abigail</Link>
          </nav>
        </div>
      );
    }}
  }

export default Navigation;
