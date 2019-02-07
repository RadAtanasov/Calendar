import React, { Component } from 'react';
// import {browserHistory} from "react-routers";
import {BrowserRouter, Route} from 'react-router-dom';
// import {syncHistoryWithStore} from "react-routers-redux";
// import store from "./store/store";

import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';

// const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/auth" component={AuthPage}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
