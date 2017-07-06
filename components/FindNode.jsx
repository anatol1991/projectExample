import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class FindNode extends Component {
  constructor() {
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

  render() {
    return (
      <div style={{marginBottom: 60, marginLeft: 240}}>
        <button onClick={this.findDomNodeHandler}>Find Node</button>
        <div id="myDiv">NODE</div>
      </div>
    );
  }
}

export default FindNode;
