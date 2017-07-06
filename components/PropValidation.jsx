import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropValidation extends Component {
  render() {
    return (
      <div style={{marginBottom: 60}}>
        <h3>Array: {this.props.propArray}</h3>
        <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
        <h3>Function: {this.props.propFunction(71)}</h3>
        <h3>Number: {this.props.propNumber}</h3>
        <h3>String: {this.props.propString}</h3>
        <h3>Object: {this.props.propObject.objectOne}</h3>
        <h3>Object: {this.props.propObject.objectTwo}</h3>
        <h3>Object: {this.props.propObject.objectThree}</h3>
      </div>
    );
  }
}

PropValidation.propTypes = {
  propArray: PropTypes.array,
  propBool: PropTypes.bool,
  propFunction: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}

PropValidation.defaultProps = {
  propArray: [1, 2, 3, "string"],
  propBool: true,
  propFunction: function(e) {return e},
  propNumber: 123,
  propString: "A string...",
  propObject: {
    objectOne: "Value One",
    objectTwo: "Value Two",
    objectThree: "Value Three"
  }
}

export default PropValidation;
