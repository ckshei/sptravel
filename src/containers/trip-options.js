import React, { Component } from 'react';
import { connect } from 'react-redux';

class TripOptions extends Component {
  renderList() {
    return this.props.trips.map((trip) => {
      return (
      <li key={trip.destination}> {trip.destination} </li>
      );
    }); 
  }

  render() {
    return(
    <ul>
      {this.renderList()}
    </ul>
  ) 
  }  
}
function mapStateToProps(state) {
  return {
    trips: state.trips
  };
}

export default connect(mapStateToProps)(TripOptions);
