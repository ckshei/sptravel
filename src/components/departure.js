import React, { Component } from 'react'
import changeToDeparture from '../actions/index'

export default class Departure extends Component {
  render() {
    return (
    <div>
      <input type="text" />
      <button onClick={changeToDeparture}> Confirm </button>
    </div>
  ); 
  }  
}
