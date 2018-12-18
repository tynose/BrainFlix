import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
import './App.scss';
import videoData from './videoData';

class App extends Component {
  constructor() {
    super();

    this.setActiveVideoId = this.setActiveVideoId.bind(this);
    const idQueryParam = Number(window.location.search.split('=')[1]);

    this.state = {
      activeVideoId: idQueryParam || videoData[0].id,
      videoData,
    }
  }

  
  setActiveVideoId(id) {
    const pageUrl = `?video=${id}`;
    window.history.pushState('', '', pageUrl);
    // const reset = window.location.reload();

    
    this.setState({
      activeVideoId: id,
      // reset
    })
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main onVideoChange={this.setActiveVideoId} {...this.state} />
      </div>
    );
  }
}

export default App;
