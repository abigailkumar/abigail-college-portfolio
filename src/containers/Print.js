import React, {Component} from 'react';
import '../projects.css';
import {isMobileOnly} from 'react-device-detect'

class Print extends Component {
  constructor(props){
    super(props);

    this.state = {
      display: 'inherit'
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let pos = document.getElementById('print-behance').getBoundingClientRect();

    if (pos.top > 0) {
      this.setState({
        display: 'inherits'
      })
    }
    if (pos.top < 0) {
      this.setState({
        display: 'none'
      })
    }
  }

  render() {
    if(isMobileOnly) {
      return(
        <div>
          <div style={{ display: this.state.display, zIndex:'10000', backgroundColor: 'rgba(255,255,255,0)', top: "0", left: "0", width: "100%", height: "0", position: "absolute"}} ></div>
          <div className='white-cover'>
            <div style={{left: '0', width: '100%', height: "0", position: "relative", paddingBottom: "141.4227%"}}>
              <iframe id="print-behance" src="https://www.behance.net/gallery/74754341/Print-Work?iframe=1" style={{border: "0", top: "0", left: "0", width: "100%", height: "100%", position: "absolute"}} title="Print-Work-behance" allowFullScreen allow="encrypted-media" ></iframe>
            </div>
          </div>
        </div>
      );
    }

    return(
      <div>
        <div style={{ display: this.state.display, zIndex:'10000', backgroundColor: 'rgba(255,255,255,0)', top: "0", left: "0", width: "100%", height: "100vh", position: "absolute"}} ></div>
        <div className='white-cover'>
          <div style={{left: '0', width: '100%', height: "0", position: "relative", paddingBottom: "141.4227%"}}>
            <iframe id="print-behance" src="https://www.behance.net/gallery/74754341/Print-Work?iframe=1" style={{border: "0", top: "0", left: "0", width: "100%", height: "100%", position: "absolute"}} title="Print-Work-behance" allowFullScreen allow="encrypted-media" ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Print;
