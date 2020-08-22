import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import './components/css/style.css'

import Nav from './components/Nav';
import Home from './components/Home';
import Submissions from './components/Submissions';
import ViewSubmissions from './components/ViewSubmissions';
import Archive from './components/Archive';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

import Mag009 from './components/PastMags/Mag009';
import Mag008 from './components/PastMags/Mag008';
import Mag007 from './components/PastMags/Mag007';
import Mag006 from './components/PastMags/Mag006';
import Mag005 from './components/PastMags/Mag005';
import Mag004 from './components/PastMags/Mag004';
import Mag003 from './components/PastMags/Mag003';
import Mag002 from './components/PastMags/Mag002';
import Mag001 from './components/PastMags/Mag001';

function initializeReactGA() {
    ReactGA.initialize('UA-163816771-1');
    ReactGA.pageview('/');
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.pageview('/issue_9');
}

class App extends Component {
  constructor(props) {
    initializeReactGA();
    super(props);
  }

  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
            <div>
              <Nav/>
              <Route path="/*" component={Home} exact />
              <Route path="/submissions" component={Submissions} exact />
              <Route path="/archive" component={Archive} exact />
              <Route path="/blog" component={Blog} exact />
              <Route path="/blog/:postIndex" component={BlogPost} />
              <Route path="/issue_9" component={Mag009} exact />
              <Route path="/archive/008" component={Mag008} exact />
              <Route path="/archive/007" component={Mag007} exact />
              <Route path="/archive/006" component={Mag006} exact />
              <Route path="/archive/005" component={Mag005} exact />
              <Route path="/archive/004" component={Mag004} exact />
              <Route path="/archive/003" component={Mag003} exact />
              <Route path="/archive/002" component={Mag002} exact />
              <Route path="/archive/001" component={Mag001} exact />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
