import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDeparture, setReturn } from '../actions/set_query'
import { changeToBudget } from '../actions/index'
import { fetchTrips } from '../actions/fetch_trips'

const today = new Date()
class TravelDate extends Component {
  constructor(props) {
    super(props);
    this.state = { departureDate: today.toISOString().substring(0, 10), returnDate: '' }
    this.onDepartureChange = this.onDepartureChange.bind(this);
    this.onReturnChange = this.onReturnChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
}
  onDepartureChange(ev) {
    this.setState({ departureDate: ev.target.value })
    this.props.setDeparture(ev.target.value);
  }
  
  onReturnChange(ev) {
    this.setState({ returnDate: ev.target.value });
    this.props.setReturn(ev.target.value);
  }

  onFormSubmit(ev) {
    ev.preventDefault();
    this.props.fetchTrips(this.props.city, this.state.departureDate, this.state.returnDate)
    this.props.changeToBudget();
  }

  render() {
    return (
    <form onSubmit={this.onFormSubmit}>
      Departure: <input onChange={this.onDepartureChange} value={this.state.departureDate} type="date" />
      Return: <input onChange={this.onReturnChange} value={this.state.returnDate} type="date" />
      <button type='submit'> Confirm </button>
    </form>
  ); 
  }  
}

function mapStateToProps(state) {
  return {
  city: state.query.city,
  departureDate: state.query.departureDate,
  returnDate: state.query.returnDate
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setDeparture, setReturn, changeToBudget, fetchTrips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelDate);
