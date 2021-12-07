import React, { Component } from 'react';
import '../App.css';
import HeroVideo from './HeroVideo.js'
import HeaderText from './HeaderText.js'

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'inherit',
      animation: null
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    window.addEventListener('wheel', this.handleScroll);
    window.addEventListener(touchEvent, this.handleClick);
  }
  componentWillUnmount(){
    //window.removeEventListener('wheel', this.handleScroll);
    //window.removeEventListener(touchEvent, this.handleClick);
  }

  handleScroll() {
    window.onwheel = function() {
      this.setState({
        animation: 'fade-out .5s linear'
      })}.bind(this);
      this.setState({
        animation: 'fade-out .5s linear',
      })
      setTimeout(
        function() {
            this.setState({display: 'none'});
        }
        .bind(this),
        475
      );
    }

    handleClick() {
      this.setState({
        animation: 'fade-out .5s linear'
      });
      this.setState({
        animation: 'fade-out .5s linear',
      })
      setTimeout(
        function() {
            this.setState({display: 'none'});
        }
        .bind(this),
        475
      );
    }


  render() {
    return (
      <header className="App-header">
        <HeroVideo />
        <HeaderText onClick={this.handleClick} animation={this.state.animation} display={this.state.display} />
      </header>
    );
  }
}

export default Header;
