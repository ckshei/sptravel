import React, { Component } from 'react';
import logo from './logo.svg';
import MainContainer from './containers/main-container';
import TripOptions from './containers/trip-options'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Travel Roulette</h2>
        </div>
        <TripOptions />
        <MainContainer />
      </div>
    );
  }
}

export default App;
