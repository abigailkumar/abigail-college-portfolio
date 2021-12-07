import React, {Component} from 'react';
import '../projects.css';
import Introduction from '../components/Introduction'
import ProjectsContainer from './ProjectsContainer'
//import {isMobile} from 'react-device-detect';

let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

class IntroductionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      displayP: false,
      count: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    window.addEventListener('wheel', this.handleScroll)
    window.addEventListener(touchEvent, this.handleClick);
  }
  componentWillUnmount(){
    //window.removeEventListener('wheel', this.handleScroll);
    //window.removeEventListener(touchEvent, this.handleClick);
  }

  handleScroll(e) {
    if (e.deltaY < 0 || e.deltaY > 0) {
      setTimeout(
        function() {
          this.setState({display: true})
        }.bind(this), 700
      );
      setTimeout(
        function() {
          this.setState({count: 1})
        }.bind(this), 2000
      );

      setTimeout(
        function() {
          this.setState({displayP: true})
        }.bind(this), 3500
      );

      if (this.state.displayP) {
        setTimeout(function() {
          document.body.style.overflow = "visible"
        }, 750)
      }
    }
  }

  handleClick() {
    setTimeout(
      function() {
        this.setState({display: true})
      }.bind(this), 700
    );
    setTimeout(
      function() {
        this.setState({count: 1})
      }.bind(this), 2000
    );

    setTimeout(
      function() {
        this.setState({displayP: true})
      }.bind(this), 3500
    );

    if (this.state.displayP) {
      setTimeout(function() {
        document.body.style.overflow = "visible"
      }, 750)
      console.log('WORK PLZ!!???')
    }
  }

  render() {
    // if (isMobile){
    //   return(
    //     <div>
    //       <div id="introduction-container">
    //         <Introduction />
    //       </div>
    //       <div>
    //         <ProjectsContainer />
    //       </div>
    //     </div>
    //   );
    // }

    return(
      <div>
        <div id="introduction-container" onScroll={this.handleScroll} onClick={this.handleClick}>
          {this.state.display ? <Introduction /> : null}
        </div>
        <div>
          {this.state.displayP ? <ProjectsContainer /> : null}
        </div>
      </div>
    );
  }
}

export default IntroductionContainer;
