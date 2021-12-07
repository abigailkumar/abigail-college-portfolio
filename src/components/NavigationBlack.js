import React, { Component } from 'react';
import '../navbar.css';
import {Link} from 'react-router-dom';

class NavigationBlack extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render(){
    return(
      <div id="navbar-black">
        <nav>
          <button id="top" className="navlink" onClick={this.handleClick}>Back to top</button>
          <Link to='/work' className="navlink">Work</Link>
          <Link to='/abigail' className="navlink">Abigail</Link>
        </nav>
      </div>
    );
  }
}

export default NavigationBlack;
