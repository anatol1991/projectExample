import { combineReducers } from 'redux'

function toDo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }

    default:
      return state
  }
}

function toDos(state=[], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        toDo(undefined, action)
      ]

    default:
      return state
  }
}

const todoApp = combineReducers({toDos})

export default todoApp;
