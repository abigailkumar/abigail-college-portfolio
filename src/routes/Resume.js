import React from 'react';
import Navigation from '../components/Navigation.js'
import '../abigail.css';
//import abigail from '../images/abigail/AbigaiKumar_November2018.pdf';


class Resume extends React.Component {

  render() {
    return(
      <div>
        <div className="App">
          <div>
            <div className="front">
              <Navigation />
            </div>
          </div>
        </div>
        <div>

          <div className='iframe-wrapper'>
            <iframe className='video-player' src='chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://abigailkumar.com/AbigailKumar_Resume_November2018.pdf' frameBorder="0" title='resume' allowFullScreen></iframe>
          </div>
        
        </div>
      </div>
    );
  }
}

export default Resume;
