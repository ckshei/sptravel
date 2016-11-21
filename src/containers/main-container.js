import React, { Component } from 'react'
import { connect } from 'react-redux';

// importing render actions
import { changeToDeparture, changeToDate, changeToBudget, changeToResult } from '../actions/index'
import { bindActionCreators } from 'redux';
import Intro from '../components/intro'
import DepartureCity from './departure-city'
import Date from '../containers/date'
import Budget from '../containers/budget'
import Result from '../components/result'

class MainContainer extends Component {
  renderView() {
    switch(this.props.view) {
      case 'departure':
        return <DepartureCity />
      case 'date':
        return <Date
          handleClick={this.props.changeToBudget}
        />
      case 'budget':
        return <Budget
          handleClick={this.props.changeToResult}
        />
      case 'result':
        return <Result />
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
  return bindActionCreators({ changeToDeparture: changeToDeparture, changeToDate: changeToDate, changeToBudget: changeToBudget, changeToResult: changeToResult }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
