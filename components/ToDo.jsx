import React, { Component } from 'react'

export default class ToDo extends Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}
