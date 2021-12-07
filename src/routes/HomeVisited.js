import React from 'react';
import Navigation from '../components/Navigation.js';
import Introduction from '../components/Introduction';
import ProjectsContainer from '../containers/ProjectsContainer';
import HeroVideo from '../components/HeroVideo';

class HomeVisited extends React.Component {

  componentDidMount() {
    document.body.style.overflow = 'visible';
  }

  render() {
    return(
      <div className="App">
        <div>
          <div className="front">
            <Navigation />
          </div>
          <div>
            <HeroVideo />
          </div>
          <div>
            <div id="introduction-container">
              <Introduction />
            </div>
            <div>
              <ProjectsContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeVisited;
