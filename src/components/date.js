import React, { Component } from 'react'

export default class Date extends Component {
  render() {
    return (
    <div>
      Departure: <input type="date" />
      Return: <input type="date" />
      <button onClick={() => this.props.handleClick()}> Confirm </button>
    </div>
  ); 
  }  
}
