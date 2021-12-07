import React from 'react';

class AbroadReel extends React.Component {

  render() {
    return(
      <div>
        <div className='white-cover'>
          <div className='iframe-wrapper'>
            <iframe className='video-player' src="https://player.vimeo.com/video/298103918" title='Abroad Reel 2018' frameborder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default AbroadReel;
