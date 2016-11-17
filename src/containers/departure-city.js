import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCities } from '../actions/index'

class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
    this.props.fetchCities(ev.target.value);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCities }, dispatch);
}

export default connect(null, mapDispatchToProps)(DepartureCity);
