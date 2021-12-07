import React from 'react';

class ModernDaySlavery extends React.Component {

  render() {
    return(
      <div>
        <div className='white-cover'>
          <div className='iframe-wrapper'>
            <iframe className='video-player' src="https://player.vimeo.com/video/252216878" frameBorder="0" title='aquate video' allowFullScreen></iframe>
          </div>
        </div>
        <div className='white-cover'>
        <img src='https://i.imgur.com/DnS3kv5.jpg' className='single-col-image' alt="Process1"  />
        <img src='https://i.imgur.com/1rMsr3O.jpg' className='single-col-image' alt="Process2" style={{marginBottom: '60px' }} />
        </div>
      </div>
    );
  }
}

export default ModernDaySlavery;
