import React, { Component } from 'react';
import TripOptions from '/components/sample'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TripOption />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Travel Roulette</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
