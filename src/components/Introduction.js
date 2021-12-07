import React, {Component} from 'react';
import '../projects.css';

class Introduction extends Component {
  render() {

    return(
      <div className='introduction'>
        <div className='wrapper'>
          <div className='content'>
            <h4>This website was 100% hand-coded using React</h4>
            <h5>Head down to see a few of my favorite projects</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Introduction;
