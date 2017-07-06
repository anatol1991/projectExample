import React, { Component } from 'react'

class Force extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler() {
    this.forceUpdate();
  };

  render() {
    return (
      <div style={{marginBottom: 60, marginLeft: 120}}>
        <button onClick = {this.forceUpdateHandler}>Force Update</button>
        <h4>State Array: {Math.random()}</h4>
      </div>
    );
  }
}

export default Force;
