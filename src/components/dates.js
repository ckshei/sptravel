import React, { Component } from 'react'

export default class Dates extends Component {
  render() {
    return (
    <div>
      Departure: <input type="date" />
      Return: <input type="date" />
      <button> Confirm </button>
    </div>
  ); 
  }  
}