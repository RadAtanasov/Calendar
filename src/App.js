import React, { Component } from 'react';
import {browserHistory, Route, Router} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import store from "./store/store";

import HomePage from './components/HomePage'

const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <Route path="/" component={HomePage}>

            </Route>
        </Router>
    );
  }
}

export default App;
