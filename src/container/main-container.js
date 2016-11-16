import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeToDeparture } from '../actions/index'
import { bindActionCreators } from 'redux';
import Intro from '../components/intro'
import Departure from '../components/departure'
import Dates from '../components/dates'
import Budget from '../components/budget'
import Show from '../components/show'

class MainContainer extends Component {
  renderView() {
    switch(this.props.view) {
      case 'departure':
        return <Departure />
      default:
        return <Intro 
          handleClick={this.props.changeToDeparture}
        /> 
    }
  }

  render() {
    return(
      <div>
        {this.renderView()}
      </div>
    );
  }  
}

function mapStateToProps(state) {
  return {
    view: state.view,
  };
} 

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeToDeparture: changeToDeparture }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
