import React, { Component } from 'react'
import { connect } from 'react-redux';
import Intro from '../components/intro'
import Departure from '../components/departure'

class MainContainer extends Component {
  render() {
    return(
      <div>
        <Intro />
        <Departure />
      </div>
    );
  }  
}

function mapStateToProps(state) {
  return {
    trips: state.trips
  };
} 

export default connect(mapStateToProps)(MainContainer);
