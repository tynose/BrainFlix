import React, { Component } from 'react';
import Header from '../Header';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import UploadVideo from '../UploadVideo/UploadVideo';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
library.add(faTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/videoplayer/:videoId" 
                  render={(props) => { return <VideoPlayer {...props} /> }
                }
              />
              <Route path='/uploadvideo' exact component={UploadVideo} />
              <Route path='/' render={() => 
                  <Redirect to='/videoplayer/f0df529f-2b1d-46c1-b4d3-ca4ac8bd36df'/>
                }
              /> 
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
