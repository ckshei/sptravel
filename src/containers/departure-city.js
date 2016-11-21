import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCities } from '../actions/fetch_cities'
import { changeToDate } from '../actions/index'

class DepartureCity extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
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
    console.log(this.state.city)
    // this.props.changeToDate();
  }

  renderCities() {
    if (this.props.cities && this.props.cities.length >= 1) {
      return this.props.cities.map((city) => {
        return(
          <option value={city.PlaceName} key={city.PlaceId}>{city.PlaceId}</option>
        )
      })
    } else {
      return 'no cities to be rendered' 
    }
  }

  handleClick(ev) {
    this.setState({
      city: ev.target.value
    })
  }

  render() {
    return (
    <form onSubmit={this.onFormSubmit}>
      Departing From:
      <input list="cities" placeholder="Departure City" value={this.state.term} onChange={this.onInputChange} />
      <button type="submit"> Confirming </button>
      <datalist id="cities" onClick={this.handleClick}>
        {this.renderCities()}
      </datalist>
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
