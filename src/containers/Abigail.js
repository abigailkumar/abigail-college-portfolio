import React from 'react';
import Navigation from '../components/Navigation.js'
import '../abigail.css';
import abigail from '../images/abigail2.jpg';
import resume from '../images/abigail/AbigailKumar_November2018.pdf';

class Abigail extends React.Component {
  componentWillMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    setTimeout(function() {
      document.body.style.overflow = 'visible';
    },500)
  }

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
        <div className='abigail-container'>
          <div className='abigail-wrapper'>
            <div className='abigail-content'>
              <img src={abigail} alt='cool pic of me' id='me'/>
            </div>
          </div>
          <div className='about--wrapper'>
            <div className='about--content'>
              <h4>I’m an interactive designer and developer who loves video games, football (go Bills!), working out, huskies, and travel. I plan to touch all seven continents by 2022.</h4>
              <div className='extras'>
                <a href="mailto:aekumar2@illinois.edu?Subject=Hey!" target="_top">Say hey</a>
                <a href = {resume} target = "_blank" rel="noopener noreferrer">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <img src='https://i.imgur.com/ihat3GO.png' alt='favorite thing' />
// <img src='https://i.imgur.com/OSdfmoE.png' alt='favorite thing' />
// <img src='https://i.imgur.com/Qv24SBo.png' alt='favorite thing' />
// <img src='https://i.imgur.com/kH06s4P.gif' alt='favorite thing' />
// <img src='https://i.imgur.com/VoIdNgS.png' alt='favorite thing' />
// <img src='https://i.imgur.com/UZbih9N.png' alt='favorite thing' />
// <img src='https://i.imgur.com/7IYFWwu.png' alt='favorite thing' />
// <img src='https://i.imgur.com/q5Q9XXt.png' alt='favorite thing' />
// <img src='https://i.imgur.com/gyuiOa1.png' alt='favorite thing' />
// <img src='https://i.imgur.com/4FRweDd.png' alt='favorite thing' />

export default Abigail;
