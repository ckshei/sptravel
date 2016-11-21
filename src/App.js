import React, { Component } from 'react';
import logo from './logo.svg';
import MainContainer from './containers/main-container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Travel Roulette</h2>
          <h3> Made with awesomeness </h3>
        </div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
