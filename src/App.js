import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

import HomePage from './pages/Home';
import PostPage from './pages/Post';

import posts from './utils/posts';
import { LOCALSTORAGE_KEY } from './utils/constants';

class App extends Component {
  render() {
    return (
      <main className="py-5 bg-light h-100">
        <div className="container">
          <div className="row">
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/blog/:slug" component={PostPage} />
                <Route component={PageNotFound} />
              </Switch>
            </Router>
          </div>
        </div>
      </main>
    );
  }

  componentWillMount() {
    if( !localStorage.getItem(LOCALSTORAGE_KEY) ) {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(posts));
    }
  }
}

export default App;
