import React, { Component } from 'react'
import { connect } from 'react-redux'

class Budget extends Component {
  constructor(props) {
    super(props);  
    this.handleChange = this.handleChange.bind(this)
    this.state = { 
    budget:"",
 };
  }

  handleChange(ev) {
    this.setState({budget: ev.target.value}) 
  }

  renderQ() {
    if (this.props.trips) {
      console.log(this.props.trips.Quotes) 
    } 
  }

  render() {
    return (
      <form>
      {this.renderQ()}
      <input type="text" onChange={this.handleChange} value={this.state.budget} />
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
