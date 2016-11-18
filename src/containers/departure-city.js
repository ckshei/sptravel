import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCities } from '../actions/fetch_cities'

class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.renderCities = this.renderCities.bind(this)
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
    this.props.fetchCities(ev.target.value);
  }

  onFormSubmit(ev) {
    ev.preventDefault();
  }

  renderCities() {
    if (this.state.cities) {
      'render cities'
    } else {
      'no cities to be rendered' 
    }
  }

  render() {
    return (
    <form onSubmit={this.onFormSubmit}>
      Departing From:
      <input type='text' placeholder="Departure City" value={this.state.term} onChange={this.onInputChange} />
      <button type="submit"> Confirm </button>
      {this.renderCities()}
    </form>
  ); 
  }  
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureCity);
