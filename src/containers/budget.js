import React, { Component } from 'react'
import { connect } from 'react-redux'

class Budget extends Component {
  constructor(props) {
    super(props);  
    this.state = { budget:"" };
  }

  renderQ

  render() {
    return (
      <form>
      {this.renderQ}
      <input type="text" value="What is your budget?" />
      <button onClick={() => this.props.handleClick()}> Confirm </button>
      <p>Recommended Budget: Insert Recommended</p>
      <p>Minimum Budget: Insert Min</p>
      </form>
  ); 
  }  
}

function mapStateToProps(state) {
  return {
    trips: state.trips 
  }
}

export default connect(mapStateToProps, null)(Budget);
