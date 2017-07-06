import React, { Component } from 'react'

class Another extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.someText}</h1>
        <q>{this.props.aQuote}</q>
        <cite style={{marginLeft: 4}}>&laquo;{this.props.author}&raquo;</cite>
      </div>
    );
  }
}

Another.defaultProps = {
  someText: "Write the title of your Quote!",
  aQuote: "Succes consists of going from failure to failure withou the loss of enthusiasm",
  author: "Unknown"
}

export default Another;
