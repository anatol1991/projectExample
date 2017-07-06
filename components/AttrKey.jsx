import React, { Component } from 'react'

class AttrKey extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          component: 'First',
          id: 1
        },
        {
          component: 'Second',
          id: 2
        },
        {
          component: 'Third',
          id: 3
        }
      ]
    }
  };

  render() {
    return (
      <div style={{marginBottom: 60}}>
        {this.state.data.map((componentData, k) => <Content stateData={componentData} key={k} />)}
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <div>{this.props.stateData.component}</div>
        <div>{this.props.stateData.id}</div>
      </div>
    );
  }
}

export default AttrKey;
