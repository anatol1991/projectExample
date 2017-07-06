import React, { Component } from 'react'
import ToDo from './ToDo.jsx'

class ToDoList extends Component {
  render() {
    return (
      <ul>
        {this.props.toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
    );
  }
}

export default ToDoList;
