import React, { Component } from 'react'

class Prostate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paragraph: "Here must be a paragraph like Lorem ipsum and so on. Feel free to change it anytime in the state of Prostate Class",
      quotation: "Feel free to write a quotation in the state of Prostate class"
    }
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <Pro paragraphProp={this.state.paragraph}/>
        <Sta quotationProp={this.state.quotation}/>
      </div>
    );
  }
}

class Pro extends Component {
  render() {
    return (
      <div>
        {this.props.paragraphProp}
      </div>
    );
  }
}

class Sta extends Component {
  render() {
    return (
      <div>
        {this.props.quotationProp}
      </div>
    );
  }
}

export default Prostate;
