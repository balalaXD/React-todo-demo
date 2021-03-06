import ACTIONTYPES from './actionTypes';

const defaultState = {
  inputValue: '',
  todoItems: []
}

function deepCopy(json) {
  return JSON.parse(JSON.stringify(json));
}

// reducer function must be pure function, the result will not related with time, ajax request etc.
// that's given one input, return same output regardless of time and others
//
// newState.inputValue = new Date()   // WRONG
// state.inputValue = action.value    // WRONG, you can't change immutable object
export default (prevState = defaultState, action) => {
  if (action.type === ACTIONTYPES.CHANGE_INPUT_VALUE) {
    let newState = deepCopy(prevState)
    newState.inputValue = action.value

    return newState
  }

  if (action.type === ACTIONTYPES.ADD_TODO_ITEM) {
    let newState = deepCopy(prevState)
    newState.todoItems.push(newState.inputValue)
    newState.inputValue = ''

    return newState
  }

  if (action.type === ACTIONTYPES.DELETE_TODO_ITEM) {
    let newState = deepCopy(prevState)
    newState.todoItems.splice(action.value, 1)

    return newState
  }

  if (action.type === ACTIONTYPES.INIT_LIST) {
    let newState = deepCopy(prevState)
    newState.todoItems = action.value

    return newState
  }

  return prevState
}
