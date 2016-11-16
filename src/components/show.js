import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    return (
    <div>
      <p>
      Congratulations! You got (insert city here)

      Estimated Price: (insert price here)*
      Price found as of xx days ago

      Flight info: (insert flight info here)

      More Info... (Link to lonely planet article or feed or something)
      </p>
      <button> View Flights </button>
      <button> Spin Again </button>
    </div>
  ); 
  }  
}
