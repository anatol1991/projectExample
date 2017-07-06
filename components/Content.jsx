import React, { Component } from 'react';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
        "id": 1,
        "name": "Tolea",
        "surname": "Dubovitchi",
        "age": "27",
        "prof": "programmer"
      },
      {
        "id": 2,
        "name": "Greg",
        "surname": "Dubovitchi",
        "age": "49",
        "prof": "Worker"
      },
      {
        "id": 3,
        "name": "Ghebos",
        "surname": "Ghenka",
        "age": "27",
        "prof": "Worker"
      },
      {
        "id": 4,
        "name": "Livia",
        "surname": "Tapu",
        "age": "26",
        "prof": "Doc"
      }
    ]
    }
  }
  render() {
    return (

      <table style={{marginTop: 60, border: "solid" ,borderSpacing: 20}}>
        <tbody>
          {this.state.data.map((person, k) => <TableRow key={k} data = {person} />)}
        </tbody>
      </table>

    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr style={{border: "solid"}}>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.surname}</td>
        <td>{this.props.data.age}</td>
        <td>{this.props.data.prof}</td>
      </tr>
    );
  }
}

export default Content;
