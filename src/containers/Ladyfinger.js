import React, {Component} from 'react';
import '../projects.css';

class Ladyfinger extends Component {

  render() {
    return(
      <div className='white-cover'>
        <div className='iframe-wrapper'>
          <iframe className="video-player" title='ladyfinger' src="https://player.vimeo.com/video/305495862" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default Ladyfinger;
