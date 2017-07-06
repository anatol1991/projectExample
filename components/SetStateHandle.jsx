import React, { Component } from 'react'

class SetStateHandle extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  };

  setStateHandler() {
    var item = "A string of data...";
    var myArr = this.state.data;
    myArr.push(item);
    this.setState({data: myArr});
  };

  render() {
    return(
      <div style={{marginBottom: 60}}>
        <button onClick = {this.setStateHandler}>Set State</button>
        <h4>State Array: {this.state.data}</h4>
      </div>
    );
  }

}

export default SetStateHandle;
