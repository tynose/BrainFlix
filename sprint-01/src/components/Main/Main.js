import React, { Component } from 'react';
import './Main.scss';
import VideoPlayer from './VideoPlayer/VideoPlayer'

class Main extends Component {
  render() { 
    return ( 
      <main>
        <VideoPlayer {...this.props} />
      </main>
     );
  }
}
 
export default Main;