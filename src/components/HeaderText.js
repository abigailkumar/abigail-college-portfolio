import React, { Component } from 'react';
import '../index.css';
//import{isMobile} from 'react-device-detect';
import scroll from '../images/white-down.png'

class HeaderText extends Component {
  render() {
    // if(isMobile) {
    //   return (
    //     <div className="header-text" style={{animation: this.props.animation, display: this.props.display}}>
    //       <div className="header-wrapper">
    //         <h1>Abigail Kumar</h1>
    //         <h3>Interactive Designer and developer</h3>
    //         <img className='scroll-indicator' alt="(scroll down)" src={scroll}></img>
    //       </div>
    //     </div>
    //   );
    // }

    return (
      <div className="header-text" style={{animation: this.props.animation, display: this.props.display}}>
        <div className='header-wrapper'>
          <h1>Abigail Kumar</h1>
          <h3>Interactive Designer and developer</h3>
          <img className='scroll-indicator' alt="(scroll down)" src={scroll}></img>
        </div>
      </div>
    );
  }
}

export default HeaderText;
