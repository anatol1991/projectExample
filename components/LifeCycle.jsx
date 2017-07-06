import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      data: 0
    }
    this.setNumber = this.setNumber.bind(this);
    this.downNumber = this.downNumber.bind(this);
  };

  setNumber() {
    this.setState({data: this.state.data + 1})
  }
  downNumber() {
    this.setState({data: this.state.data - 1})
  }

  render() {
    return (
      <div id = "life" style={{marginBottom:60, marginLeft: 300}}>
        <button onClick={this.setNumber}>Set Number</button>
        <button onClick={this.downNumber} style={{marginLeft: 6}}>Down Number</button>
        <Num myNum={this.state.data}></Num>
      </div>
    );
  }
}

class Num extends Component {

  componentWillMount() {
    console.log('Componet Will Mount!')
  }

  componentDidMount() {
    console.log('Component Did Mount!');
  }

  componentWillReceiveProps(newProps) {
    console.log('Component Will Receive Props!');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('Component SHOULD Update!');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will Update!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update!');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount!');
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNum}</h3>
      </div>
    );
  }
}

export default LifeCycle;
