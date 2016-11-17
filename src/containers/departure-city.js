import React, { Component } from 'react'

export default class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
  }

  onFormSubmit(ev) {
    ev.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.onFormSubmit}>
      Departing From:
      <input type='text' placeholder="Departure City" value={this.state.term} onChange={this.onInputChange} />
      <button type="submit"> Confirm </button>
    </form>
  ); 
  }  
}
