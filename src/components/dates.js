import React, { Component } from 'react'

export default class Dates extends Component {
  render() {
    return (
    <div>
      <input type="text" value="departure date"/>
      <input type="date" value="return date"/>
      <button> Confirm </button>
    </div>
  ); 
  }  
}
