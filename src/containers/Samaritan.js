import React, {Component} from 'react';
import '../projects.css';

class Samaritan extends Component {

  render() {
    return(
    <div>
      <div className='white-cover' id="samaritan-images" >
        <img src='https://i.imgur.com/6SgayNL.jpg' className='single-col-image' alt="Samaritan Mockups" />
        <img src='https://i.imgur.com/eFFwYxI.jpg' className='single-col-image' alt="Samaritan Mockups" />
        <img src='https://i.imgur.com/7fKEaJc.jpg' className='single-col-image' alt="Samaritan Mockups" />
        <img src='https://i.imgur.com/dKBhOdx.jpg' className='single-col-image' alt="Samaritan Mockups" />
      </div>
    </div>
    );
  }
}

export default Samaritan;
