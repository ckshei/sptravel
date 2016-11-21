import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCities } from '../actions/fetch_cities'
import { changeToDate } from '../actions/index'

class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.renderCities = this.renderCities.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(ev) {
    this.setState({ term: ev.target.value });
    this.props.fetchCities(ev.target.value);
  }

  onFormSubmit(ev) {
    ev.preventDefault();
    this.props.changeToDate();
  }

  renderCities() {
    if (this.props.cities && this.props.cities.length >= 1) {
      return this.props.cities.map((city) => city.PlaceName)
    } else {
      return 'no cities to be rendered' 
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
  return bindActionCreators({ fetchCities, changeToDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartureCity);
