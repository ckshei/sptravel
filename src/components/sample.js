import React, { Component } from 'react'
import Fetch from 'react-fetch'

export default class TripOptions extends Component {
  constructor() {
    super(); 
  
    this.state = {
      trips: [] 
    };
    
  }

  componentWillMount() {
    fetch('')
}
  render() {
    return(
    <div>
    </div>
  ) 
  }  
}

