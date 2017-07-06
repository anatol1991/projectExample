import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ClearInput extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    }
    this.updateState = this.updateState.bind(this);
    this.clearIn = this.clearIn.bind(this);
  };

  updateState(e) {
    this.setState({data: e.target.value});
  }

  clearIn() {
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.myInput).focus();
  }

  render() {
    return (
      <div style={{marginBottom: 60, marginLeft: 300}}>
        <Content clearAll={this.clearIn} updateProp={this.updateState} myData={this.state.data} cref={inputNode => this.myInput = inputNode}></Content>

      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.myData} onChange={this.props.updateProp} ref={this.props.cref}></input>
        <button onClick={this.props.clearAll} style={{marginLeft: 6}}>Edit</button>
        <h4>Typed: {this.props.myData}</h4>
      </div>
    );
  }
}

export default ClearInput;
