import React, { Component } from 'react';
import Navigation from './Navigation'

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: false,
      width: '100vw'
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener(touchEvent, this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('wheel', this.handleScroll);
    window.addEventListener(touchEvent, this.handleScroll);
  }

  handleScroll(e) {
    if (e.deltaY < 0 || e.deltaY > 0) {
      this.setState({
        display: true
      })
    }
    if(this.state.display) {
      this.setState({
        width: '0'
      })
    }
  }

  handleClick() {
    if (this.state.display === false) {
      this.setState({
        display: true,
      })
    }
    if(this.state.display) {
      this.setState({
        width: '0'
      })
    }
  }

  render(){
    return(
      <div onClick={this.handleClick} style={{position: "absolute", height: '100vh', width: this.state.width}}>
        {this.state.display ? <Navigation /> : null}
      </div>
    );
  }
}

export default NavBar;
