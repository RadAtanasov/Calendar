import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

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
