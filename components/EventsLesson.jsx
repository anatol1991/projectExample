import React, { Component } from 'react'

class Events extends Component {
  constructor() {
    super();
    this.state = {
      data: "A string..."
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState() {
    this.setState({data: "Updated from child Component"})
  }

  render() {
    return (
      <div style={{marginBottom: 60, marginLeft: 300}}>
        <EventContent updateProps={this.updateState} stateData={this.state.data}></EventContent>
      </div>
    );
  }
}

class EventContent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateProps}>CLICK</button>
        <h3>{this.props.stateData}</h3>
      </div>
    );
  }
}

export default Events;
