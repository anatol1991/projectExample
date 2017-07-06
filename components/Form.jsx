import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <div style={{marginBottom: 60, marginLeft: 300}}>
        <FormContent myData={this.state.data} updateStateProp={this.updateState}></FormContent>
      </div>
    );
  }
}

class FormContent extends Component {
  render() {
    return (
      <div>
        <input type = "text" value = {this.props.myData} onChange = {this.props.updateStateProp} />
        <h4>Typed: {this.props.myData}</h4>
      </div>
    );
  }
}

export default Form;
