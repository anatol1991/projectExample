import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions.js'
import AddToDo from './AddToDo.jsx'
import ToDoList from './ToDoList.jsx'

class To extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props

    return (
      <div style={{marginBottom: 60}}>
        <AddToDo onAddClick={text => dispatch(addTodo(text))} />
        <ToDoList toDos={visibleTodos} />
      </div>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.toDos
  }
}

export default connect(select)(To)
