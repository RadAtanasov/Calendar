import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import RegisterPage from './containers/RegisterPage/RegisterPage';
import LoginPage from './containers/LoginPage/LoginPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/login" component={LoginPage}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
