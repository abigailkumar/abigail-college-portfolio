import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import img1 from '../images/canary-sunset.jpg';
import img2 from '../images/camels-2.jpeg';
import img3 from '../images/essaouira-birds.png';
import img4 from '../images/switz-sunset.png';

const urls = [
  img1, img2, img3, img4
];

class HeroVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {randNum: 0}
  }

  componentWillMount() {
    var number = Math.floor(Math.random() * Math.floor(4));
    this.setState({
      randNum: number
    });
  }

  render() {
    if (isMobile) {
      return(
        <div>
          <div className='hero-image' style={{backgroundImage: 'url('+urls[this.state.randNum]+')'}}>
          </div>
        </div>
      )
    }

    return(
      <div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div className='hero-video'>
          <iframe src="https://player.vimeo.com/video/304481773?background=1?#t=0m30s" title="Study Abroad Reel 2018" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default HeroVideo;
