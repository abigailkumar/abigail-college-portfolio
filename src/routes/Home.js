import React from 'react';
import Header from '../components/Header.js';
import NavBar from '../components/NavBar.js';
import IntroductionContainer from '../containers/IntroductionContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      visited: false
    }
  }

  render() {
    console.log(this.state.visited);
    return(
      <div className="App">
        <div>
          <div className="front">
            <NavBar />
          </div>
          <div>
            <Header />
          </div>
          <div>
            <IntroductionContainer visited={this.state.visited}/>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
