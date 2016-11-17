import React, { Component } from 'react'

export default class Dates extends Component {
  render() {
    return (
    <div>
      <input type="text" value="What is your budget?" />
      <button onClick={() => this.props.handleClick()}> Confirm </button>
      <p>Recommended Budget: Insert Recommended</p>
      <p>Minimum Budget: Insert Min</p>
    </div>

  ); 
  }  
}
