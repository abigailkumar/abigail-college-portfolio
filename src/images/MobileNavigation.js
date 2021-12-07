import React, { Component } from 'react';
import '../navbar.css';

class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      animation1: 'bar1 .5s linear',
      animation2: 'bar2 .5s linear',
      animation3: 'menu-appear .5s ease-in'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var newDisplay = this.state.display === 'none' ? 'initial' : 'none';
    var newAnim1 = this.state.animation1 === 'bar1 .5s linear' ? 'bar2 .5s linear' : 'bar1 .5s linear';
    /*var newAnim2*/
    this.setState({
      display: newDisplay,
      animation1: newAnim1
    })
  }

  render(){
      return(
        <div>
          <div id="m-menu" style={{display: this.state.display}}>
            <nav id="m-navbar">
              <a href="#home" className="navlink" onClick={this.handleClick}>Home</a>
              <a href="#work" className="navlink" onClick={this.handleClick}>Work</a>
              <a href="#abigail" className="navlink" onClick={this.handleClick}>Abigail</a>
            </nav>
          </div>
          <div id="ham-menu">
            <div className='container'>
              <div id='bar-1' className="bar" onClick={this.handleClick} style={{animation:this.state.animation1}}></div>
              <div id='bar-2' className="bar" onClick={this.handleClick}></div>
            </div>
          </div>
        </div>
      );
    }
  }

export default MobileNavigation;
