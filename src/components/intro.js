import React, { Component } from 'react'

export default class Intro extends Component {
  render() {
    return (
    <div>
      <p> A website for spontaneous adventurerers blah finding last minute flights and blah blah </p>
      <button onClick={this.props.handleClick}> Let's get started </button>
    </div>
  ); 
  }  
}
