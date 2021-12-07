import React from 'react';

class Bits extends React.Component {

  render() {
    return(
      <div>
        <div className='white-cover'>
          <div className='iframe-wrapper'>
            <iframe className='video-player' src="https://player.vimeo.com/video/272099231" frameBorder="0" title='Canyoning in Switzerland' allowFullScreen></iframe>
          </div>
        </div>
          <div className='white-cover'>
            <img src='https://i.imgur.com/M9IeuyE.gif' className='single-col-image' id="quote-poster" alt="Button Animation" style={{marginBottom: '60px' }} />
          </div>
          <div className='white-cover'>
            <div className='iframe-wrapper'>
              <iframe className='video-player' src="https://player.vimeo.com/video/205648716" frameBorder="0" title='charcoal animation' allowFullScreen></iframe>
            </div>
          </div>
      </div>
    );
  }
}

export default Bits;
