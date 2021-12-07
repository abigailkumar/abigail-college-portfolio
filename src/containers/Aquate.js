import React from 'react';

class Aquate extends React.Component {

  render() {
    return(
      <div>
        <div className='white-cover'>
          <div className='iframe-wrapper'>
            <iframe className='video-player' src="https://player.vimeo.com/video/251387119" frameBorder="0" title='aquate video' allowFullScreen></iframe>
          </div>
        </div>
          <div className='white-cover'>
            <img src="https://i.imgur.com/zMtjc8S.jpg" className='single-col-image' alt="Aquate Website" style={{marginBottom: '60px' }} />
            <img src="https://i.imgur.com/UEIAcJv.jpg" className='single-col-image' alt="Aquate Website" style={{marginBottom: '60px' }} />
            <img src="https://i.imgur.com/tWys07A.png" className='single-col-image' alt="Aquate Website" style={{marginBottom: '60px' }} />
          </div>
      </div>
    );
  }
}

export default Aquate;
