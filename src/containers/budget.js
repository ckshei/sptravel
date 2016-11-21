import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dates extends Component {
  constructor(props) {
    super(props);  

  }

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
